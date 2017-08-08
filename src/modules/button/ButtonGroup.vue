<template>
    <div class="clearfix" :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 按钮组组件
     * @class ButtonGroup
     * @module 基础组件
     * @extends Base
     * @Constructor
     * @since 0.0.1
     * @demo button-group|button-group.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    export default {
        name: 'SwButtonGroup',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'button-group'
             * */
            classPrefix : {
                type: String,
                default: 'button-group'
            },
            /**
             * 是否有自适应宽度，垂直排列等属性，取值为default(用于双按钮)、justify(水平排列)、tacked(垂直排列)、segmente(分割排列)、footer(尾部按钮)
             * @property phType
             * @type String
             * @default 'default'
             * */
            phType: {
                type: String,
                default: 'default'
            }
        }
    }
</script>