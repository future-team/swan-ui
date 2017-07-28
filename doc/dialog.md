# Dialog

### Import
```javascript
import Vue from 'vue'
import { Dialog } from 'swan-ui'

Vue.component(Dialog.name, Dialog)
```

### Usage
```xml
<sw-dialog title="提示"
           v-model="visible"
           shadowDisabled
           closeButton>
    您确定以及肯定要提交吗？
</sw-dialog>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|closeButton|右上角按钮是否可见|Boolean|false|-
|shadowDisabled|阴影部分是否点击可关闭弹框|Boolean|false|-
|title|标题|String|-|-

## Events

|名称|回调参数|说明
|:--|:--|:--|
|toggle|(val,evt)|隐藏/显示时触发


## Slot

|名称|说明
|:--|:--|
|title|标题，会覆盖属性title
|-|弹出框主体
|footer|弹出框footer