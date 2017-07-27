# Input
## Import
```javascript
import Vue from 'vue'
import { Input } from 'swan-ui'

Vue.component(Input.name, Input)
```

## Usage
```xml
<sw-input type="text"
          placeholder='请输入...'
          v-model="value"/>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|type|类型|String|text|除checkbox和radio之外的原生input类型
|clear|是否显示 `清除已经输入的内容按钮`|Boolean|false|-
|visible|是否显示`密码是否可见按钮`,仅适用于password的类型|Boolean|false|
|error|是否错误|Boolean|false|-
|phIcon|icon类型|String|-|-
|placeholder|原生属性|-|-|-
|disabled|原生属性|-|-|-
|maxlength|原生属性|-|-|-
|minlength|原生属性|-|-|-
|autocomplete|原生属性|-|-|-
|readonly|原生属性|-|-|-
|autofocus|原生属性|-|-|-
|value|原生属性|-|-|-
|name|原生属性|-|-|-
|min|原生属性|-|-|-
|max|原生属性|-|-|-


## Events

|名称|回调参数|说明
|:--|:--|:--|
|input|(value,evt )|输入时触发
|change|(value,evt )|输入时触发
|focus|-|聚焦时触发
|blur|-|失去焦点时触发


## Slot

无