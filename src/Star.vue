<template>
    <div :class="classList">
        <div :class="setPhPrefix('star-grey')"></div>
    </div>
</template>

<script>
    import SwBase from './Base.vue'
    import classnames from 'classnames'
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
                        return false;
                    }
                    return true;
                }
            },
            phSize: {
                type: String,
                default: 'sm'
            }
        },
        computed: {
            classList: function(){
                let rateCls = 'star-'+ Math.round((this.rate*2)/10)*5;
                return classnames(this.classObject,this.setPhPrefix(rateCls));
            }
        }
    }
</script>

<style lang="less">
    @import "~phoenix-styles/less/public.less";
    @import "~phoenix-styles/less/modules/star.less";
</style>