<template>
    <button :class="classObject"
            @click="handleClick">
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
                this.$emit('click',this.id)
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

<style lang="less" scoped>
    @import "~~phoenix-styles/less/public.less";
    @import "~~phoenix-styles/less/modules/buttons.less";
</style>