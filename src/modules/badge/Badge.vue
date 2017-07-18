<template>
    <span :class="classObject" :style="styleObject">
        <slot></slot>
    </span>
</template>

<script>
   import SwBase from '../Base.vue'
   export default {
       name: 'SwBadge',
       extends: SwBase,
       props: {
           /**
            * 样式前缀
            * @property classPrefix
            * @type String
            * @default 'badge'
            * */
           classPrefix: {
               type: String,
               default: 'badge'
           },
           /**
            * 标记颜色[default、primary、warning、danger、info、error、success], 默认primary
            * @property phStyle
            * @type string
            * @default 'default'
            **/
           phStyle: {
               type: String,
               default: 'primary'
           }
       }
   }
</script>
