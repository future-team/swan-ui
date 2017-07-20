<template>
    <sw-dialog  class='ph-dialog-prompt'
                v-model="currentVisible"
                :closeButton="closeButton"
                :shadowDisabled="shadowDisabled"
                :onClose="onClose">
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
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    import SwInput from '../input/Input.vue'
    export default {
        name: 'SwPrompt',
        model: {
            prop: 'visible',
            event: 'toggle'
        },
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
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [
                    {text: '取消', onHandle: this.onClose || this.handleClose},
                    {text: '确定', onHandle: this.handleConfirm}
                ]
            },
            buttonsType(){
                return this.currentButtons.length>2
            }
        },
        methods: {
            handleConfirm(evt){
                this.$emit('confirm',this.inputValue,evt)
            },
            handleClick(onHandle){
                onHandle ? onHandle(this.inputValue) : this.handleConfirm()
            },
            handleInput(value){
                this.inputValue = value
            },
            handleClose(){
                this.$emit('toggle',false)
            }
        },
        watch: {
            visible(val){
                this.currentVisible = val
            },
            currentVisible(val){
                this.inputValue = ''
                this.$emit('toggle',val)
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
             * 是否可见标识
             * @property visible
             * @type Boolean
             * */
            visible: Boolean,
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
            /**
             * 关闭弹框的执行函数
             * @method closeCallback
             * @type Function
             * */
            onClose: Function,
            /**
             * 点击确定的回调函数
             * @method confirmCallback
             * @type Function
             * */
            onConfirm: Function
        }
    }
</script>