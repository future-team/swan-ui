<template>
    <span :class="['gfs-icon',{[`${classPrefix}-${phIcon}`]:phIcon,'gfs-icon-loading':phIcon && phIcon.indexOf('loading')>=0}, classObject]">
        <slot></slot>
    </span>
</template>

<script>
    /**
     * Icon 
     * - 参见 https://future-team.github.io/gfs-icons/index.html
     * @class Icon
     * @module 基础组件
     * @extends Base
     * @Constructor
     * @since 1.0.0
     * @demo icon|icon.vue
     * @show true
     */
    import SwBase from '../Base.vue'
    import Logger from '../../utils/logger.js'
    export default {
        name: 'SwIcon',
        extends: SwBase,
        created(){
            new Logger('Icon')
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'icon'
             * */
            classPrefix: {
                type: String,
                default: 'icon'
            },
            /**
             * icon符号类型
             * @property phIcon
             * @type String
             * @default ''
             **/
            phIcon: {
                type: String,
                default: ''
            },
            /**
             * 按钮颜色[primary、warning、danger、info、error、success], 默认primary
             * @property phStyle
             * @type Boolean
             * @default 'default'
             * */
            phStyle: {
                type: String,
                default: 'default'
            },
            /**
             * 按钮尺寸[xs、sm、md、lg、xlg], 默认为sm
             * @property phSize
             * @type String
             * @default 'sm'
             * */
            phSize: {
                type: String,
                default: 'sm'
            }
        }
    }
</script>