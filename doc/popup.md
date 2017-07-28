# Popup

### Import
```javascript
import Vue from 'vue'
import { Popup } from 'swan-ui'

Vue.component(Popup.name, Popup)
```

### Usage
```xml
<sw-popup v-model="visible">
    <div class='ph-action-sheet'>
        <ul>
            <li class='ph-popup-item ph-popup-tip'>确认 删除此作品？</li>
            <li class='ph-popup-item ph-popup-delete' @click="visible=false">删除作品</li>
        </ul>
        <div class='ph-popup-operate' @click="visible=false">取消</div>
    </div>
</sw-popup>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|align|弹层的位置|String|top|top、bottom


## Events

|名称|回调参数|说明
|:--|:--|:--|
|toggle|(val,evt)|隐藏/显示时触发，v-model时不要使用


## Slot

|名称|说明
|:--|:--|
|-|弹出内容
