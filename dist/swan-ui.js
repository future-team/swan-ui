(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Swan"] = factory();
	else
		root["Swan"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_Button2.default];

var install = function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) return;

    components.map(function (component) {
        Vue.component(component.name, component);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

exports.default = {
    install: install,
    Button: _Button2.default
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79e8810a_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__ = __webpack_require__(16);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79e8810a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79e8810a_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79e8810a", Component.options)
  } else {
    hotAPI.reload("data-v-79e8810a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("dfc237aa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79e8810a\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/less-loader/dist/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79e8810a\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/less-loader/dist/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: \n\n@import \"phoenix-styles/less/public.less\";\n@import \"phoenix-styles/less/modules/buttons.less\";\n^\nCan't resolve './phoenix-styles/less/modules/buttons.less' in '/Users/chang/future-team/swan-ui/src'\n      in /Users/chang/future-team/swan-ui/src/Button.vue (line 71, column 0)");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Base = __webpack_require__(9);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwButton',
    extends: _Base2.default,
    methods: {
        handleClick: function handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    props: {
        classPrefix: {
            type: String,
            default: 'button'
        },
        phSize: {
            type: String,
            default: 'sm'
        },
        phStyle: {
            type: String,
            default: 'primary'
        },
        block: Boolean,
        radius: Boolean,
        hollow: Boolean,
        disabled: Boolean,
        active: Boolean,
        phIcon: String,
        stable: Boolean
    }
}; //
//
//
//
//
//
//

/**
 * 按钮组件<br/>
 * - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择。
 * - 也可以自定义行内样式和className名字定义UI展示。
 * - 通过phSize设置大小, 可选sm、md、lg。
 * - 通过phStyle选择按钮颜色，可选primary、info、error、warning、danger、link、gray、success。
 * - 支持disabled, active属性定义。
 * - 按钮内容默认居中，可通过stable属性设置按钮不占位，只有内容部分居中，适用于动态添加icon且不希望文字移位的情况。
 *
 * 主要属性和接口：
 * - phSize:按钮大小, 默认sm <br/>
 * 如: `<Button phSize="lg">button</Button>`
 * - phStyle:按钮颜色, 默认primary <br/>
 * 如: `<Button phStyle="info">button</Button>`
 * - block:是否块级显示，默认false <br/>
 * 如: `<Button block>button</Button>`
 * - phIcon:icon符号类型,默认没有符号 <br/>
 * 如: `<Button phIcon="search">button</Button>`
 *
 * @class Button
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo button|button.js {展示}
 * @show true
 * */

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Base_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Base_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Base_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Base_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Base.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d056edae", Component.options)
  } else {
    hotAPI.reload("data-v-d056edae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _style = __webpack_require__(11);

var _style2 = _interopRequireDefault(_style);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwBase',
    mixins: [_style2.default],
    computed: {
        classObject: function classObject() {
            return this.getClassObject();
        },
        styleObject: function styleObject() {
            return this.getStyleObject();
        }
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = __webpack_require__(12);

var _constants2 = _interopRequireDefault(_constants);

var _property = __webpack_require__(13);

var _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = 'ph-';

/**
 * 根据配置文件 property.config.js 生成class和style
 */
exports.default = {
    methods: {
        getStyleObject: function getStyleObject() {
            var style = this.getStyleProps();
            return style.styleProps;
        },
        getClassObject: function getClassObject() {
            var withPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var withConstPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var _this = this;
            var style = this.getStyleProps();
            var classProps = style.classProps;
            classProps.unshift('');

            var classObject = {};
            classProps.forEach(function (item) {
                if (withConstPrefix) {
                    classObject[PREFIX + _this.setPrefix(item, withPrefix)] = true;
                } else {
                    classObject[_this.setPrefix(item, withPrefix)] = true;
                }
            });
            return classObject;
        },
        getStyleProps: function getStyleProps() {
            var props = this.$props;
            var classProps = [];
            var styleProps = {};
            for (var key in props) {
                var value = props[key],
                    propConfig = _property2.default[key];
                if (value && propConfig) {
                    switch (typeof propConfig === 'undefined' ? 'undefined' : _typeof(propConfig)) {
                        case 'boolean':
                            if (value) {
                                classProps.push(key);
                            }
                            break;
                        case 'function':
                            var param = propConfig.call(this, value);
                            if (typeof param == 'string') {
                                classProps.push(param);
                            } else {
                                styleProps.push(param);
                            }
                            break;
                        default:
                            classProps.push(propConfig);
                            break;
                    }
                }
            }
            return {
                classProps: classProps,
                styleProps: styleProps
            };
        },

        /*
         * 给className添加前缀后返回className
         * @method getClassName
         * @param name {String} 从该字符串中去查找
         * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
         * @return {String}
         * */
        getClassName: function getClassName(name) {
            var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var constPre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            name = name ? name : '';
            name = (name + '').split(' ');
            var list = [],
                _this = this;
            name.forEach(function (item) {
                if (item) {
                    if (constPre) list.push(PREFIX + _this.setPrefix(item, pre));else list.push(_this.setPrefix(item, pre));
                }
            });
            return list.join(' ');
        },

        /*
         * 设置css类名前缀
         * @method setPrefix
         * @param name{String} class名字
         * @param pre{Boolean} 是否添加前缀
         * @return {String}
         * */
        setPrefix: function setPrefix(name) {
            var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var props = this.$props;
            var classArray = _constants2.default.classNameNamespace ? [_constants2.default.classNameNamespace] : [];

            if (pre && props.classPrefix) {
                classArray.push(props.classPrefix);
            }
            if (name && name != props.classPrefix) {
                classArray.push(name);
            }
            return classArray.join(classArray.length > 1 ? '-' : '');
        },

        /*
         * 检查元素是否存在样式名
         * @method hasClass
         * @param obj {Object} 元素
         * @param cls {String} 需要检查的样式名
         * @return {Boolean}
         * */
        hasClass: function hasClass(obj, cls) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },

        /*
         * 给元素增加一个样式名
         * @method addClass
         * @param obj {Object} 元素
         * @param cls {String} 样式名
         * */
        addClass: function addClass(obj, cls) {
            if (!this.hasClass(obj, cls)) obj.className += " " + cls;
        },

        /*
         * 给元素删除一个样式名
         * @method removeClass
         * @param obj {Object} 元素
         * @param cls {String} 样式名
         * */
        removeClass: function removeClass(obj, cls) {
            if (this.hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * classname前缀
 */

function setNamespace(className) {
  return '' + className;
}

var CLASS_NAME_NAMESPACE = '';

exports.default = {

  //标签新增命名空间
  //标签启用
  positive: setNamespace('positive'),
  //标签灰色
  negative: setNamespace('negative'),
  //标签灰白
  modest: setNamespace('modest'),
  //提示框暖色(黄色)
  warm: setNamespace('warm'),
  //标签灰色
  //标签无背景色
  neutral: setNamespace('neutral'),

  //theme
  // 白色
  light: setNamespace('light'),
  // 橘红色
  assertive: setNamespace('assertive'),
  //绿色
  balanced: setNamespace('balanced'),
  //按钮是否需要添加边框
  outline: setNamespace('outline'),
  //按钮是否处于待唤醒状态
  awaiting: setNamespace('awaiting'),
  //禁用
  disabled: setNamespace('disabled'),
  //启用
  enable: setNamespace('enable'),
  block: setNamespace('block'),
  //垂直
  tacked: setNamespace('tacked'),
  //宽度自适应
  justify: setNamespace('justify'),
  //选中
  active: setNamespace('active'),
  //行内样式
  inline: setNamespace('inline'),
  //大小
  size: setNamespace('size'),
  //圆形样式
  radius: setNamespace('radius'),
  //隨圆
  round: setNamespace('round'),
  //向上箭头
  'arrow-up': setNamespace('arrow-up'),
  //向下箭头
  'arrow-down': setNamespace('arrow-down'),
  /**
   * 颜色
   * */
  //成功样式
  success: setNamespace('success'),
  //错误红色
  error: setNamespace('error'),
  //警告warning
  warning: setNamespace('warning'),
  //危险danger
  danger: setNamespace('danger'),
  //展示
  show: setNamespace('show'),
  white: setNamespace('white'),
  /**
   * form列表相关
   * */
  //必填
  require: setNamespace('require'),
  //跳转链接
  jump: setNamespace('link'),
  //最后一个item是否浮动
  right: setNamespace('lastItem'),
  classNameNamespace: CLASS_NAME_NAMESPACE,
  /**
   * tab
   * */
  vertical: setNamespace('vertical')
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tool = __webpack_require__(14);

var getVal = function getVal(vals, val) {
    var result = (vals.join(',') + ',').match(val.toLowerCase() + ',') != null ? val : '';
    if (!result) {
        (0, _tool.warning)('属性的取值 %s 不在设定集合 %s 里', val, vals.join(','));
    }
    return result;
};

exports.default = {

    /*以下属性都是数组里固定值*/
    phType: function phType(val) {
        return getVal(['default', 'tacked', 'justify', 'segmente'], val);
    },
    phSize: function phSize(val) {
        return getVal(['default', 'lg', 'md', 'sm', 'xs', 'cover', 'contain'], val);
    },
    phStyle: function phStyle(val) {
        return getVal(['default', 'primary', 'info', 'success', 'error', 'warning', 'danger', 'link', 'gray', 'light', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'lightbrown', 'lightgray'], val);
    },
    phStatus: function phStatus(val) {
        getVal(['diabled', 'active', 'enable'], val);
    },
    align: function align(val) {
        return getVal(['center', 'left', 'middle', 'auto', 'top', 'right', 'bottom', 'stretch', 'baseline'], val);
    },
    placement: function placement(val) {
        return getVal(['top', 'bottom', 'right', 'left', 'left-full', 'right-full', 'full-screen'], val);
    },

    /*以下属性没有取值，需要的时候添加对应的属性即可*/
    disabled: true,
    active: true,
    radius: true,
    round: true,
    clearfix: true,
    clear: true,
    phHref: true,
    show: true,
    hide: true,
    block: true,
    hollow: true,
    error: true,
    heading: true,
    tail: true,
    required: true,
    stable: true,
    visible: true,

    /*以下属性相当于css属性的快速赋值，比如设置zIndex="2",则会被merge进style里，如果只有属性zIndex没有设置取值，则会被放入props列表中*/
    zIndex: function zIndex(val) {
        if (typeof val == 'string') {
            return {
                zIndex: val
            };
        }
        return 'zindex';
    },
    border: function border(val) {
        if (typeof val == 'string') {
            return {
                border: val
            };
        }
        return 'border';
    },
    padding: function padding(val) {
        if (typeof val == 'string') {
            return {
                padding: val
            };
        }
        return 'padding';
    },
    margin: function margin(val) {
        if (typeof val == 'string') {
            return {
                margin: val
            };
        }
        return 'margin';
    },
    radiusSize: function radiusSize(val) {
        return {
            WebkitBorderRadius: val,
            borderRadius: val
        };
    },
    width: function width(val) {
        return '' + val;
    },
    offset: function offset(val) {
        return 'offset-' + val;
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _arguments = arguments;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Tool = {
    closest: function closest(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        });

        var parent;

        // traverse parents
        while (el) {
            if (el[matchesFn](selector)) return el;

            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) return parent;

            el = parent;
        }

        return null;
    },

    contains: function contains(root, el) {
        if (root.compareDocumentPosition) return root === el || !!(root.compareDocumentPosition(el) & 16);
        if (root.contains && el.nodeType === 1) {
            return root.contains(el) && root !== el;
        }

        while (el = el.parentNode) {
            if (el === root) return true;
        }return false;
    },

    setPhPrefix: function setPhPrefix(val) {
        return 'ph-' + val;
    },

    getDeviceInfo: function getDeviceInfo(type) {
        var u = navigator.userAgent;
        var typeList = {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };

        return typeList[type];
    },


    transToArray: function transToArray(val) {
        switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {
            case 'string':
                var arr = [];
                arr = val.split(',');
                return arr;
            case 'number':
                return val.toString();
            default:
                return val;
        }
    },

    warning: function warning(format) {
        for (var _len = _arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = _arguments[_key];
        }

        if (format === undefined) {
            throw new Error('`warning(format, ...args)` requires a warning ' + 'message argument');
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.warn(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    }
};

exports.default = Tool;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.classObject,
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79e8810a", module.exports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=swan-ui.js.map