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
    /**
     * @class Textarea
     * @module 表单组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo textarea|textarea.vue
     * @show true
     */
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
            /**
             * 输入时触发
             * @event input／change
             * @param 输入值 value
             */
            handleChange(evt){
                this.currentValue = evt.target.value
                this.$emit('input',this.currentValue,evt)
                this.$emit('change',this.currentValue,evt)
            }
        },
        watch: {
            value(val){
                this.currentValue = val
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
             * 值
             * @property value
             * @type String
             * */
            value: String,
            /**
             * 是否显示输入计数
             * @property count
             * @type Boolean
             * @default false
             * */
            count: Boolean,
            /**
             * 可输入的字符总数
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
