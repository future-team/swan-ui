<template>
    <div>
        <div id="example">
            <slot></slot>
        </div>
        <div class="stretch-body-parent" ref="stretchBodyParent">
            <div ref="stretchBody">
                <slot name="code"></slot>
            </div>
        </div>
        <div @click="handleClick" class="show-more">
            <div class="show-more-icon">
                <sw-icon v-if="currentVisible" phIcon="arrow-dropup" phStyle="gray"></sw-icon>
                <sw-icon v-else phIcon="arrow-dropdown"></sw-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import Stretch from '../mixins/stretch.js'
    import SwIcon from '../../../src/modules/icon/Icon'
    import Vue from 'vue'

    export default {
      components: {SwIcon},
      name: 'ShowMore',
      mixins: [Stretch],
      data(){
          return{

          }
      },
      methods:{
          escape2Html(str) {
              let  map={'<':'&lt;','>':'&gt;'}
              return str.replace(/(<|>)/ig,function(all,t){return map[t]})
          }
      },
      props:['code']
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
    }
    .show-more-text{
        color: #999;
    }
</style>