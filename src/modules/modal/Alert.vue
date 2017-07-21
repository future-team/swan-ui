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
                this.$emit('toggle',val)
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