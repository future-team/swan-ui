# Alert

### Import
```javascript
import Vue from 'vue'
import { Alert } from 'swan-ui'

Vue.component(Alert.name, Alert)
```

### Usage
```xml
<sw-alert v-model="visible"
          title="这是标题"
          content="这是内容"
          shadowDisabled></sw-alert>
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|closeButton|右上角按钮是否可见|Boolean|false|-
|shadowDisabled|阴影部分是否点击可关闭弹框|Boolean|false|-
|title|标题|String|-|-
|content|内容|String|-|-
|buttons|按钮信息|Array|-|-

buttons
```
[
    {text: '按钮1',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮1,我会关闭');this.visible3=false}},
    {text: '按钮2',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮2')}},
    {text: '按钮3',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮3')}}
]
```

## Events

|名称|回调参数|说明
|:--|:--|:--|
|toggle|(val,evt)|隐藏/显示时触发，v-model时不要使用


## Slot

|名称|说明
|:--|:--|
|title|标题，会覆盖属性title
