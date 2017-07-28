# Badge


### Import
```javascript
import Vue from 'vue'
import { Badge } from 'swan-ui'

Vue.component(Badge.name, Badge)
```

### Usage
```xml
<sw-badge>惠</sw-badge>
<sw-badge phStyle="success">团</sw-badge>
<sw-badge>1</sw-badge>
<sw-badge phStyle="danger">hot</sw-badge>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|phStyle|背景颜色|String|default|default、primary、warning、danger、info、error、success

## Events

无


## Slot

|名称|说明
|:--|:--|
|-|文案