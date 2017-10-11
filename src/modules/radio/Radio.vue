<template>
    <sw-checkbox :type="type" v-bind="$attrs" @change="handleChange">
    </sw-checkbox>
</template>

<script>
    /**
     * 单选框
     * @class Radio
     * @module 表单组件
     * @Constructor
     * @since 1.0.0
     * @demo radio|radio.vue
     * @show true
     */
    import SwCheckbox from '../checkbox/Checkbox.vue'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwRadio',
        inheritAttrs: false,
        components: {SwCheckbox},
        created(){
            new Logger('Radio')
        },
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