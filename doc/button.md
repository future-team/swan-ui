# Button
## Import
```javascript
import Vue from 'vue'
import { Button } from 'swan-ui'

Vue.component(Button.name, Button)
```

## Usage
```xml
<sw-button>默认按钮</sw-button>
<sw-button hollow >空心按钮</sw-button>
<sw-button phStyle="link">文字按钮</sw-button>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|phStyle|颜色|String|primary|primary、warning、danger、info、error、success、link、gray
|phSize|大小|String|sm|sm、md、lg
|disabled|禁用状态|Boolean|false|
|active|激活状态|Boolean|false|
|block|是否占行|Boolean|false|
|phIcon|图标类型|String||loading-gray、loading-white等
|stable|图标是否影响文字位置|Boolean|false|


## Events

|名称|回调参数|说明
|:--|:--|:--|
|click|evt|按钮被点击时触发


## Slot

|名称|说明
|:--|:--|
|-|按钮名称