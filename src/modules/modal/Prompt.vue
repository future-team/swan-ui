<script>
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    import SwInput from '../input/Input.vue'
    export default {
        name: 'SwPrompt',
        model: {
            prop: 'visible',
            event: 'visible-change'
        },
        data(){
            return {
                inputValue: null
            }
        },
        components: {
            SwButton,
            SwButtonGroup,
            SwDialog,
            SwInput
        },
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [
                    {text: '取消', onHandle: this.closeCallback || this.handleClose},
                    {text: '确定', onHandle: this.handleConfirm}
                ]
            }
        },
        methods:{
            handleClose(){
                this.$emit('visible-change',false)
            },
            handleConfirm(){
                if(this.confirmCallback){
                    this.confirmCallback(this.inputValue)
                }else{
                    this.handleClose()
                }
            },
            handleInput(value){
                this.inputValue = value
            }
        },
        render(){
            let contents
            if(this.content){
                contents = <div class='ph-dialog-prompt-text'>{this.content}</div>
            }

            let buttonsType = this.currentButtons.length>2
            let buttons = this.currentButtons.map(function(button) {
                return (
                    <sw-button hollow {...button.otherProps} phSize="lg"
                        phStyle={button.phStyle || 'primary'}
                        block={buttonsType}
                        onClick={button.onHandle}>{button.text || '确定'}
                    </sw-button>
                )
            })
            return(
                <sw-dialog  class='ph-dialog-prompt'
                            visible={this.visible}
                            closeButton={this.closeButton}
                            shadowDisabled={this.shadowDisabled}
                            closeCallback={this.handleClose}>
                    <template slot='title'>{this.title}</template>
                    {contents}
                    <sw-input type='text' onInput={this.handleInput}></sw-input>
                    <sw-button-group slot="footer" phType={ buttonsType ? 'tacked': 'default'} >
                        { buttons }
                    </sw-button-group>
                </sw-dialog>
            )
        },
        props: {
            title: String,
            content: null,
            buttons: Array,
            inputs: {
                type: Array,
                default: function () {
                    return [{type: 'text', placeholder: '请输入'}]
                }
            },
            visible: Boolean,
            closeButton: Boolean,
            shadowDisabled: Boolean,
            closeCallback: Function,
            confirmCallback: Function
        }
    }
</script>