<template>
    <label class="ph-multi-group">
        <div :class="`ph-${type}`">
            <input v-bind="$props"
                   @change="handleChange"/>
            <i></i>
        </div>
        <span>{{label}}</span>
    </label>
</template>

<script>
    export default {
        name: 'SwCheckbox',
        methods: {
            handleChange(evt){
                this.$emit('change',evt.target.value,evt)
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'input'
            },
            label: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'checkbox'
            },
            disabled: Boolean,
            name: String,
            checked: Boolean,
            value: null
        }
    }
</script>
