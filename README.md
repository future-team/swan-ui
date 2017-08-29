# swan-ui
Vue Components for Mobile App.

- [示例](https://future-team.github.io/swan-ui/examples/index.html#/)
- [文档](http://future-team.github.io/swan-ui/doc/index.html) 文档工具开发中，后续会做迁移


swan-ui需要与[phoenix-styles](http://future-team.github.io/phoenix-styles/example/index.html)样式库配合使用，分别引入组件和样式。

组件引入方式：

- script标签引入
- 全局注册
- 按需引入注册

样式引入方式：

- html中link标签引入
- 从npm包引入

推荐组件用按需引入的方式，样式可根据需要选择合适的方式。

## 引入组件
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
<template>
    <div id="app">
        <sw-button @click="visible = true" block>按钮</sw-button>
        <sw-dialog v-model="visible" title="Hello world">
            <p>欢迎使用 Swan UI</p>
        </sw-dialog>
    </div>
<template>
<script>
    new Vue({
        el: '#app',
        data: function(){
            return { visible: false }
        }
    })
</script>

```

### 从npm包引入

#### 安装

```
npm install swan-ui --save
```

```
npm install phoenix-styles --save
```
#### 全局注册

```javascript
import Vue from 'vue'
import SwanUI from 'swan-ui'

Vue.use(SwanUI)
```

#### 按需引入

```javascript
import Vue from 'vue'
import { Button, Star} from 'swan-ui'
//import Button from 'swan-ui/lib/Button'
//import Star from 'swan-ui/lib/Star'
Vue.component(Button.name,Button)
Vue.component(Star.name,Star)
```

## 引入样式

### link标签引入
```xml
<!-- html引入 -->
<link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css" />
```

### 从npm包导入

在.vue文件中
```xml
<style lang="less" src="phoenix-styles/less/phoenix-styles.less"></style>
```
或者在js文件中引入：

```javascript
<!-- 全部引入 -->
import 'phoenix-styles/dist/phoenix-styles.min.css'
<!-- 按需引入 -->
import 'phoenix-styles/less/modules/buttons.less'
<!-- 全部引入 -->
import 'phoenix-styles/less/phoenix-styles.less'
```

另外，如果要换成ios主题的皮肤，可引入

```javascript
import 'phoenix-styles/dist/ios-skin.min.css'
```

## webpack配置

可参考文档 [vue-loader  webpack配置](https://vue-loader.vuejs.org/zh-cn/options.html)

### webpack2配置

#### 不提取css

```javascript
module.exports = {
    // other options...
    resolve: {
        extensions: ['.js','.vue']
    },
    module: {
        rules:[{
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader'
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: 'css-loader'
        },{
            test:/\.less$/,
            use: "style-loader!css-loader!less-loader"
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=../dist/iconfont/[name].[ext]'
        }]
    }
}
```

#### 提取css

```javascript
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    // other options...
    resolve: {
        extensions: ['.js','.vue']
    },
    module: {
        rules:[{
            enforce: 'pre',
            test: /\.vue$/,
            loader: 'eslint-loader'
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader' 
                    }),
                    less: ExtractTextPlugin.extract({
                        use: 'less-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract('css-loader')
        },{
            test:/\.less$/,
            use:  ExtractTextPlugin.extract('less-loader')
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=../dist/iconfont/[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}
```

# 版本更新

- v1.0.2 提供压缩/未压缩打包文件
- v1.0.3 修复TabSet组件无法动态更新的问题
- v1.0.4 统一事件名称、filter组件数据结构、补充文档
- v1.0.5 修复prompt默认取消按钮无法关闭问题
