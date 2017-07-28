# Image
## Import
```javascript
import Vue from 'vue'
import { Image } from 'swan-ui'

Vue.component(Image.name, Image)
```

## Usage
```xml
<sw-image :src="url" phSize="contain" />
```

## Attributes


|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|defaultSrc|默认图片地址|String|-|-
|src|图片地址|String|-|-
|alt|图像无法显示时的替代文本|String|-|-
|phSize|图片大小|String|default|default, cover, contain
|lazy|是否懒加载|Boolean|false|-

## Events

|名称|回调参数|说明
|:--|:--|:--|
|load|-|图片加载完成时触发


## Slot

无