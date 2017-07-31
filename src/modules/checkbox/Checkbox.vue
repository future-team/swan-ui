<template>
    <label class="ph-multi-group">
        <div :class="`ph-${type}`">
            <input v-bind="$props" @change="handleChange"/>
            <i></i>
        </div>
        <span>{{label}}</span>
    </label>
</template>

<script>
    /**
     * 复选框组件
     * @class Checkbox
     * @module 表单组件
     * @Constructor
     * @since 0.0.1
     * @demo checkbox|checkbox.vue
     * @show true
     */
    export default {
        name: 'SwCheckbox',
        methods: {
            handleChange(evt){
                this.$emit('change',evt.target.value,evt)
            }
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
             * 展示的文字信息
             * @property label
             * @type String
             * @default ''
             * */
            label: {
                type: String,
                default: ''
            },
            /**
             * 类型
             * @property type
             * @type String
             * @default checkbox
             * */
            type: {
                type: String,
                default: 'checkbox'
            },
            /**
             * 是否禁用
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: Boolean,
            /**
             * 名称
             * @property name
             * @type String
             * @default ''
             * */
            name: String,
            /**
             * 是否选中
             * @property checked
             * @type Boolean
             * @default false
             * */
            checked: Boolean,
            /**
             * 值
             * @property value
             * @type
             * @default
             * */
            value: null
        }
    }
</script>
