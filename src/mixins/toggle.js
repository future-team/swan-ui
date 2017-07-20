export default {
    model: {
        prop: 'visible',
        event: 'toggle'
    },
    methods: {
        handleClose(evt){
            this.$emit('toggle',false,evt)
        }
    },
    props: {
        visible: Boolean
    }
}