<template>
    <div :class="classObject">
        <sw-drag ref="swipeDrag"
                 class="ph-swipe-content"
                 @drag="handleDrag"
                 @drop="handleDrop">
            <slot></slot>
        </sw-drag>
        <div ref="buttons" class="ph-swipe-btns">
            <sw-button v-for="button in buttons"
                       :key="button.text"
                       v-bind="button.otherProps"
                       :phStyle="button.phStyle"
                       @click="handleClick(button.onHandle)">
                {{button.text}}
            </sw-button>
        </div>
    </div>
</template>

<script>
    /**
     * 左滑组件
     *
     * 需要在移动端查看效果 点击：https://future-team.github.io/swan-ui/examples/index.html#/swipe
     * @class Swipe
     * @module 操作类组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo swipe|swipe.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import SwDrag from '../drag/Drag.vue'
    import SwButton from '../button/Button.vue'
    export default {
        name: 'SwSwipe',
        extends: SwBase,
        components: {
            SwButton,
            SwDrag
        },
        data(){
            return {
                btnsWidth: 0,
                translateX: 0,
                preTranslateX: 0,
                distance: 0
            }
        },
        methods:{
            handleDrag(position,evt){
                if(!this.btnsWidth) return
                this.translateX = this.preTranslateX + position.move.x -  position.start.x

                if(this.translateX >= 0 ){
                    this.translateX = 0
                }
                if(this.translateX <= - this.btnsWidth){
                    this.translateX = - this.btnsWidth
                }
                this.distance = position.move.x - position.start.x  //<0：左刷  >0: 右刷
                this.setSwipePosition(evt.currentTarget,this.translateX)
            },
            handleDrop(position,evt){
                if(!this.btnsWidth) return
                if(Math.abs(this.distance) < this.btnsWidth / 3){  //未滑过按钮的三分之一，则保持不变
                    this.translateX = this.distance <= 0 ? 0 : -this.btnsWidth
                }else{
                    this.translateX = this.distance <= 0 ? -this.btnsWidth : 0
                }
                this.preTranslateX = this.translateX
                this.setSwipePosition(evt.currentTarget,this.translateX)
            },
            handleClick(onHandle){
                onHandle && onHandle()
                this.setSwipeBack()
            },
            setSwipeBack(){
                this.dragActionRef.style.transform = 'translateX(0)'
            },
            setSwipePosition(target,translateX){
                target.style.transform = 'translateX('+ translateX +'px)'
                target.style.webkitTransform = 'translateX('+ translateX +'px)'
            }
        },
        mounted(){
            this.btnsWidth = this.$refs.buttons.offsetWidth
            this.dragActionRef = this.$refs.swipeDrag
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'swipe'
             * */
            classPrefix: {
                type: String,
                default: 'swipe'
            },
            /**
             * 按钮组
             * @property buttons
             * @type Array
             * */
            buttons: {
                type: Array,
                default: function(){
                    return []
                }
            }
        }
    }
</script>