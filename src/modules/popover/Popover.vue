<template>
    <div style="position: relative;display: inline-block">
        <div :class="`ph-popover ph-popover-${placement} show`">
            <div v-show="visible" class="ph-popover-arrow" ref="arrowElem" :style="position.arrowPosition"></div>
            <div v-show="visible" class="ph-popover-main" ref="contentElem" :style="position.contentPosition">
                <div class="ph-popover-content" >
                    <slot name="content"><div class="ph-popover-text" style="white-space: nowrap">{{content}}</div></slot>
                </div>
            </div>
        </div>
        <div ref="targetElem" @click.stop="handleClick">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SwPopover',
        data(){
            return {
                position: {},
                visible: false
            }
        },
        methods: {
            handleClick(){
                this.visible = !this.visible
            },
            handleDocumentClick(){
                this.visible = false
            }
        },
        watch:{
            visible(val){
                if(val){
                    this.$nextTick(()=>{
                        this.targetWidth = this.$refs.targetElem.clientWidth
                        this.targetHeight = this.$refs.targetElem.clientHeight
                        this.arrowWidth = this.$refs.arrowElem.clientWidth
                        this.arrowHeight = this.$refs.arrowElem.clientHeight
                        this.contentWidth = this.$refs.contentElem.clientWidth
                        this.contentHeight = this.$refs.contentElem.clientHeight

                        let arrowPosition = {}
                        let contentPosition = {}
                        switch (this.placement) {
                            case 'bottom' :
                                arrowPosition = {
                                    top: this.targetHeight + this.distance + 'px',
                                    left: this.targetWidth / 2 + 'px'
                                }
                                contentPosition = {
                                    top: this.targetHeight + this.arrowHeight/2 + this.distance + 'px',
                                    left: 0
                                }
                                break
                            case 'top':
                                arrowPosition = {
                                    top: -this.distance + 'px',
                                    left: this.targetWidth / 2 + 'px'
                                }
                                contentPosition = {
                                    top: - (this.contentHeight + this.arrowHeight/2 + this.distance) + 'px',
                                    left: 0
                                }
                                break
                            case 'left':
                                arrowPosition = {
                                    top: this.targetHeight/2 + 'px',
                                    left: -this.distance + 'px'
                                }
                                contentPosition = {
                                    top:  -(this.contentHeight - this.targetHeight)/2 + 'px',
                                    left: -(this.contentWidth + this.arrowWidth + this.distance) + 'px'
                                }
                                break
                            case 'right':
                                arrowPosition = {
                                    top: this.targetHeight/2 + 'px',
                                    left: (this.targetWidth + this.arrowWidth/2 + this.distance) + 'px'
                                }
                                contentPosition = {
                                    top:  -(this.contentHeight - this.targetHeight)/2 + 'px',
                                    left:  this.targetWidth + this.arrowWidth + this.distance  + 'px'
                                }
                                break
                            default :
                                arrowPosition = {}
                        }
                        this.position = {
                            arrowPosition,
                            contentPosition
                        }
                    })
                }
            }
        },
        mounted(){
            document.addEventListener('click', this.handleDocumentClick)
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'popover'
             * */
            classPrefix: {
                type: String,
                default: 'popover'
            },
            /**
             * 气泡的位置
             * @property placement
             * @type String
             * @default 'bottom'
             * */
            placement: {
                type: String,
                default: 'bottom'
            },
            /**
             * 气泡距离点击物的位置,默认5
             * @property distance
             * @type Number
             * @default 5
             * */
            distance: {
                type: Number,
                default: 5
            },
            /**
             * 提示信息
             * @property content
             * @type String
             * @default ''
             * */
            content: {
                type: String,
                default: ''
            }
        }
    }

</script>

<style scoped>
    .ph-popover-main{
        padding: 0;
    }
    .ph-popover-right .ph-popover-main {
         margin-left:0;
    }
</style>