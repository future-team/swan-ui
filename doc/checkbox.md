# CheckBox
## Import
```javascript
import Vue from 'vue'
import { CheckBox } from 'swan-ui'

Vue.component(CheckBox.name, CheckBox)
```

## Usage
```xml
<sw-radio name='radio1'
          label="选项三"
          value="3"
          disabled />
<sw-radio name='radio1'
          label="选项四"
          value="4"
          disabled />
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|label|展示的文字信息|String|-|-
|type|类型，不需要传入|String|radio|radio
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