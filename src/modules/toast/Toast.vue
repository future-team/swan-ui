<template>
    <transition name="toast-fade">
        <div v-show="visible" :class="classObject">
            <div class="ph-toast-shadow"></div>
            <div class="ph-toast-main">
                <div :class="['ph-toast-content',{'ph-toast-rect':phIcon}]">
                    <div v-if="phIcon" class="ph-toast-body">
                        <sw-icon :phIcon="phIcon" :phSize="isLoading ? 'lg':'xlg'"></sw-icon>
                        <slot>{{content}}</slot>
                    </div>
                    <slot v-else>{{content}}</slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    export default {
        name: 'SwToast',
        extends: SwBase,
        components: {SwIcon},
        data(){
            return {
                /**
                 * 是否可见,这里主要用于过渡效果
                 * @property visible
                 * @type Boolean
                 * @default false
                 **/
                visible: false,
                /**
                 * 停留时间
                 * @property duration
                 * @type Number
                 * @default 2000
                 **/
                duration: 2000,
                /**
                 * icon符号类型
                 * @property phIcon
                 * @type String
                 * @default ''
                 **/
                phIcon: '',
                /**
                 * 提示内容
                 * @property content
                 * @type String
                 * @default ''
                 **/
                content: '',
                /**
                 * 关闭后回调
                 * @property callback
                 * @type Function
                 * @default
                 **/
                callback: Function
            }
        },
        computed: {
            isLoading(){
                return this.phIcon.indexOf('loading') !== -1
            }
        },
        methods: {
            startTimer(){
                this.visible = true
                if(this.duration > 0){
                    this.timer = setTimeout(() => {
                        if (this.visible) {
                            this.visible = false
                            this.remove()
                        }
                    }, this.duration)
                }
            },
            remove(){
                this.callback && this.callback()
                clearTimeout(this.timer)
                this.$destroy()
                this.$el.parentNode.removeChild(this.$el)
            }
        },
        mounted(){
            this.startTimer()
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'toast'
             * */
            classPrefix: {
                type: String,
                default: 'toast'
            }
        }
    }
</script>

<style>
    .toast-fade-enter,.toast-fade-leave-to{
        opacity: 0
    }
    .toast-fade-enter-active,.toast-fade-leave-active{
        transition: all .4s
    }
</style>