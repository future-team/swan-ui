<template>
    <div ref="dragAction"
         class="ph-drag-action"
         @touchstart.stop.prevent="handleTouchStart"
         @touchmove.stop.prevent="handleTouchMove"
         @touchend.stop.prevent="handleTouchEnd"
         @touchcancel.stop.prevent="handleTouchCancel">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 拖拽组件<br/>
     *
     * 事件
     * - drag：回调参数(position,evt)，拖动时时触发<br/>position: {start:{x:12,y:312},move:{x:12,y:312}}
     * - drop：回调参数(position,evt)，松开时触发<br/><br/>position: {start:{x:12,y:312},end:{x:12,y:312}}
     *
     * 示例:
     * ```code
     *     <sw-drag @drag="handleDrag" @drop="handleDrop">
     *          <div class="drag-demo">拖我出去</div>
     *     </sw-drag>
     * ```
     * ```code
     *  handleDrag(position){
     *       let prePosition = position.start
     *       let nowPosition = position.move
     *
     *       this.distanceX = this.preDistanceX + nowPosition.x - prePosition.x
     *       this.distanceY = this.preDistanceY + nowPosition.y - prePosition.y
     *
     *       this.setBoxPosition(this.distanceX,this.distanceY)
     *   },
     *   handleDrop(){
     *       this.preDistanceX = this.distanceX
     *       this.preDistanceY = this.distanceY
     *   }
     * ```
     *
     * @class Drag
     * @module 辅助组件
     * @extends Component
     * @constructor
     * @since 0.0.1
     * @demo drag|drag.js {展示}
     * @show true
     * */
    export default {
        name: 'SwDrag',
        data(){
            return {
                position: {},
                isMouseDown: false
            }
        },
        methods:{
            handleTouchStart(evt){
                this.position.start = { x: evt.touches[0].pageX, y: evt.touches[0].pageY }
                this.position.move = this.position.start
                this.$emit('drag',this.position,evt,)
                this.$emit('drag-start',this.position,evt)
            },
            handleTouchMove(evt){
                this.position.move = { x: evt.touches[0].pageX, y: evt.touches[0].pageY }
                this.$emit('drag',this.position,evt)
            },
            handleTouchEnd(evt){
                this.position.end = { x: evt.changedTouches[0].pageX, y: evt.changedTouches[0].pageY }
                this.position.start = this.position.move
                this.$emit('drop',this.position,evt)
            },
            handleTouchCancel(){
                // 触屏取消:忽然来电话等情况
            }
        }
    }
</script>