<template>
    <span :class="classList">
        <slot></slot>
    </span>
</template>

<script>
    import SwBase from '../Base.vue'
    import classnames from 'classnames'
    export default {
        name: 'SwIcon',
        extends: SwBase,
        computed: {
            classList() {
                return classnames('gfs-icon',this.phIcon? this.classPrefix + '-' + this.phIcon:'')
               }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'icon'
            },
            phIcon: {
                type: String,
                default: ''
            },
            phStyle: {
                type: String,
                default: 'primary'
            },
            phSize: {
                type: String,
                default: 'sm'
            }
        }
    }
</script>

<!--<style lang="less" src="phoenix-styles/less/public.less"></style>-->
<!--<style lang="less" src="phoenix-styles/less/modules/iconfont.less"></style>-->