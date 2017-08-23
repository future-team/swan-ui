# TabSet/Tab
## Import
```javascript
import Vue from 'vue'
import { TabSet,Tab } from 'swan-ui'

Vue.component(TabSet.name, TabSet)
Vue.component(Tab.name, Tab)
```

## Usage

```xml
<sw-tab-set defaultActiveIndex="1" vertical>
    <sw-tab heading="标题1" :index="1">
        横向内容1
    </sw-tab>
    <sw-tab heading="标题2" :index="2">
        横向内容2
    </sw-tab>
</sw-tab-set>
```

## TabSet

### Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|vertical|是否竖排|Boolean|false|-
|width|设置选项卡头部的宽度，只有竖排的情况下才起作用|Number|20|-
|defaultActiveIndex|指定默认选中的选项卡|Number|0|-

### Events

|名称|回调参数|说明
|:--|:--|:--|
|tab-change|（activeIndex）|tab被点击时的回调


### Slot

|名称|说明
|:--|:--|
|-|子项

## Tab

### Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|vertical|是否横向占满|Boolean|false|-
|index|选项卡序号|[Number, String]|-|-
|heading|选项卡的标题文字|String|tab|-

### Events

|名称|回调参数|说明
|:--|:--|:--|
|tab-change|（activeIndex）|tab被点击时的回调


### Slot

|名称|说明
|:--|:--|
|-|子项内容