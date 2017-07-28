# Star


### Import
```javascript
import Vue from 'vue'
import { Accordion } from 'swan-ui'

Vue.component(Accordion.name, Accordion)
```

### Usage
```xml
<sw-accordion v-model="visible">
    <template slot="header">{{selected}}</template>
    <ul class="accordion-demo-list">
           <li v-for="item in list"
               class="accordion-demo-item"
               @click="handleClick(item)">{{item}}</li>
    </ul>
</sw-accordion>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|hideIcon|是否隐藏向下的箭头|Boolean|false|-


## Events

无


## Slot

无