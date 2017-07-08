<template>
    <div :class="classList">
        <slot></slot>
    </div>
</template>

<script>
    import SwBase from './Base.vue'
    import classnames from 'classnames'
    import { setPhPrefix } from '../utils/classUtil'
    export default {
        name: 'SwGrid',
        extends: SwBase,
        computed: {
            classList(){
                return classnames(this.classObject,this.fluid ? setPhPrefix('grid-fluid'):'')
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'grid'
            },
            fluid: String
        }
    }
</script>

<style lang="less">
    @import "~~phoenix-styles/less/public.less";
    @import "~~phoenix-styles/less/modules/grid.less";
</style>