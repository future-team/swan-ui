<template>
    <sw-dialog  class='ph-dialog-prompt'
                v-model="currentVisible"
                :closeButton="closeButton"
                :shadowDisabled="shadowDisabled">
        <template slot='title'>{{title}}</template>
        <div v-if="content" class='ph-dialog-prompt-text'>{{content}}</div>
        <sw-input type='text' :value="inputValue" @input="handleInput" autofocus></sw-input>
        <sw-button-group slot="footer" :phType="buttonsType ? 'tacked': 'default'" >
            <sw-button v-for="(button,index) in currentButtons"
                       hollow
                       phSize="lg"
                       :key="index"
                       :block="buttonsType"
                       :phStyle="button.phStyle || 'primary'"
                       v-bind="button.otherProps"
                       @click="handleClick(button.onHandle)">
                {{button.text || '确定'}}
            </sw-button>
        </sw-button-group>
    </sw-dialog>
</template>

<script>
    /**
     * 提示输入框
     *
     * slot
     * - title  标题
     * - footer 底部内容，比如按钮
     * - defalut 正文内容
     * @class Prompt
     * @module 弹出类组件
     * @Constructor
     * @since 1.0.0
     * @demo prompt|prompt.vue
     * @show true
     */
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    import SwInput from '../input/Input.vue'
    import toggle from '../../mixins/toggle'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwPrompt',
        mixins: [toggle],
        components: {
            SwButton,
            SwButtonGroup,
            SwDialog,
            SwInput
        },
        data(){
            return {
                inputValue: ' ',
                currentVisible: this.visible
            }
        },
        created(){
            new Logger('Prompt')
        },
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [
                    {text: '取消'},
                    {text: '确定', onHandle: this.handleConfirm}
                ]
            },
            buttonsType(){
                return this.currentButtons.length>2
            }
        },
        methods: {
            /**
            * 点击确定时触发
            * @event on-confirm
            * @param 输入值
            */
            handleConfirm(){
                this.$emit('on-confirm',this.inputValue)
            },
            /**
            * 打开/关闭时触发
            * @event on-toggle
            * @param {Boolean} 组件打开/关闭状态
            */
            handleClick(onHandle){
                onHandle ? onHandle(this.inputValue) : this.handleToggle(false)
            },
            handleInput(value){
                this.inputValue = value
            }
        },
        watch: {
            visible(val){
                this.currentVisible = val
            },
            currentVisible(val){
                this.inputValue = ''
                this.$emit('on-toggle',val)
            }
        },
        props: {
            /**
             * 标题
             * @property title
             * @type String
             * */
            title: String,
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
            buttons: Array,
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: Boolean,
            /**
             * 阴影部分是否点击可关闭弹框, 默认传了closeCallback之后可关闭
             * @property shadowDisabled
             * @type Boolean
             * */
            shadowDisabled: Boolean,
        }
    }
</script>