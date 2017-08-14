# swan-ui
Vue Components for Mobile App.

- [示例](https://future-team.github.io/swan-ui/examples/index.html#/)
- [文档](http://future-team.github.io/swan-ui/doc/index.html) 文档工具开发中，后续会做迁移
- [临时文档](https://github.com/future-team/swan-ui/tree/master/examples/doc﻿)

## Install

```
npm install swan-ui --save
```

## Usage

### script标签引入
```xml
<!-- 引入样式 -->
<link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css" />
<!-- 移动端适配 -->
<script type="text/javascript" src="https://www.dpfile.com/app/gfs-viewport/gfs-viewport.js"></script>
<!-- 引入Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 引入组件库 -->
<script src="http://future-team.github.io/swan-ui/lib/index.js"></script>
```

```xml
<div id="app">
    <sw-button @click="visible = true" block>按钮</sw-button>
    <sw-dialog v-model="visible" title="Hello world">
        <p>欢迎使用 Swan UI</p>
    </sw-dialog>
</div>
<script>
    new Vue({
        el: '#app',
        data: function(){
            return { visible: false }
        }
    })
</script>
</body>

```

### 全局注册

```javascript
import Vue from 'vue'
import SwanUI from 'swan-ui'

Vue.use(SwanUI)
```

### 按需引入

```javascript
import Vue from 'vue'
import { Button, Star} from 'swan-ui'
<!-- import Button from 'swan-ui/lib/Button' -->
<!-- import Star from 'swan-ui/lib/Star' -->
Vue.component(Button.name,Button)
Vue.component(Star.name,Star)
```

## 注意

swan-ui需要与[phoenix-styles](http://future-team.github.io/phoenix-styles/example/index.html)样式库配合使用

phoenix-styles引入方式：

```xml
<!-- html引入 -->
<link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css" />
```
```javascript
<!-- 全部引入 -->
import 'phoenix-styles/dist/phoenix-styles.min.css'
<!-- 按需引入 -->
import 'phoenix-styles/less/modules/buttons.less'
<!-- 全部引入 -->
import 'phoenix-styles/less/phoenix-styles.less'
```

如果要换成ios主题的皮肤，可引入

```javascript
import 'phoenix-styles/dist/ios-skin.min.css'
```



