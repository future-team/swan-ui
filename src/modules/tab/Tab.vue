<template>
    <div :class='classObject'><slot></slot></div>
</template>

<script>
    /**
     * 选项卡组件
     * @class Tab
     * @module 选项卡
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo tabset|tabset.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import Logger from '../../utils/logger.js'
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
            * @property index
            * @type [Number, String]
            * @default 
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
        created(){
            new Logger('Tab')
        },
        mounted () {
            this.$parent.updateTabbar()
            this.active = this.$parent.activeIndex
        },
        watch: {
            /**
             * 点击tab时触发
             * @event tab-change
             * @param 被点击的tab的index（传入的index,不是索引）
             */
            '$parent.activeIndex': function (newValue) {
                this.active = newValue
                this.$emit('tab-change', newValue)
            },
            heading: function(){
                this.$parent.updateTabbar()
            }
        }
    }
</script>