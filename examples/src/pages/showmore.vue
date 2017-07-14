<template>
    <div>
        <div>
            示例：
            <slot></slot>
        </div>
        <div>
            代码：
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'ShowMore',
      computed: {
          code(){
              console.log(this.$slots)
          }
      }
  }
</script>