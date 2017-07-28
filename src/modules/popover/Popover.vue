<template>
    <div style="position: relative;display: inline-block">
        <div v-show="visible">
            <div :class="`ph-popover ph-popover-${currentPlacement} show`" >
                <div class="ph-popover-arrow" ref="arrowElem" :style="position.arrowPosition"></div>
                <div class="ph-popover-main" ref="contentElem" :style="position.contentPosition">
                    <div class="ph-popover-content" >
                        <slot name="content"><div class="ph-popover-text">{{content}}</div></slot>
                    </div>
                </div>
            </div>
        </div>

        <div ref="targetElem" @click="handleClick">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { getWindowScrollTop,getWindowScrollLeft,getClientHeight,getClientWidth,getOffset} from '../../utils/tool'
    export default {
        name: 'SwPopover',
        data(){
            return {
                position: {},
                visible: false,
                currentPlacement: this.placement,
                flag: false
            }
        },
        methods: {
            init(){
                this.targetElem = this.$refs.targetElem
                this.clientHeight = getClientHeight()
                this.clientWidth = getClientWidth()
                this.targetStyle = {
                    width: this.targetElem.clientWidth,
                    height: this.targetElem.clientHeight,
                    offsetTop: getOffset(this.targetElem).offsetTop
                }
                document.addEventListener('click', this.handleDocumentClick)
            },
            handleClick(){
                this.visible = !this.visible
            },
            handleDocumentClick(evt){
                if(evt.target === this.targetElem.firstElementChild){
                    return
                }
                this.visible = false
            },
            computedStyle(){
                if(!this.flag){
                    this.flag = true
                    this.contentElem = this.$refs.contentElem
                    this.arrowElem = this.$refs.arrowElem

                    this.contentStyle = {
                        width: this.contentElem.clientWidth,
                        height: this.contentElem.clientHeight,
                        offsetTop: getOffset(this.contentElem).offsetTop,
                        offsetLeft: getOffset(this.contentElem).offsetLeft
                    }

                    this.arrowStyle = {
                        width: this.arrowElem.clientWidth,
                        height: this.arrowElem.clientHeight,
                        offsetTop: getOffset(this.arrowElem).offsetTop
                    }

                    this.contentElem.style.width = this.contentStyle.width + 'px'
                    this.contentElem.style.height = this.contentStyle.height + 'px'
                }
            },
            computePosition(placement){
                this.currentPlacement = placement
                this.$nextTick(()=>{
                    let arrowPosition = {}
                    let contentPosition = {}
                    let bodyScrollTop = getWindowScrollTop()
                    let bodyScrollLeft = getWindowScrollLeft()
                    this.computedStyle()
                    switch (placement) {
                        case 'bottom' :
                            arrowPosition = {
                                top: this.targetStyle.height + this.distance,
                                left: this.targetStyle.width / 2
                            }
                            contentPosition = {
                                top: this.targetStyle.height + this.distance + this.arrowStyle.height/2,
                                left: 0
                            }
                            if(this.clientHeight + bodyScrollTop <=  this.contentStyle.offsetTop + this.contentStyle.height + contentPosition.top){
                                this.computePosition('top')
                            }
                            break
                        case 'top':
                            arrowPosition = {
                                top:  -this.distance,
                                left: this.targetStyle.width / 2
                            }
                            contentPosition = {
                                top:  - this.contentStyle.height - this.distance - this.arrowStyle.height/2,
                                left: 0
                            }
                            if(this.contentStyle.offsetTop + contentPosition.top <= bodyScrollTop){
                                this.computePosition('bottom')
                            }
                            break
                        case 'left':
                            arrowPosition = {
                                top: this.targetStyle.height/2,
                                left: -this.distance
                            }
                            contentPosition = {
                                top:  -(this.contentStyle.height - this.targetStyle.height)/2,
                                left: -(this.contentStyle.width + this.arrowStyle.width + this.distance)
                            }
                            if(this.contentStyle.offsetLeft + contentPosition.left <= bodyScrollLeft){
                                this.computePosition('right')
                            }

                            break
                        case 'right':
                            arrowPosition = {
                                top: this.targetStyle.height/2,
                                left: (this.targetStyle.width + this.arrowStyle.width/2 + this.distance)
                            }
                            contentPosition = {
                                top:  -(this.contentStyle.height - this.targetStyle.height)/2 ,
                                left:  this.targetStyle.width + this.arrowStyle.width + this.distance
                            }
                            if(this.clientWidth + bodyScrollLeft <=  this.contentStyle.offsetLeft + this.contentStyle.width + contentPosition.left){
                                this.computePosition('left')
                            }
                            break
                        default :
                            arrowPosition = {}
                    }
                    this.position = {
                        arrowPosition: {
                            top: arrowPosition.top + 'px',
                            left: arrowPosition.left + 'px'
                        },
                        contentPosition: {
                            top: contentPosition.top + 'px',
                            left: contentPosition.left + 'px'
                        }
                    }
                })
            }
        },
        watch:{
            visible(val){
                val && this.computePosition(this.placement)
            }
        },
        mounted(){
            this.init()
        },
        destroyed(){
            document.removeEventListener('click', this.handleDocumentClick)
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
             * 气泡距离点击物的距离
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
    .ph-popover-content{
        min-width: 2rem;
    }
</style>