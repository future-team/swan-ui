<template>
    <div class="ph-textarea-field">
        <textarea :class="classObject"
                  :value="currentValue"
                  :maxlength="maxlength"
                  :placeholder="placeholder"
                  @input="handleChange">
        </textarea>
        <span :class="['ph-textarea-count',count? 'show':'hide']">
            <b class="ph-textarea-length">{{inputLength}}</b>/<b>{{maxlength}}</b>
        </span>
    </div>
</template>
<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwTextarea',
        extends: SwBase,
        data(){
            return {
                currentValue : this.value
            }
        },
        computed: {
            inputLength(){
                return this.currentValue ? this.currentValue.length : 0
            }
        },
        methods: {
            handleChange(evt){
                this.currentValue = evt.target.value
                this.$emit('input',this.currentValue,evt)
                this.$emit('change',this.currentValue,evt)
            }
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'textarea'
             * */
            classPrefix: {
                type: String,
                default: 'textarea'
            },
            /**
             * 初始值
             * @property value
             * @type String
             * */
            value: String,
            /**
             * 是否显示输入计数
             * @property count
             * @type Boolean
             * */
            count: Boolean,
            /**
             * 可输入的总长度
             * @property maxLength
             * @type Number
             * */
            maxlength: Number,
            /**
             * 输入提示
             * @property placeholder
             * @type String
             * */
            placeholder: String
        }
    }
</script>
