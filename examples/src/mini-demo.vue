<template>
    <div>
        <div id="demo"></div>
        <div class="stretch-body-parent" ref="stretchBodyParent">
            <div ref="stretchBody">
                <pre><code v-html="escape2Html(code)" class="language-markup"></code></pre>
            </div>
        </div>
        <div @click="handleClick" class="show-more">
            <div class="show-more-icon">
                <sw-icon v-if="currentVisible" phIcon="arrow-dropup" phStyle="gray"></sw-icon>
                <sw-icon v-else phIcon="arrow-dropdown" phStyle="gray"></sw-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Stretch from './mixins/stretch.js'
    import SwIcon from '../../src/modules/icon/Icon'
    export default {
      components: {SwIcon},
      name: 'MiniDemo',
      mixins: [Stretch],
      props:['code','options'],
      methods:{
          escape2Html(str) {
              let  map={'<':'&lt;','>':'&gt;'}
              return str.replace(/(<|>)/ig,function(all,t){return map[t]})
          },
          createVm(){
            // 需要在resolve.alias中配置 vue: 'vue/dist/vue.js'，否则会报错：
            // [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
            let Demo = Vue.extend(Object.assign({},{
                template: `<div>${this.code}</div>`
            },this.options))
            this.demoVm = new Demo().$mount('#demo')
          },
          destroyVm(){
             this.demoVm 
             && this.demoVm.$el 
             && this.demoVm.$el.parentNode 
             && this.demoVm.$el.parentNode.removeChild(this.demoVm.$el)
          }
      },
      mounted(){
       this.createVm()
      },
      destroyed(){
          this.destroyVm()
      }
  }
</script>

<style lang="less">
    .stretch-body-parent{
        overflow: hidden;
        transition: all 0.3s;
    }
    .show-more{
        text-align: center;
        font-size: 0.25rem;
        position: relative;
    }
    .show-more-icon{
        position: relative;
        margin-top: 0.2rem;
    }
    .show-more-text{
        color: #999;
    }
</style>