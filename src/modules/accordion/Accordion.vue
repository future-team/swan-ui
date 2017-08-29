<template>
    <div :class="classObject">
        <div class="ph-accordion-header clearfix" @click="handleToggle(!visible)">
            <slot name="header"></slot>
            <sw-icon v-if="!hideIcon" phIcon="expand-more" :class="visible ? 'active':''"></sw-icon>
        </div>
        <div class="ph-accordion-body animated" ref="accordionBodyParent">
            <div ref="accordionBody">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 手风琴
     *
     * slot
     * - header 标题
     * - default 展开的内容
     * @class Accordion
     * @module 操作类组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo accordion | accordion.vue
     * @show true
     * */
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    import toggle from '../../mixins/toggle'
    export default {
        name: 'SwAccordion',
        extends: SwBase,
        mixins: [toggle],
        components: {SwIcon},
        methods:{
            setHeight(){
                this.$refs.accordionBodyParent.style.height = this.visible ? this.height : 0
            }
        },
        data(){
            return {
                height: 0
            }
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'accordion'
             * */
            classPrefix: {
                type: String,
                default: 'accordion'
            },
            /**
             * 是否隐藏向下的箭头
             * @property hideIcon
             * @type Boolean
             * @default false
             * */
            hideIcon : {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            this.height = this.$refs.accordionBody.offsetHeight+'px'
            this.setHeight()
        },
        watch: {
            visible(){
                this.setHeight()
            }
        }
    }
</script>
