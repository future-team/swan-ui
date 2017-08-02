# swan-ui
Vue Components for Mobile App.

## Install

```
npm install swan-ui --save
```

## Usage


```
<!-- 引入样式 -->
<link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css" />
<!-- 移动端适配 -->
<script type="text/javascript" src="https://www.dpfile.com/app/gfs-viewport/gfs-viewport.js"></script>
<!-- 引入Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 引入组件库 -->
<script src="http://future-team.github.io/swan-ui/lib/index.js"></script>
```

```
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

or

```
import Vue from 'vue'
import SwanUI from 'swan-ui'

Vue.use(SwanUI)
```

or

```
import Vue from 'vue'
import { Button, Star} from 'swan-ui'

Vue.component(Button.name,Button)
Vue.component(Star.name,Star)
```