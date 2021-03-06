<template>
    <div :class="classObject">
        <transition name="dialog-fade">
            <div v-if="visible" class="ph-dialog-shadow animated" @click="handleShadowClose"></div>
        </transition>
        <transition name="dialog-fade">
            <div v-if="visible" class="ph-dialog-main animated">
                <div class="ph-dialog-content animated">
                    <a href="javascript:;"
                       :class="['ph-dialog-close',closeButton ? 'show':'hide','gfs-icon icon-close']"
                       @click="handleToggle(false)"></a>
                    <h2 class="ph-dialog-title">
                        <slot name="title">
                            {{title}}
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
    /**
     * 对话框
     * @class Dialog
     * @module 弹出类组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo dialog|dialog.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import toggle from '../../mixins/toggle'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwDialog',
        extends: SwBase,
        mixins: [toggle],
        methods: {
            handleShadowClose(){
                /**
                 * 打开/关闭时触发
                 * @event on-toggle
                 * @param {Boolean} 组件打开/关闭状态
                 */
                !this.shadowDisabled && this.handleToggle(false)
            }
        },
        created(){
            new Logger('Dialog')
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'dialog'
             * */
            classPrefix: {
                type: String,
                default: 'dialog'
            },
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: {
                type: Boolean,
                default: false
            },
            /**
             * 阴影部分是否点击可关闭弹框
             * @property shadowDisabled
             * @type Boolean
             * */
            shadowDisabled: {
                type: Boolean,
                default: false
            },
            /**
             * 标题
             * @property title
             * @type String
             * */
            title: String,
        }
    }
</script>

<style>
    .dialog-fade-enter-active,dialog-fade-enter-active-fade-leave-active{
        transition: opacity .5s
    }
    .dialog-fade-enter, .dialog-fade-leave-to {
        opacity: 0
    }
</style>