# Star


### Import
```javascript
import Vue from 'vue'
import { Slider } from 'swan-ui'

Vue.component(Slider.name, Slider)
```

### Usage
```xml
<sw-slider tipMode="tooltip" :range="[23,78]" showRange/>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|progress|初始进程|Number|0|-
|placement|进度提示的位置|String|top|top、bottom
|range|范围|Array|[0,100]|-
|showRange|是否在进度条前后显示范围|Boolean|false|-
|tipMode|显示提示的模式|String|default|default、tooltip
|duration|每次移动的固定距离|Number|1|能被总长度整除
|tipStay|初始及松开按钮时是否显示tooltip|Boolean|false|-
|disabled|进度条是否只读|Boolean|false|-


## Events

|名称|回调参数|说明
|:--|:--|:--|
|slide-end|(currentProgress)|拖动时触发


## Slot

无