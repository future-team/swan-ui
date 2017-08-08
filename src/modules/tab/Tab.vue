<template>
    <div :class='classObject'><slot></slot></div>
</template>

<script>
    /**
     * @class Tab
     * @module 选项卡
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo tab|tab.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwTab',
        extends: SwBase,
        props: {
            /**
            * 是否竖排显示
            * @property vertical
            * @type Boolean
            * @default false
            * */
            vertical: {
                type: Boolean,
                default: false
            },
            /**
            * 选项卡序号
            * @property vertical
            * @type Boolean
            * @default false
            * */
            index: {
                type: [Number, String]
            },
           /**
            * 选项卡的标题文字，默认为‘tab’
            * @property heading
            * @type String
            * @default 'tab'
            * */
            heading: {
                type: String,
                default: 'tab'
            }
        },
        data () {
            return {
                active: this.$parent.activeIndex
            }
        },
        computed: {
            classObject() {
                return {
                    'ph-col': !this.$parent.vertical,
                    'ph-tab-panel': true,
                    'active': this.index == this.$parent.activeIndex
                }
            }
        },
        mounted () {
            this.active = this.$parent.activeIndex
        },
        watch: {
            '$parent.activeIndex': function (newValue) {
                this.active = newValue
                this.$emit('tab-change', newValue)
            }
        }
    }
</script>