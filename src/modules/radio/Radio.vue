<template>
    <sw-checkbox :type="type" v-bind="$attrs" @change="handleChange">
    </sw-checkbox>
</template>

<script>
    /**
     * @class Radio
     * @module 表单组件
     * @Constructor
     * @since 0.0.1
     * @demo radio|radio.vue
     * @show true
     */
    import SwCheckbox from '../checkbox/Checkbox.vue'
    export default {
        name: 'SwRadio',
        inheritAttrs: false,
        components: {SwCheckbox},
        methods: {
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