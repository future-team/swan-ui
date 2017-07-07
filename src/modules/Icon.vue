<template>
    <span :class="classList">
        <slot></slot>
    </span>
</template>

<script>
    import SwBase from './Base.vue'
    import classnames from 'classnames'
    export default {
        name: 'SwIcon',
        extends: SwBase,
        computed: {
            classList: function () {
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
            },
            classMapping : {
                type: Object,
                default: function(){
                    return {
                        'primary':'primary',
                        'info':'info',
                        'success':'success',
                        'error':'error',
                        'warning':'warning',
                        'danger':'danger',
                        'link':'link',
                        'gray':'gray'
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "~~phoenix-styles/less/public.less";
    @import "~~phoenix-styles/less/modules/iconfont.less";
</style>