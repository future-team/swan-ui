# Icon


### Import
```javascript
import Vue from 'vue'
import { Icon } from 'swan-ui'

Vue.component(Icon.name, Icon)
```

### Usage
```xml
<sw-icon phIcon="search">搜索</sw-icon>
<sw-icon phIcon="search" phStyle="gray"/>
<sw-icon phIcon="search" phStyle="info"/>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|phIcon|类型|String|-|todo
|phStyle|颜色|String|primary|primary、warning、danger、info、error、success
|phSize|尺寸|String|sm|xs、sm、md、lg、xlg


## Events

无


## Slot

|名称|说明
|:--|:--|
|-|文案