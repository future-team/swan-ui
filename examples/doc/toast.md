# Toast

### Import
```javascript
import Vue from 'vue'
import { Toast } from 'swan-ui'

Vue.component(Toast.name, Toast)
```

### Usage
两种参数传递方式

```javascript
Toast.info('哈哈哈');
```

```javascript
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


## Methods
|方法|说明|
|:--|:--|
|Toast.info()|普通提示|
|Toast.success()|成功提示|
|Toast.fail()|失败提示|
|Toast.tip()|警告提示|
|Toast.loading|加载提示|
|Toast.remove|移除toast|

## Events

无


## Slot

无

## 注

全局注册插件时，可以直接调用this.$info()

```javascript
import Vue from 'vue'
import SwanUI from 'swan-ui'

Vue.use(SwanUI)
```
