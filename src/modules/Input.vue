<template>
    <div :class="classList">
        <input ref="inputRef"
               :type="currentType"
               :value="currentValue"
               @input="handleChange"
               @focus="handleFocus"
               @blur="handleBlur"/>
        <label :class="labelClass">
            <sw-icon v-if="phIcon" :phIcon="phIcon"></sw-icon>
            <span class="ph-input-placeholder-text">{{placeholder}}</span>
        </label>
        <sw-icon v-if="visibleStatus"
                 :class="['gfs-icon-close',this.canSee ? 'gfs-icon-active' : '']"
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
    import SwBase from './Base.vue'
    import SwIcon from './Icon.vue'
    import classnames from 'classnames'
    import { setPhPrefix } from '../utils/classUtil'
    import { warning } from '../utils/tool'
    export default {
        name: 'SwInput',
        extends: SwBase,
        components: { SwIcon },
        data() {
            console.log( this.value)
            return {
                currentType: this.type,
                canSee: false,
                focus: false,
                currentValue: this.value
            }
        },
        computed: {
            classList() {
                return classnames(this.classObject,this.phIcon ? setPhPrefix('input-heading'):'')
            },
            labelClass(){
                let placeholderShow = !this.focus && !this.currentValue
                return classnames(setPhPrefix('input-placeholder'),
                    !placeholderShow ? setPhPrefix('input-placeholder-hide'):'')
            },
            clearStatus(){
                console.log('clearStatus',this.clear && this.currentValue && this.focus)
                return this.clear && this.currentValue && this.focus
            },
            visibleStatus(){
                return this.visible && this.type == 'password'
            },
            errorState(){
                console.log(this.error)
                return this.error && !this.focus
            }
        },
        methods: {
            handleChange(evt){
                this.focus = true
                let value = evt.target.value
                this.currentValue = value
                this.$emit('input',value)
                this.$emit('change',value)
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
                clearTimeout(this.timer)
                this.currentValue = ''
                this.$refs.inputRef.focus()
            },
            handleVisible(){
                console.log('handleVisible')
                this.canSee = !this.canSee
                this.currentType = this.canSee ? 'text': 'password'
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'input'
            },
            type: {
                type: String,
                default: 'text',
                validator: function(val){
                    if(['checkbox', 'radio'].indexOf(val) >= 0){
                        warning('Input组件: type 为 checkbox|radio 请对应使用 Checkbox|Radio 组件!')
                    }
                    return true
                }
            },
            clear: {
                type: Boolean,
                default: false,
                validator: function(){
                    return true
                }
            },
            visible: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
            phIcon: {
                type: String,
                default: ''
            },
            placeholder: String,
            value: null
        }
    }

</script>

<style lang="less">
    @import "~~phoenix-styles/less/public.less";
    @import "~~phoenix-styles/less/modules/form.less";
</style>