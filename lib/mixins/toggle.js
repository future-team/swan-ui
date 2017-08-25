'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 定制隐藏/显示切换类组件的 v-model
 */
exports.default = {
    model: {
        prop: 'visible',
        event: 'on-toggle'
    },
    methods: {
        handleToggle: function handleToggle(val) {
            this.$emit('on-toggle', val);
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
};