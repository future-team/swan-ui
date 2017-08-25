<template>
    <sw-checkbox :type="type" v-bind="$attrs" @change="handleChange">
    </sw-checkbox>
</template>

<script>
    /**
     * 开关
     * @class Radio
     * @module 表单组件
     * @Constructor
     * @since 1.0.0
     * @demo radio|radio.vue
     * @show true
     */
    import SwCheckbox from '../checkbox/Checkbox.vue'
    export default {
        name: 'SwRadio',
        inheritAttrs: false,
        components: {SwCheckbox},
        methods: {
            /**
             * 输入时触发
             * @event change
             * @param 输入值 value
             */
            handleChange(value,evt){
                this.$emit('change',value,evt)
            }
        },
        props: {
            type: {
                type: String,
                default: 'radio'
            }
        }
    }
</script>