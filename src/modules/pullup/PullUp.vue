<template>
    <div ref="pullupRef" :class="classObject">
        <sw-button v-if="mode=='button'"
                   :phStyle="currentStatus==3?'error':phStyle"
                   :disabled="currentStatus==4||currentStatus==1"
                   @click="handleLoad" >
            <sw-icon v-if="currentStatus==1"
                     class="gfs-icon-loading"
                     phIcon='loading-gray'
                     phSize='sm'></sw-icon>
            {{tips[currentStatus]}}
        </sw-button>
        <div v-else class="ph-pullup-tip">
            <sw-icon v-if="currentStatus==1"
                     class="gfs-icon-loading"
                     phIcon='loading-gray'
                     phSize='sm'></sw-icon>
            {{tips[currentStatus]}}
        </div>
    </div>
</template>

<script>
    /**
     * 加载更多
     *
     * @class Pullup
     * @module 操作类组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo pullup | pullup.vue
     * @show true
     * */
    import SwBase from '../Base.vue'
    import SwButton from '../button/Button.vue'
    import SwIcon from '../icon/Icon.vue'
    import { getClientHeight } from '../../utils/tool.js'
    import Logger from '../../utils/logger.js'
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
        created(){
            new Logger('Pullup')
        },
        methods: {
            /**
             * 点击按钮加载或滑到底部自动加载时触发
             * @event load
             */
            handleLoad(){
                this.$emit('load')
            },
            handleScroll(){
                this.scrollTop = document.body.scrollTop
                this.clientHeight = getClientHeight()
                this.pullupElemOffsetTop = this.$refs.pullupRef.offsetTop
                if(this.scrollTop + this.clientHeight >= this.pullupElemOffsetTop){
                    this.touchBottom = true
                    if(this.currentStatus === 1 || this.currentStatus === 4){ //加载中 或 没有更多， 返回
                        return
                    }
                    this.handleLoad()
                }else{
                    this.touchBottom = false
                }
            }
        },
        watch: {
            status(val){
                this.currentStatus = val
            }
        },
        mounted(){
            this.mode !== 'button' && window.addEventListener('scroll', this.handleScroll)
        },
        destroyed(){
            this.mode !== 'button' && window.removeEventListener('scroll', this.handleScroll)
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
             * 加载更多的模式，可选[auto,button], 默认auto
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
             * @property phStyle
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