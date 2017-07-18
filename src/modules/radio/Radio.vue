<template>
    <sw-checkbox v-bind="$props" @change="handleChange">
    </sw-checkbox>
</template>

<script>
    import SwCheckbox from '../checkbox/Checkbox.vue'
    export default {
        name: 'SwRadio',
        components: {SwCheckbox},
        methods: {
            handleChange(value,evt){
                this.$emit('change',value,evt)
            }
        },
        props: Object.assign({},SwCheckbox.props,{
            type: {
                type: String,
                default: 'radio'
            }
        })
    }
</script>