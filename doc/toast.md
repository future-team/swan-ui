# Toast

### Import
```javascript
import Vue from 'vue'
import { Toast } from 'swan-ui'

Vue.component(Toast.name, Toast)
```

### Usage
```xml
Toast.info('哈哈哈');
Toast.info({
        content:'保存成功',
        duration: '5000',
        callback: ()=>{
            console.log('保存成功')
        }
});
Toast.error({
        content:'保存失败',
        duration: '5000',
        callback: ()=>{
            console.log('保存失败')
        }
});
```

## Attributes

|参数|说明|类型|默认值|可选值
|:--|:--|:--|:--|:--|
|duration|停留时间|Number|2000|-
|phIcon|图标|String|-|-
|content|提示内容|String|-|-
|callback|关闭后回调|Function|-|-


## Events

无


## Slot

无
