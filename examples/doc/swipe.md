# Swipe

### Import
```javascript
import Vue from 'vue'
import { Swipe } from 'swan-ui'

Vue.component(Swipe.name, Swipe)
```

### Usage
```xml
<sw-swipe :buttons="[
            {text: '置顶',  phStyle: 'gray', onHandle:()=>{console.log('置顶')}},
            {text: '标为已读',  phStyle: 'info', onHandle:()=>{console.log('标为已读')}},
            {text: '删除',  phStyle: 'error', onHandle:()=>{console.log('删除')}}
        ]">
   <div class="swipe-demo">向左滑动</div>
</sw-swipe>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|buttons|按钮组|Array|[]|-


## Events

无


## Slot

|名称|说明
|:--|:--|
|-|被拖动的目标