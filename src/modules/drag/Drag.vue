<template>
    <div class="ph-drag-action"
         @touchstart.stop.prevent="handleTouchStart"
         @touchmove.stop.prevent="handleTouchMove"
         @touchend.stop.prevent="handleTouchEnd"
         @touchcancel.stop.prevent="handleTouchCancel">
        <slot></slot>
    </div>
</template>

<script>
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
                this.$emit('drag',evt,this.position)
                this.$emit('drag-start',evt,this.position)
            },
            handleTouchMove(evt){
                this.position.move = { x: evt.touches[0].pageX, y: evt.touches[0].pageY }
                this.$emit('drag',evt,this.position)
            },
            handleTouchEnd(evt){
                this.position.end = { x: evt.changedTouches[0].pageX, y: evt.changedTouches[0].pageY }
                this.position.start = this.position.move
                this.$emit('drop',evt,this.position)
            },
            handleTouchCancel(){
                // 触屏取消:忽然来电话等情况
            }
        }
    }
</script>