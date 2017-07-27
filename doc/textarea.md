# Input
## Import
```javascript
import Vue from 'vue'
import { Input } from 'swan-ui'

Vue.component(Input.name, Input)
```

## Usage
```xml
<sw-textarea count
    :maxlength="10"
    placeholder="说点什么..." />
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|count|是否显示输入计数|Boolean|false|-
|maxlength|可输入的字符总数|Number|-|-
|placeholder|-|-|-|-
|value|-|-|-|-


## Events

|名称|回调参数|说明
|:--|:--|:--|
|input|(value,evt )|输入时触发
|change|(value,evt )|输入时触发

## Slot

无