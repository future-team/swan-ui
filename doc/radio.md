# Radio
## Import
```javascript
import Vue from 'vue'
import { Radio } from 'swan-ui'

Vue.component(Radio.name, Radio)
```

## Usage
```xml
<sw-checkbox label="选项一"  value="1" checked/>
<sw-checkbox label="选项二"  value="2" />
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|label|展示的文字信息|String|-|-
|type|类型，不需要传入|String|checkbox|checkbox
|disabled|禁用状态|Boolean|false|
|name|名称|String|-|-
|checked|是否选中|Boolean|false|
|value|值|-|-|-


## Events

|名称|回调参数|说明
|:--|:--|:--|
|change|（value，evt）|被点击时的回调


## Slot

无