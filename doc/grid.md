# Grid/Row/Col


### Import
```javascript
import Vue from 'vue'
import { Grid,Row,Col } from 'swan-ui'

Vue.component(Grid.name, Grid)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
```

### Usage
```xml
<sw-grid>
    <sw-row align="stretch" class="row-demo">
        <sw-col>stretch</sw-col>
        <sw-col>stretch</sw-col>
        <sw-col>stretch</sw-col>
    </sw-row>
</sw-grid>
```
## Attributes
### Grid
无
### Row

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|align|竖直方向的排列|String|stretch|top,bottom,center,stretch,baseline

### Col

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|align|竖直方向的排列|String|-|top,bottom,center
|width|占100份的多少份，目前支持5-100之间5的倍数|Number|均分|-
|offset|偏移量|Number|0|-


## Events

无


## Slot

|名称|说明
|:--|:--|
|-|子项