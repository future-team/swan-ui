<template>
    <div ref="pullupRef" :class="classObject">
        <sw-button v-if="mode=='button'"
                   :phStyle="status==3?'error':phStyle"
                   :disabled="status==4||status==1"
                   @click="handleLoad" >
            <sw-icon v-if="status==1"
                     class="gfs-icon-loading"
                     phIcon='loading-gray'
                     phSize='sm'></sw-icon>
            {{tips[status]}}
        </sw-button>
        <div v-else class="ph-pullup-tip">
            <sw-icon v-if="status==1"
                     class="gfs-icon-loading"
                     phIcon='loading-gray'
                     phSize='sm'></sw-icon>
            {{tips[status]}}
        </div>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwButton from '../button/Button.vue'
    import SwIcon from '../icon/Icon.vue'
    import { getClientHeight } from '../../utils/tool.js'
    export default {
        name: 'SwPullup',
        extends: SwBase,
        components: {
            SwIcon,
            SwButton
        },
        data(){
            return {
                currentStatus: this.status,
                touchBottom: false,
                distanceY: 0
            }
        },
        methods: {
            handleLoad(){

            },
            handleScroll(){
                this.scrollTop = document.body.scrollTop
                this.clientHeight = getClientHeight()
                this.pullupElemOffsetTop = this.$refs.pullupRef.offsetTop
                if(this.scrollTop + this.clientHeight >= this.pullupElemOffsetTop){
                    this.touchBottom = true
                    this.$emit('load')
                }else{
                    this.touchBottom = false
                }
            },
            handleTouchStart(){

            },
            handleTouchMove(){

            },
            handleTouchEnd(){

            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
            this.$el.addEventListener('touchstart', this.handleTouchStart)
            this.$el.addEventListener('touchmove', this.handleTouchMove)
            this.$el.addEventListener('touchend', this.handleTouchEnd)
        },
        destroyed(){
            window.removeEventListener('scroll', this.scrollHandle, false)
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'pullup'
             * */
            classPrefix: {
                type: String,
                default: 'pullup'
            },
            /**
             * 加载更多的模式，可选[auto,buttons], 默认auto
             * @property mode
             * @type String
             * @default 'auto'
             **/
            mode: {
                type: String,
                default: 'auto'
            },
            /**
             * 加载状态：0初始状态, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
             * @property status
             * @type Number
             * @default 4
             **/
            status: {
                type: Number,
                default: 4
            },
            /**
             * 加载5个状态的文字描述
             * @property tips
             * @type Array
             * @default ['加载更多','加载中','加载成功','加载失败','没有更多']
             **/
            tips: {
                type: Array,
                default: function(){
                    return ['加载更多','加载中','加载成功','加载失败','没有更多']
                }
            },
            /**
             * 按钮颜色，默认primary
             * @property btnStyle
             * @type String
             * @default 'primary'
             **/
            phStyle: {
                type: String,
                default: 'primary'
            }
        }
    }
</script>