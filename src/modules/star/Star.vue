<template>
    <div :class="classList">
        <div class="ph-star-grey"></div>
    </div>
</template>

<script>
    /**
     * @class Star
     * @module 基础组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo star|star.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import classnames from 'classnames'
    import { setPhPrefix } from '../../utils/classUtil'
    export default {
        name: 'SwStar',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'star'
             * */
            classPrefix: {
                type: String,
                default: 'star'
            },
            /**
             * 星级评价分数
             * @property rate
             * @type Number
             * @default 默认为0，最高50
             * */
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
            /**
             * 星星大小
             * @property phSize
             * @type String
             * @default 'sm'
             * */
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
