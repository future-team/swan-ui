<template>
    <sw-dialog  class='ph-dialog-alert'
                v-model="currentVisible"
                :closeButton="closeButton"
                :shadowDisabled="shadowDisabled"
                @on-close="handleToggle(false)">
        <template slot='title'>{{title}}</template>
        {{content}}
        <sw-button-group slot="footer" :phType=" buttonsType ? 'tacked': 'default'">
            <sw-button v-for="(button,index) in currentButtons"
                       :key="index"
                       hollow
                       phSize="lg"
                       :phStyle="button.phStyle || 'primary'"
                       v-bind="button.otherProps"
                       :block="buttonsType"
                       @click="handleClick(button.onHandle)">
                {{button.text || '确定'}}
            </sw-button>
        </sw-button-group>
    </sw-dialog>
</template>

<script>
    /**
     * 提示框
     *
     * slot
     * - title  标题
     * - footer 底部内容，比如按钮
     * - defalut 正文内容
     * @class Alert
     * @module 弹出类组件
     * @Constructor
     * @since 1.0.0
     * @demo alert|alert.vue
     * @show true
     */
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    import toggle from '../../mixins/toggle'
    export default {
        name: 'SwAlert',
        mixins: [toggle],
        data(){
            return {
                currentVisible: this.visible
            }
        },
        components: {
            SwButton,
            SwButtonGroup,
            SwDialog
        },
        methods: {
            handleClick(onHandle){
                onHandle ? onHandle() : this.handleToggle(false)
            }
        },
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [{text: '确定', onHandle: this.handleToggle.bind(this,false)}]
            },
            buttonsType(){
                return this.currentButtons.length>2
            }
        },
        watch: {
            visible(val){
                this.currentVisible = val
            },
            currentVisible(val){
                /**
                 * 打开/关闭时触发
                 * @event on-toggle
                 * @param {Boolean} 组件打开/关闭状态
                 */
                this.$emit('on-toggle',val)
            }
        },
        props: {
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
            title: null,
            /**
             * 内容
             * @property title
             * @type String
             * */
            content: null,
            /**
             * 尾部按钮
             * @property buttons
             * @type Array
             * */
            buttons: Array
        }
    }
</script>