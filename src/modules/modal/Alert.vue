<script>
    import SwDialog from './Dialog.vue'
    import SwButtonGroup from '../button/ButtonGroup.vue'
    import SwButton from '../button/Button.vue'
    export default {
        name: 'SwAlert',
        model: {
            prop: 'visible',
            event: 'visible-change'
        },
        components: {
            SwButton,
            SwButtonGroup,
            SwDialog
        },
        methods: {
            handleClose(){
                this.$emit('visible-change',false)
            }
        },
        computed: {
            currentButtons(){
                return this.buttons ? this.buttons : [{text: '确定', onHandle: this.handleClose}]
            }
        },
        render(){
            let vm = this
            let buttonsType = this.currentButtons.length>2
            let buttons = this.currentButtons.map(function(button) {
                return (
                    <sw-button hollow {...button.otherProps} phSize="lg"
                        phStyle={button.phStyle || 'primary'}
                        block={buttonsType}
                        onClick={button.onHandle || vm.handleClose}>{button.text || '确定'}
                    </sw-button>
                )
            })

            return(
                <sw-dialog  class='ph-dialog-alert'
                            visible={this.visible}
                            closeButton={this.closeButton}
                            shadowDisabled={this.shadowDisabled}
                            closeCallback={this.handleClose}>
                    <template slot='title'>{this.title}</template>
                    {this.content}
                    <sw-button-group slot="footer" phType={ buttonsType ? 'tacked': 'default'}>
                    { buttons }
                    </sw-button-group>
                </sw-dialog>
            )
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            closeButton: {
                type: Boolean,
                default: false
            },
            shadowDisabled: {
                type: Boolean,
                default: false
            },
            title: null,
            content: null,
            buttons: Array
        }
    }
</script>