/**
 * 定制弹出层类组件的 v-model
 */
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
        /**
         * 是否可见标识
         * @property visible
         * @type Boolean
         * */
        visible: {
            type: Boolean,
            default: false
        }
    }
}