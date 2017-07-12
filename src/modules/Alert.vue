<script>
    import SwDialog from './Dialog.vue'
    import ButtonGroup from './ButtonGroup.vue'
    import SwButton from './Button.vue'
    export default {
        name: 'SwAlert',
        model: {
            prop: 'visible',
            event: 'visible-change'
        },
        components: {
            SwButton,
            ButtonGroup,
            SwDialog
        },
        methods: {
            handleClose(){
                this.$emit('visible-change')
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

            let props = {}
            for(let key in this.$props){
                if(SwDialog.props[key] && key != 'classPrefix'){
                    props[key] = this.$props[key]
                }
            }

            return(
                <sw-dialog class="ph-dialog-alert" {...{props}}  attachHandler={this.handleClose}>
                    {this.content}
                    <button-group slot="footer" phType={ buttonsType ? 'tacked': 'default'}>
                    { buttons }
                    </button-group>
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