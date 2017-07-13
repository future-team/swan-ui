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
    export default {
        name: 'SwPopup',
        extends: SwBase,
        model: {
            prop: 'visible',
            event: 'visible-change'
        },
        methods: {
            handleClose(){
                this.$emit('visible-change',false)
                this.closeCallback && this.closeCallback()
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'popup'
            },
            align: {
                type: String,
                default: 'top'
            },
            visible: Boolean
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