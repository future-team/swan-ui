var projectName = require("./package.json").name;
var fs = require('fs');

var description = fs.readFileSync('./doc.html');

module.exports = {
    //扫描的文件路径
    paths: ['sr'],
    demoDir: 'examples/src/',
    //文档页面输出路径
    demoUrl: 'https://future-team.github.io/swan-ui/examples/index.html#/',
    outdir: 'doc/',
    //内置主题
    // theme:'ui',
    //自定义主题目录
    //themedir: 'theme-smart-ui/',
    //项目信息配置
    project: {

        //项目名称
        name: projectName,

        //项目描述，可以配置html，会生成到document主页
        description: description,

        //版本信息
        version: '1.0.0',

        //地址信息
        url: '',
        // logo:'dp-logo.png',

        // scripts: ['react.js','phoenix-ui.js'],

        //导航信息
        navs: [
            {
                name: "主页",
                url: "index.html"
            }
        ],
        isApp: true
    },
    //demo页面需要加载的js库
    demo: {
        // paths : ['node_modules/react/dist/react.js','dist/phoenix-ui.js'],
        // link : ['bower_components/react/react.js','bower_components/react/react-dom.js'],
        autoComplete : true,
    }
};

