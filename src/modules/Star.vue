<template>
    <div :class="classList">
        <div class="ph-star-grey"></div>
    </div>
</template>

<script>
    import SwBase from './Base.vue'
    import classnames from 'classnames'
    import { setPhPrefix } from '../utils/classUtil'
    export default {
        name: 'SwStar',
        extends: SwBase,
        props: {
            classPrefix: {
                type: String,
                default: 'star'
            },
            rate: {
                type: [Number,String],
                default: 0,
                validator: function(val){
                    if(typeof val == 'string' && parseInt(val) != val){
                        return false
                    }
                    return true
                }
            },
            phSize: {
                type: String,
                default: 'sm'
            }
        },
        computed: {
            classList(){
                let rateCls = 'star-'+ Math.round((this.rate*2)/10)*5
                return classnames(this.classObject,setPhPrefix(rateCls))
            }
        }
    }
</script>

<!--<style lang="less" src="phoenix-styles/less/public.less"></style>-->
<!--<style lang="less" src="phoenix-styles/less/modules/star.less"></style>-->