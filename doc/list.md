# List/ListHeader/ListItem/ListCol

### Import
```javascript
import Vue from 'vue'
import {List,ListHeader,ListItem,ListCol} from 'swan-ui'

Vue.component(List.name, List)
Vue.component(ListHeader.name, ListHeader)
Vue.component(ListItem.name, ListItem)
Vue.component(ListCol.name, ListCol)
```

### Usage
```xml
<sw-list>
    <sw-list-item navigate>
        <sw-list-col heading>
            <label>性别</label>
        </sw-list-col>
        <sw-list-col tail>
            <sw-input type="text" p
                      placeholder="男/女"
                      @click.native="handleClick"
                      disabled/>
        </sw-list-col>
    </sw-list-item>
</sw-list>
```
## Attributes
### List
无

### ListHeader
无

### ListItem

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|disabled|是否不可用|Boolean|false|-
|error|是否是输入有误|Boolean|false|-
|required|是否必选项|Boolean|false|-
|navigate|是否需要右箭头|Boolean|false|-

### ListCol

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|heading|是否靠左，表现为行内元素|Boolean|false|-
|tail|是否靠右，表现为行内元素|Boolean|false|-


## Events

无


## Slot

|名称|说明
|:--|:--|
|-|子项