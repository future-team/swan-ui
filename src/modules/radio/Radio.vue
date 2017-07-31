<template>
    <sw-checkbox :type="type" v-bind="$attrs" @change="handleChange">
    </sw-checkbox>
</template>

<script>
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