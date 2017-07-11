<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    import SwBase from './Base.vue'
    export default {
        name: 'SwRow',
        extends: SwBase,
        props: {
            classPrefix: {
                type: String,
                default: 'row'
            },
            align: {
                type: String,
                default: 'stretch',
                validator(val){
                    return ['top','bottom','center','stretch','baseline'].indexOf(val) >= 0
                }
            }
        }
    }
</script>

<!--<style lang="less" src="phoenix-styles/less/public.less"></style>-->
<!--<style lang="less" src="phoenix-styles/less/modules/grid.less"></style>-->