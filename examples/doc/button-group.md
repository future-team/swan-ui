# ButtonGroup


### Import
```javascript
import Vue from 'vue'
import { ButtonGroup } from 'swan-ui'

Vue.component(ButtonGroup.name, ButtonGroup)
```

### Usage
```xml
<sw-button-group>
    <sw-button hollow phStyle="gray">取消</sw-button>
    <sw-button>保存</sw-button>
</sw-button-group>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|phType|类型|String|default|default(用于双按钮)、justify(水平排列)、tacked(垂直排列)、segmente(分割排列)、footer(尾部按钮)

## Events

无


## Slot

|名称|说明
|:--|:--|
|-|Button组件