# Pullup

### Import
```javascript
import Vue from 'vue'
import { Pullup } from 'swan-ui'

Vue.component(Pullup.name, Pullup)
```

### Usage
```xml
<sw-pullup :status="status" @load="handleLoad"></sw-pullup>
```
## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|mode|加载更多的模式|String|auto|auto、button
|status|加载状态|Number|4|0初始状态, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
|tips|加载5个状态的文字描述|Array|\['加载更多','加载中','加载成功','加载失败','没有更多']|
|phStyle|按钮颜色|String|primary|primary、warning、danger、info、error、success、link、gray

## Events


|名称|回调参数|说明
|:--|:--|:--|
|load|evt|点击按钮加载或滑到底部自动加载时出发


## Slot

无