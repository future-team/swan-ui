<script>
    const demos = [
        {
            title: '任意拖动',
            desc: '自定义drag 和 drop 事件',
            code: `
                <div class="drag-demo-container">
                    <sw-drag @drag="handleDrag" @drop="handleDrop">
                        <div ref="dragBox" class="drag-demo">拖我出去</div>
                    </sw-drag>
                </div>`,
            visible: true,
            options: {
                data(){
                    return {
                        distanceX: 0,
                        distanceY: 0,
                        preDistanceX: 0,
                        preDistanceY: 0
                    }
                },
                methods:{
                    handleDrag(position){
                        let prePosition = position.start
                        let nowPosition = position.move

                        this.distanceX = this.preDistanceX + nowPosition.x - prePosition.x
                        this.distanceY = this.preDistanceY + nowPosition.y - prePosition.y

                        this.setBoxPosition(this.distanceX,this.distanceY)
                    },
                    handleDrop(){
                        this.preDistanceX = this.distanceX
                        this.preDistanceY = this.distanceY
                    },
                    setBoxPosition(x,y){
                        this.$refs.dragBox.style.webkitTransform = `translate(${x}px,${y}px)`
                        this.$refs.dragBox.style.transform = `translate(${x}px,${y}px)`
                    }
                }
            }
        },
        {
            title: '可视区域内拖动',
            desc: '自定义drag 和 drop 事件',
            code: `
                <div class="drag-demo-container">
                    <sw-drag @drag="handleDrag" @drop="handleDrop">
                        <div ref="dragBox" class="fixed-drag-demo">不能拖我出去</div>
                    </sw-drag>
                </div>`,
            visible: true,
            options: {
                data(){
                    return {
                        offsetLeft: 0,
                        offsetTop: 0,
                        preOffsetLeft: 0,
                        preOffsetTop: 0
                    }
                },
                methods:{
                    handleDrag(position){
                        let prePosition = position.start
                        let nowPosition = position.move

                        let offsetLeft = this.preOffsetLeft + nowPosition.x - prePosition.x
                        let offsetTop = this.preOffsetTop + nowPosition.y - prePosition.y

                        if(this.isOutBoundary(offsetLeft,offsetTop)){
                            return
                        }
                        this.offsetLeft = offsetLeft
                        this.offsetTop = offsetTop

                        this.setBoxPosition(this.offsetLeft,this.offsetTop)
                    },
                    isOutBoundary(offsetLeft,offsetTop){
                       return offsetLeft < 0 || offsetLeft > this.maxOffsetLeft || offsetTop < 0 || offsetTop > this.maxOffsetTop
                    },
                    handleDrop(){
                        this.preOffsetLeft = this.offsetLeft
                        this.preOffsetTop = this.offsetTop
                    },
                    setBoxPosition(x,y){
                        this.$refs.dragBox.style.left = `${x}px`
                        this.$refs.dragBox.style.top = `${y}px`
                    }
                },
                mounted(){
                    this.boxHeight = this.$refs.dragBox.offsetHeight
                    this.boxWidth = this.$refs.dragBox.offsetWidth
                    this.offsetLeft = this.$refs.dragBox.offsetLeft
                    this.offsetTop = this.$refs.dragBox.offsetTop
                    this.preOffsetLeft = this.$refs.dragBox.offsetLeft
                    this.preOffsetTop = this.$refs.dragBox.offsetTop
                    this.maxOffsetLeft = document.documentElement.offsetWidth - this.boxWidth
                    this.maxOffsetTop = document.documentElement.offsetHeight - this.boxHeight
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageDrag',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style lang="less">
    .drag-demo-container{
        margin:auto;
        .ph-drag-action{
            display: inline-block;
        }
    }
    .drag-demo{
        position: relative;
        .drag-uni;
    }

    .fixed-drag-demo{
        position: fixed;
        bottom: 0.2rem;
        right: 0.2rem;
        .drag-uni;
    }
    .drag-uni{
        z-index: 999;
        background: #ff6633;
        color: #fff;
        text-align: center;
        width: 2rem;
        height:2rem;
        line-height: 2rem ;
        font-size: 0.25rem;
    }
</style>