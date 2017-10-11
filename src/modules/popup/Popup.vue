<template>
    <div :class="classObject" >
        <transition name="popup-fade">
            <div v-if="visible" class="ph-popup-shadow popup-slide-aminate" @click="handleToggle(false)"></div>
        </transition>
        <transition :name="`popup-slide-${align}`" >
            <span v-if="visible" class="ph-popup-main popup-slide-aminate">
                <div  class="ph-popup-content ">
                    <slot></slot>
                </div>
            </span>
        </transition>
    </div>
</template>

<script>
    /**
     * 顶部/底部弹出
     * @class Popup
     * @module 弹出类组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo popup|popup.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import toggle from '../../mixins/toggle'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwPopup',
        extends: SwBase,
        mixins: [toggle],
        created(){
            new Logger('Popup')
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'popup'
             * */
            classPrefix: {
                type: String,
                default: 'popup'
            },
            /**
             * 弹层的位置,可选值['top','bottom']
             * @property align
             * @type String
             * @default 'top'
             * */
            align: {
                type: String,
                default: 'top'
            }
        }
    }
</script>

<style>
    .popup-slide-aminate{
        transition: opacity 0.3s, transform .3s;
    }
    .popup-fade-enter,.popup-fade-leave-active{
        opacity: 0
    }
    .popup-slide-bottom-enter,.popup-slide-bottom-leave-active{
        transform: translateY(100%);
        opacity: 0;
    }

    .popup-slide-top-enter,.popup-slide-top-leave-active{
        transform: translateY(-100%);
        opacity: 0
    }
</style>