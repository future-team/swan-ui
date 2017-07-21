<template>
    <div :class="classObject" >
        <transition name="popup-fade">
            <div v-if="visible" class="ph-popup-shadow popup-slide-aminate" @click="handleClose"></div>
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
    import SwBase from '../Base.vue'
    import toggle from '../../mixins/toggle'
    export default {
        name: 'SwPopup',
        extends: SwBase,
        mixins: [toggle],
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
             * 弹层的位置,默认top
             * @property align
             * @type String
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