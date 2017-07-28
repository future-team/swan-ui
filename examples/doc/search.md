# Search
## Import
```javascript
import Vue from 'vue'
import { Search } from 'swan-ui'

Vue.component(Search.name, Search)
```

## Usage
```xml
 <sw-search @search="handleSearch"
            @click="handleSearch"
            buttonText="确定" />
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|buttonText|按钮文案|String|取消|-
|placeholder|输入提示|String|搜索|-
|value|输入值|-|-|-


## Events

|名称|回调参数|说明
|:--|:--|:--|
|input|(value,evt)|输入时触发
|change|(value,evt)|输入时触发
|focus|evt|聚焦时触发
|blur|evt|失去焦点时触发
|search|(value,evt)|按下回车时触发
|click|(value,evt)|按钮被点击时触发


## Slot

无