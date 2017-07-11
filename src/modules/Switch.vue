<template>
    <label :class="classObject">
        <input type="checkbox"
               :checked="checked"
               @click="handleClick"/>
        <div class="ph-checkbox"></div>
    </label>
</template>

<script>
    import SwBase from './Base.vue'
    export default {
        name: 'SwSwitch',
        extends: SwBase,
        methods: {
            handleClick(evt){
                this.$emit('click',evt)
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'switch'
            },
            checked: {
                type: Boolean,
                default: false
            }
        }
    }
</script>