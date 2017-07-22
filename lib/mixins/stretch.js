'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        handleClick: function handleClick() {
            this.currentVisible = !this.currentVisible;
            this.$emit('click', this.currentVisible);
        },
        setHeight: function setHeight() {
            this.$refs.stretchBodyParent.style.height = this.currentVisible ? this.height : 0;
        }
    },
    data: function data() {
        return {
            currentVisible: this.visible,
            height: 0
        };
    },

    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    mounted: function mounted() {
        this.height = this.$refs.stretchBody.offsetHeight + 'px';
        this.setHeight();
    },

    watch: {
        currentVisible: function currentVisible() {
            this.setHeight();
        }
    }
};