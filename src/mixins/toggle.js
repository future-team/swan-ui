/**
 * 定制隐藏/显示切换类组件的 v-model
 */
export default {
    model: {
        prop: 'visible',
        event: 'toggle'
    },
    methods: {
        handleToggle(val){
            this.$emit('toggle',val)
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