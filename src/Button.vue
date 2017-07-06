<template>
    <button v-bind:class="classObject"
            v-on:click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    import SwBase from './Base.vue'
    export default {
        name: 'SwButton',
        extends: SwBase,
        methods: {
            handleClick: function(evt){
                this.$emit('click',evt)
            }
        },
        props:{
            classPrefix: {
                type: String,
                default: 'button'
            },
            phSize: {
                type: String,
                default: 'sm'
            },
            phStyle: {
                type: String,
                default: 'primary'
            },
            block: Boolean,
            radius: Boolean,
            hollow: Boolean,
            disabled: Boolean,
            active: Boolean,
            phIcon: String,
            stable: Boolean
        }
    }
</script>

<style lang="less">
    @import "../node_modules/phoenix-styles/less/public.less";
    @import "../node_modules/phoenix-styles/less/modules/buttons.less";
</style>