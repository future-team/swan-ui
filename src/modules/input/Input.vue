<template>
    <div :class="[classObject,{'ph-input-heading':phIcon}]">
        <input ref="inputRef"
               :type="currentType"
               :value="currentValue"
               v-bind="$attrs"
               @input="handleChange"
               @focus="handleFocus"
               @blur="handleBlur"/>
        <label :class="['ph-input-placeholder',{'ph-input-placeholder-hide': focus || currentValue}]">
            <sw-icon v-if="phIcon" :phIcon="phIcon"></sw-icon>
            <span class="ph-input-placeholder-text">{{placeholder}}</span>
        </label>
        <sw-icon v-if="visibleStatus"
                 :class="['gfs-icon-visible',this.canSee ? 'gfs-icon-active' : '']"
                 :phIcon="this.canSee ? 'camera': 'camera-fill'"
                 @click.native="handleVisible"></sw-icon>
        <sw-icon v-show="clearStatus"
                 class="gfs-icon-close"
                 phIcon="fail-fill"
                 @click.native="handleClear"></sw-icon>
        <sw-icon v-if="errorState"
                 class="gfs-icon-error"
                 phIcon="tip-fill"></sw-icon>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    export default {
        name: 'SwInput',
        extends: SwBase,
        inheritAttrs: false,
        components: { SwIcon },
        data() {
            return {
                currentType: this.type,
                canSee: false,
                focus: false,
                currentValue: this.value
            }
        },
        computed: {
            clearStatus(){
                return this.clear && this.currentValue && this.focus
            },
            visibleStatus(){
                return this.visible && this.type === 'password'
            },
            errorState(){
                return this.error && !this.focus
            },
            nativeProps(){
                let props = ['name','maxlength','minlength','disabled','autocomplete','autofocus','min','max','readonly']
                let nativeProps = {}
                props.forEach((key)=>{
                    if(this.$props[key]){
                        nativeProps[key] = this.$props[key]
                    }
                })
                return nativeProps
            }
        },
        methods: {
            handleChange(evt){
                this.focus = true
                let value = evt.target.value
                this.currentValue = value
                this.$emit('input',value,evt)
                this.$emit('change',value,evt)
            },
            handleFocus(){
                this.focus = true
                this.$emit('focus')
            },
            handleBlur(){
                this.$emit('blur')
                //点击清除icon时会触发handleBlur，使this.focus为false,而无法触发handleClear，所以需要添加setTimeout
                this.timer = setTimeout(()=>{
                    this.focus = false
                })
            },
            handleClear(){
                this.timer && clearTimeout(this.timer)
                this.currentValue = ''
                this.$refs.inputRef.focus()
            },
            handleVisible(){
                this.canSee = !this.canSee
                this.currentType = this.canSee ? 'text': 'password'
            }
        },
        watch: {
            value(val){
                this.currentValue = val
            }
        },
        beforeDestroy(){
            this.timer && clearTimeout(this.timer)
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'input'
             * */
            classPrefix: {
                type: String,
                default: 'input'
            },
            /**
             * input类型, 除checkbox和radio之外的原生input类型, 默认text
             * @property type
             * @type String
             * @default 'text'
             * */
            type: {
                type: String,
                default: 'text',
                validator: function(val){
                    return ['checkbox', 'radio'].indexOf(val) < 0
                }
            },
            /**
             * 是否显示[清除已经输入的内容按钮]，仅适用于text,search,password的类型
             * @property clear
             * @type Boolean
             * */
            clear: Boolean,
            /**
             * 是否显示[密码是否可见按钮]，仅适用于password的类型
             * @property visible
             * @type Boolean
             * */
            visible: Boolean,
            /**
             * 是否错误
             * @property error
             * @type Boolean
             * */
            error: Boolean,
            /**
             * icon符号类型
             * @property phIcon
             * @type String
             * @default ''
             **/
            phIcon: {
                type: String,
                default: ''
            },
            /**
             * 以下是input原生属性
             * @property phIcon
             * @type String
             * @default ''
             **/
            placeholder: String,
            disabled: Boolean
        }
    }
</script>

