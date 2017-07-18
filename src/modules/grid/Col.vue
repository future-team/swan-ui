<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwCol',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'col'
             * */
            classPrefix: {
                type: String,
                default: 'col'
            },
            /**
             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
             * @property width
             * @type Integer
             * */
            width: Number,
            /**
             * 偏移多少，目前支持5-100之间5的倍数、33（1\3）和66(2\3)，默认不偏移
             * @property offset
             * @type Integer
             * */
            offset: Number,
            /**
             * 竖直方向的排列是靠上、居中还是靠下
             * @property align
             * @type Integer
             * */
            align: {
                type: String
            }
        }
    }
</script>
