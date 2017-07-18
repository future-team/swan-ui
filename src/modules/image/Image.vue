<template>
    <div ref="phImageRef" :class="classObject">
        <img ref="imageRef" :src="src"  :alt="alt"/>
    </div>
</template>


<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwImage',
        extends: SwBase,
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'image'
             * */
            classPrefix: {
                type: String,
                default: 'image'
            },
            /**
             * 图片地址
             * @property src
             * @type String
             * @default null
             * */
            src: String,
            /**
             * 图片大小，[default, cover, contain]
             * @property phSize
             * @type String
             * @default 'default'
             * */
            phSize: {
                type: String,
                default: 'default'
            },
            /**
             * 是否懒加载
             * @property lazy
             * @type Boolean
             * @default false
             * */
            lazy: {
                type: Boolean,
                default: false
            }
        }
    }
</script>