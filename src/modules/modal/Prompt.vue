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
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    import SwInput from '../input/Input.vue'
    import toggle from '../../mixins/toggle'
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
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [
                    {text: '取消', onHandle: this.handleToggle.bind(this.false)},
                    {text: '确定', onHandle: this.handleConfirm}
                ]
            },
            buttonsType(){
                return this.currentButtons.length>2
            }
        },
        methods: {
            handleConfirm(evt){
                this.$emit('on-confirm',this.inputValue,evt)
            },
            handleClick(onHandle){
                onHandle ? onHandle(this.inputValue) : this.handleToggle.bind(this.false)
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