<template>
    <div class="clearfix"
         :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    import SwBase from './Base.vue'
    export default {
        name: 'SwButtonGroup',
        extends: SwBase,
        props: {
            classPrefix : {
                type: String,
                default: 'button-group'
            },
            phType: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~~phoenix-styles/less/public.less";
    @import "~~phoenix-styles/less/modules/button-group.less";
</style>