# ImageList
## Import
```javascript
import Vue from 'vue'
import { ImageList } from 'swan-ui'

Vue.component(ImageList.name, ImageList)
```

## Usage
```xml
<sw-image-list :column="2">
    <dl v-for="(url,index) in urls"
         class="ph-image-item"
         :key="index">
        <dt>
            <sw-image :src="url"
                      :defaultSrc="defaultSrc"
                      lazy></sw-image>
        </dt>
        <dd>
            <p class="ph-image-title">图片</p>
            <p class="ph-image-desp">描述</p>
        </dd>
    </dl>
</sw-image-list>
```

## Attributes


|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|column|图片列数|Number|1|-

## Events

无

## Slot

|名称|说明
|:--|:--|
|-|子项