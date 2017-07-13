<template>
    <span :class="classObject"
          :style="styleObject">
        <slot></slot>
    </span>
</template>

<script>
   import SwBase from '../Base.vue'
   export default {
       name: 'SwBadge',
       extends: SwBase,
       props: {
           classPrefix: {
               type: String,
               default: 'badge'
           },
           phStyle: {
               type: String,
               default: 'primary'
           },
           classMapping : {
               type: Object,
               default: function(){
                   return {
                       'primary':'primary',
                       'info':'info',
                       'success':'success',
                       'error':'error',
                       'warning':'warning',
                       'danger':'danger'
                   }
               }
           }
       }
   }
</script>

<!--<style lang="less" src="phoenix-styles/less/public.less"></style>-->
<!--<style lang="less" src="phoenix-styles/less/modules/badges.less"></style>-->