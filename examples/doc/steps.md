# Star


### Import
```javascript
import Vue from 'vue'
import { Steps } from 'swan-ui'

Vue.component(Steps.name, Steps)
```

### Usage
```xml
<sw-steps :currentStep="currentStep"
          :list="['申请提交','财务一级审批','支付中','支付成功']"
          @click="handleClick"/>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|readOnly|只读模式|Boolean|false|-
|list|steps内容，字符串数组|Array|[]|-
|currentStep|当前处于第几步|Number|0|-


## Events

|名称|回调参数|说明
|:--|:--|:--|
|click|(item,index)|每一步被点击时触发,item是传入的list中被选中的那一项


## Slot

无