<template>
    <div :class="classObject">
        <transition name="dialog-fade">
            <div v-show="visible" class="ph-dialog-shadow animated" @click="handleShadowClose"></div>
        </transition>
        <transition name="dialog-fade">
            <div v-if="visible" class="ph-dialog-main animated">
                <div class="ph-dialog-content animated">
                    <a href="javascript:;"
                       :class="['ph-dialog-close',closeButton ? 'show':'hide','gfs-icon icon-close']"
                       @click="handleClose"></a>
                    <h2 class="ph-dialog-title">
                        <slot name="title">
                            <span>{{title}}</span>
                        </slot>
                    </h2>
                    <div class="ph-dialog-body">
                        <slot></slot>
                    </div>
                    <div class="ph-dialog-footer clearfix">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwDialog',
        extends: SwBase,
        model: {
            prop: 'visible',
            event: 'visible-change'
        },
        methods: {
            handleShadowClose(){
                if(!this.shadowDisabled){
                    this.handleClose()
                }
            },
            handleClose(){
                this.$emit('visible-change',false)
                this.attachHandler && this.attachHandler()
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'dialog'
            },
            visible: {
                type: Boolean,
                default: false
            },
            closeButton: {
                type: Boolean,
                default: false
            },
            shadowDisabled: {
                type: Boolean,
                default: false
            },
            title: String,
            attachHandler: Function
        }
    }
</script>

<style>
    .dialog-fade-enter-active{
        transition: opacity .5s
    }
    .dialog-fade-enter, .dialog-fade-leave-to {
        opacity: 0
    }
</style>