# Popover

### Import
```javascript
import Vue from 'vue'
import { Popover } from 'swan-ui'

Vue.component(Popover.name, Popover)
```

### Usage
```xml
<sw-popover content="啦啦啦啦啦啦啦啦" :distance="20">
    <sw-button>bottom</sw-button>
</sw-popover>
```

```xml
<sw-popover>
     <div slot="content">
        <ul>
            <li class="popover-demo-content">下侧气泡</li>
            <li class="popover-demo-content">下侧气泡</li>
        </ul>
     </div>
     <sw-button>bottom</sw-button>
</sw-popover>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|placement|位置|String|bottom|top、bottom、left、right
|distance|气泡距离点击物的距离|Number|5|-
|content|提示内容|String|-|-

## Events

无

## Slot

|名称|说明
|:--|:--|
|-|点击目标
|content|气泡内容

