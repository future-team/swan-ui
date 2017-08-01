<template>
    <button :class="classObject"  @click="handleClick">
        <span class="ph-button-inner">
            <sw-icon v-if="phIcon"
                     :phIcon="phIcon"
                     :phSize="phIcon.indexOf('loading')!=-1?'sm':''">
            </sw-icon>
            <slot></slot>
        </span>
    </button>
</template>

<script>
    /**
     * 按钮组件
     * @class Button
     * @module 基础组件
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo button|button.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    export default {
        name: 'SwButton',
        extends: SwBase,
        components: {SwIcon},
        methods: {
            handleClick(evt){
                this.$emit('click',evt)
            }
        },
        props:{
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'button'
             * */
            classPrefix: {
                type: String,
                default: 'button'
            },
            /**
             * 按钮尺寸[sm、md、lg], 默认为sm
             * @property phSize
             * @type String
             * @default 'sm'
             * */
            phSize: {
                type: String,
                default: 'sm'
            },
            /**
             * 按钮颜色[primary、warning、danger、info、error、success、link、gray], 默认primary
             * @property phStyle
             * @type Boolean
             * @default 'primary'
             * */
            phStyle: {
                type: String,
                default: 'primary'
            },
            /**
             * 块级显示
             * @property block
             * @type Boolean
             * @default false
             * */
            block: Boolean,
            radius: Boolean,
            /**
             * 空背景
             * @property hollow
             * @type Boolean
             * @default false
             * */
            hollow: Boolean,
            /**
             * 禁用状态
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: Boolean,
            /**
             * 激活状态
             * @property active
             * @type Boolean
             * @default false
             * */
            active: Boolean,
            /**
             * icon符号类型
             * @property phIcon
             * @type string
             * @default ''
             **/
            phIcon: String,
            /**
             * icon占位情况，默认占位，设置之后不影响文字居中
             * @property stable
             * @type Boolean
             * @default false
             * */
            stable: Boolean
        }
    }
</script>
