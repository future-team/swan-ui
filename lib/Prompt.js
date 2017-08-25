(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["swan"] = factory();
	else
		root["swan"] = factory();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Base_vue__ = __webpack_require__(4);
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
Component.options.__file = "src/modules/Base.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7837aa9e", Component.options)
  } else {
    hotAPI.reload("data-v-7837aa9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('sw-dialog', {
    staticClass: "ph-dialog-prompt",
    attrs: {
      "closeButton": _vm.closeButton,
      "shadowDisabled": _vm.shadowDisabled
    },
    model: {
      value: (_vm.currentVisible),
      callback: function($$v) {
        _vm.currentVisible = $$v
      },
      expression: "currentVisible"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.content) ? _c('div', {
    staticClass: "ph-dialog-prompt-text"
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), _vm._v(" "), _c('sw-input', {
    attrs: {
      "type": "text",
      "value": _vm.inputValue,
      "autofocus": ""
    },
    on: {
      "input": _vm.handleInput
    }
  }), _vm._v(" "), _c('sw-button-group', {
    attrs: {
      "phType": _vm.buttonsType ? 'tacked' : 'default'
    },
    slot: "footer"
  }, _vm._l((_vm.currentButtons), function(button, index) {
    return _c('sw-button', _vm._b({
      key: index,
      attrs: {
        "hollow": "",
        "phSize": "lg",
        "block": _vm.buttonsType,
        "phStyle": button.phStyle || 'primary'
      },
      on: {
        "click": function($event) {
          _vm.handleClick(button.onHandle)
        }
      }
    }, 'sw-button', button.otherProps, false), [_vm._v("\n            " + _vm._s(button.text || '确定') + "\n        ")])
  }))], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5596a466", esExports)
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 定制隐藏/显示切换类组件的 v-model
 */
exports.default = {
    model: {
        prop: 'visible',
        event: 'on-toggle'
    },
    methods: {
        handleToggle: function handleToggle(val) {
            this.$emit('on-toggle', val);
        }
    },
    props: {
        /**
         * 是否可见标识
         * @property visible
         * @type Boolean
         * */
        visible: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 16:
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

var listToStyles = __webpack_require__(21)

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

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _Icon = __webpack_require__(6);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 按钮
 * @class Button
 * @module 基础组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo button|button.vue
 * @show true
 */
exports.default = {
  name: 'SwButton',
  extends: _Base2.default,
  components: { SwIcon: _Icon2.default },
  methods: {
    /**
     * 点击时触发
     * @event click
     * @param {Event} 事件对象
     */
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  props: {
    /**
     * 样式前缀
     * @property classPrefix
     * @type String
     * @default 'button'
     * */
    classPrefix: {
      type: String,
      default: 'button'
    },
    /**
     * 按钮尺寸[sm、md、lg], 默认为sm
     * @property phSize
     * @type String
     * @default 'sm'
     * */
    phSize: {
      type: String,
      default: 'sm'
    },
    /**
     * 按钮颜色[primary、warning、danger、info、error、success、link、gray], 默认primary
     * @property phStyle
     * @type Boolean
     * @default 'primary'
     * */
    phStyle: {
      type: String,
      default: 'primary'
    },
    /**
     * 块级显示
     * @property block
     * @type Boolean
     * @default false
     * */
    block: Boolean,
    radius: Boolean,
    /**
     * 空背景
     * @property hollow
     * @type Boolean
     * @default false
     * */
    hollow: Boolean,
    /**
     * 禁用状态
     * @property disabled
     * @type Boolean
     * @default false
     * */
    disabled: Boolean,
    /**
     * 激活状态
     * @property active
     * @type Boolean
     * @default false
     * */
    active: Boolean,
    /**
     * icon符号类型
     * @property phIcon
     * @type string
     * @default ''
     **/
    phIcon: String,
    /**
     * icon占位情况，默认占位，设置之后不影响文字居中
     * @property stable
     * @type Boolean
     * @default false
     * */
    stable: Boolean
  }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.warning = warning;
exports.getClientHeight = getClientHeight;
exports.getClientWidth = getClientWidth;
exports.getWindowScrollTop = getWindowScrollTop;
exports.getWindowScrollLeft = getWindowScrollLeft;
exports.getOffsetTop = getOffsetTop;
exports.getOffset = getOffset;
exports.isElemOutViewport = isElemOutViewport;
function warning(format) {
    var _len = arguments.length;
    var args = Array(_len > 1 ? _len - 1 : 0);
    for (var _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
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
}

function getClientHeight() {
    return window.innerHeight ? window.innerHeight : document.compatMode === 'BackCompat' ? document.body.clientHeight : document.documentElement.clientHeight;
}

function getClientWidth() {
    return window.innerWidth ? window.innerWidth : document.compatMode === 'BackCompat' ? document.body.clientWidth : document.documentElement.clientWidth;
}

function getWindowScrollTop() {
    return window.pageYOffset ? window.pageYOffset : document.compatMode === 'BackCompat' ? document.body.scrollTop : document.documentElement.scrollTop;
}

function getWindowScrollLeft() {
    return window.pageXOffset ? window.pageXOffset : document.compatMode === 'BackCompat' ? document.body.scrollLeft : document.documentElement.scrollLeft;
}

function getOffsetTop(elem) {
    var offsetTop = 0;
    if (elem.offsetParent) {
        do {
            offsetTop += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return offsetTop >= 0 ? offsetTop : 0;
}

function getOffset(elem) {
    var offsetTop = 0;
    var offsetLeft = 0;
    if (elem.offsetParent) {
        do {
            offsetTop += elem.offsetTop;
            offsetLeft += elem.offsetLeft;
            elem = elem.offsetParent;
        } while (elem);
    }
    return {
        offsetTop: offsetTop >= 0 ? offsetTop : 0,
        offsetLeft: offsetLeft >= 0 ? offsetLeft : 0
    };
}

function isElemOutViewport(elem) {
    var bodyScrollTop = getWindowScrollTop();
    var elemOffsetTop = getOffsetTop(elem);
    var elemHeight = elem.offsetHeight;

    var clientHeight = getClientHeight();

    return elemOffsetTop <= bodyScrollTop + elemHeight || clientHeight + bodyScrollTop <= elemOffsetTop + elemHeight;
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.classObject,
    on: {
      "click": _vm.handleClick
    }
  }, [_c('span', {
    staticClass: "ph-button-inner"
  }, [(_vm.phIcon) ? _c('sw-icon', {
    attrs: {
      "phIcon": _vm.phIcon,
      "phSize": _vm.phIcon.indexOf('loading') != -1 ? 'sm' : ''
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60c2633f", esExports)
  }
}

/***/ }),

/***/ 21:
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

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39cfdda0_node_modules_vue_loader_lib_selector_type_template_index_0_ButtonGroup_vue__ = __webpack_require__(42);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39cfdda0_node_modules_vue_loader_lib_selector_type_template_index_0_ButtonGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/button/ButtonGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ButtonGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39cfdda0", Component.options)
  } else {
    hotAPI.reload("data-v-39cfdda0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f7d2dad6_node_modules_vue_loader_lib_selector_type_template_index_0_Input_vue__ = __webpack_require__(44);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f7d2dad6_node_modules_vue_loader_lib_selector_type_template_index_0_Input_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/input/Input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7d2dad6", Component.options)
  } else {
    hotAPI.reload("data-v-f7d2dad6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73ca936c_node_modules_vue_loader_lib_selector_type_template_index_0_Dialog_vue__ = __webpack_require__(43);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73ca936c_node_modules_vue_loader_lib_selector_type_template_index_0_Dialog_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/modal/Dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73ca936c", Component.options)
  } else {
    hotAPI.reload("data-v-73ca936c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getClassObject = getClassObject;
exports.getStyleProps = getStyleProps;
exports.setPrefix = setPrefix;
exports.setPhPrefix = setPhPrefix;

var _propertyConfig = __webpack_require__(5);

var _propertyConfig2 = _interopRequireDefault(_propertyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = 'ph-';

/**
 * 给class属性值添加前缀
 * @param classProps {Array} 如： [primary,sm]
 * @param withPrefix {String}  如： button
 * @param withConstPrefix {String} 如：'ph-'
 * @returns {Object} 如：{'ph-button-primary':true,'ph-button-sm':true}
 */
function getClassObject() {
    var classProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var classPrefix = arguments[1];
    var withPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var withConstPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    classProps.unshift('');
    var classObject = {};
    classProps.forEach(function (item) {
        if (withConstPrefix) {
            classObject[PREFIX + setPrefix(item, classPrefix, withPrefix)] = true;
        } else {
            classObject[setPrefix(item, withPrefix)] = true;
        }
    });
    return classObject;
}
/**
 * 根据配置文件 propertyConfig.js 获取props中的class和style属性
 * @method getStyleProps
 * @param props {Object}
 * @returns {{classProps: Array, styleObject: {}}}
 */
function getStyleProps(props) {
    var classProps = [];
    var styleProps = {};
    for (var key in props) {
        var value = props[key],
            propConfig = _propertyConfig2.default[key];
        if (value && propConfig) {
            switch (typeof propConfig === 'undefined' ? 'undefined' : _typeof(propConfig)) {
                case 'boolean':
                    if (value) {
                        classProps.push(filterClass(props, key));
                    }
                    break;
                case 'function':
                    var param = propConfig.call(this, value);
                    if (typeof param == 'string') {
                        classProps.push(filterClass(props, param));
                    } else {
                        styleProps.push(filterClass(props, param));
                    }
                    break;
                default:
                    classProps.push(filterClass(props, propConfig));
                    break;
            }
        }
    }
    return {
        classProps: classProps,
        styleObject: styleProps
    };
}
/*
 * 设置css类名前缀
 * @method setPrefix
 * @param name{String} class名字
 * @param pre{Boolean} 是否添加前缀
 * @return {String}
 * */
function setPrefix(name, classPrefix) {
    var pre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var classArray = [];

    if (pre && classPrefix) {
        classArray.push(classPrefix);
    }
    if (name && name != classPrefix) {
        classArray.push(name);
    }
    return classArray.join(classArray.length > 1 ? '-' : '');
}

function setPhPrefix(val) {
    return 'ph-' + val;
}

function filterClass(props, key) {
    if (!props.classMapping) {
        return key;
    }
    var value = typeof key == 'string' ? props.classMapping[key] : key;

    return value ? value : key;
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwButtonGroup',
    extends: _Base2.default,
    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'button-group'
         * */
        classPrefix: {
            type: String,
            default: 'button-group'
        },
        /**
         * 是否有自适应宽度，垂直排列等属性，取值为default(用于双按钮)、justify(水平排列)、tacked(垂直排列)、segmente(分割排列)、footer(尾部按钮)
         * @property phType
         * @type String
         * @default 'default'
         * */
        phType: {
            type: String,
            default: 'default'
        }
    }
}; //
//
//
//
//
//

/**
 * 按钮组
 * @class ButtonGroup
 * @module 基础组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo button-group|button-group.vue
 * @show true
 */

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _Icon = __webpack_require__(6);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 输入框
 * @class Input
 * @module 表单组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo input|input.vue
 * @show true
 */
exports.default = {
    name: 'SwInput',
    extends: _Base2.default,
    inheritAttrs: false,
    components: { SwIcon: _Icon2.default },
    data: function data() {
        return {
            currentType: this.type,
            canSee: false,
            focus: false,
            currentValue: this.value
        };
    },

    computed: {
        clearStatus: function clearStatus() {
            return this.clear && this.currentValue && this.focus;
        },
        visibleStatus: function visibleStatus() {
            return this.visible && this.type === 'password';
        },
        errorState: function errorState() {
            return this.error && !this.focus;
        },
        nativeProps: function nativeProps() {
            var _this = this;

            var props = ['name', 'maxlength', 'minlength', 'disabled', 'autocomplete', 'autofocus', 'min', 'max', 'readonly'];
            var nativeProps = {};
            props.forEach(function (key) {
                if (_this.$props[key]) {
                    nativeProps[key] = _this.$props[key];
                }
            });
            return nativeProps;
        }
    },
    methods: {
        /**
         * 输入时触发
         * @event input／change
         * @param 输入值 value 
         */
        handleChange: function handleChange(evt) {
            this.focus = true;
            var value = evt.target.value;
            this.currentValue = value;
            this.$emit('input', value, evt);
            this.$emit('change', value, evt);
        },

        /**
         * 聚焦时触发
         * @event focus
         * @param 
         */
        handleFocus: function handleFocus() {
            this.focus = true;
            this.$emit('focus');
        },

        /**
         * 失焦时触发
         * @event blur
         * @param 
         */
        handleBlur: function handleBlur() {
            var _this2 = this;

            this.$emit('blur');
            //点击清除icon时会触发handleBlur，使this.focus为false,而无法触发handleClear，所以需要添加setTimeout
            this.timer = setTimeout(function () {
                _this2.focus = false;
            });
        },
        handleClear: function handleClear() {
            this.timer && clearTimeout(this.timer);
            this.currentValue = '';
            this.$refs.inputRef.focus();
        },
        handleVisible: function handleVisible() {
            this.canSee = !this.canSee;
            this.currentType = this.canSee ? 'text' : 'password';
        }
    },
    watch: {
        value: function value(val) {
            this.currentValue = val;
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.timer && clearTimeout(this.timer);
    },

    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'input'
         * */
        classPrefix: {
            type: String,
            default: 'input'
        },
        /**
         * input类型, 除checkbox和radio之外的原生input类型, 默认text
         * @property type
         * @type String
         * @default 'text'
         * */
        type: {
            type: String,
            default: 'text',
            validator: function validator(val) {
                return ['checkbox', 'radio'].indexOf(val) < 0;
            }
        },
        /**
         * 是否显示[清除已经输入的内容按钮]，仅适用于text,search,password的类型
         * @property clear
         * @type Boolean
         * @default false
         * */
        clear: Boolean,
        /**
         * 是否显示[密码是否可见按钮]，仅适用于password的类型
         * @property visible
         * @type Boolean
         * @default false
         * */
        visible: Boolean,
        /**
         * 是否错误
         * @property error
         * @type Boolean
         * @default false
         * */
        error: Boolean,
        /**
         * icon符号类型
         * @property phIcon
         * @type String
         * @default ''
         **/
        phIcon: {
            type: String,
            default: ''
        },
        /**
         * placeholder
         * @property placeholder
         * @type String
         * @default ''
         **/
        placeholder: String,
        /**
         * 是否禁用
         * @property disabled
         * @type Boolean
         * @default false
         **/
        disabled: Boolean,
        /**
         * 是否自动聚焦
         * @property autofocus
         * @type Boolean
         * @default false
         **/
        autofocus: Boolean,
        /**
         * 值
         * @property value
         * @type 
         * @default 
         **/
        value: null
    }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _toggle = __webpack_require__(13);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @class Dialog
 * @module 弹出类组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo dialog|dialog.vue
 * @show true
 */
exports.default = {
    name: 'SwDialog',
    extends: _Base2.default,
    mixins: [_toggle2.default],
    methods: {
        handleShadowClose: function handleShadowClose() {
            /**
             * 打开/关闭时触发
             * @event on-toggle
             * @param {Boolean} 组件打开/关闭状态
             */
            !this.shadowDisabled && this.handleToggle(false);
        }
    },
    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'dialog'
         * */
        classPrefix: {
            type: String,
            default: 'dialog'
        },
        /**
         * 右上角按钮是否可见, 默认不可见
         * @property closeButton
         * @type Boolean
         * */
        closeButton: {
            type: Boolean,
            default: false
        },
        /**
         * 阴影部分是否点击可关闭弹框
         * @property shadowDisabled
         * @type Boolean
         * */
        shadowDisabled: {
            type: Boolean,
            default: false
        },
        /**
         * 标题
         * @property title
         * @type String
         * */
        title: String
    }
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classUtil = __webpack_require__(3);

exports.default = {
    name: 'SwBase',
    computed: {
        styleProps: function styleProps() {
            return (0, _classUtil.getStyleProps)(this.$props);
        },
        classObject: function classObject() {
            return (0, _classUtil.getClassObject)(this.styleProps.classProps, this.$props.classPrefix);
        },
        styleObject: function styleObject() {
            return this.styleProps.styleObject;
        }
    }
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, "\n.dialog-fade-enter-active,dialog-fade-enter-active-fade-leave-active{\n    transition: opacity .5s\n}\n.dialog-fade-enter, .dialog-fade-leave-to {\n    opacity: 0\n}\n", ""]);

// exports


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "clearfix",
    class: _vm.classObject
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39cfdda0", esExports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classObject
  }, [_c('transition', {
    attrs: {
      "name": "dialog-fade"
    }
  }, [(_vm.visible) ? _c('div', {
    staticClass: "ph-dialog-shadow animated",
    on: {
      "click": _vm.handleShadowClose
    }
  }) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "dialog-fade"
    }
  }, [(_vm.visible) ? _c('div', {
    staticClass: "ph-dialog-main animated"
  }, [_c('div', {
    staticClass: "ph-dialog-content animated"
  }, [_c('a', {
    class: ['ph-dialog-close', _vm.closeButton ? 'show' : 'hide', 'gfs-icon icon-close'],
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.handleToggle(false)
      }
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "ph-dialog-title"
  }, [_vm._t("title", [_vm._v("\n                        " + _vm._s(_vm.title) + "\n                    ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "ph-dialog-body"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "ph-dialog-footer clearfix"
  }, [_vm._t("footer")], 2)])]) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73ca936c", esExports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.classObject, {
      'ph-input-heading': _vm.phIcon
    }]
  }, [_c('input', _vm._b({
    ref: "inputRef",
    attrs: {
      "type": _vm.currentType,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "input": _vm.handleChange,
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    }
  }, 'input', _vm.$attrs, false)), _vm._v(" "), _c('label', {
    class: ['ph-input-placeholder', {
      'ph-input-placeholder-hide': _vm.focus || _vm.currentValue
    }]
  }, [(_vm.phIcon) ? _c('sw-icon', {
    attrs: {
      "phIcon": _vm.phIcon
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "ph-input-placeholder-text"
  }, [_vm._v(_vm._s(_vm.placeholder))])], 1), _vm._v(" "), (_vm.visibleStatus) ? _c('sw-icon', {
    class: ['gfs-icon-visible', this.canSee ? 'gfs-icon-active' : ''],
    attrs: {
      "phIcon": this.canSee ? 'camera' : 'camera-fill'
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleVisible($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('sw-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.clearStatus),
      expression: "clearStatus"
    }],
    staticClass: "gfs-icon-close",
    attrs: {
      "phIcon": "fail-fill"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleClear($event)
      }
    }
  }), _vm._v(" "), (_vm.errorState) ? _c('sw-icon', {
    staticClass: "gfs-icon-error",
    attrs: {
      "phIcon": "tip-fill"
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f7d2dad6", esExports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("3bc88301", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73ca936c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dialog.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73ca936c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool = __webpack_require__(2);

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
        return getVal(['default', 'xlg', 'lg', 'md', 'sm', 'xs', 'cover', 'contain'], val);
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

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ff6df_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__ = __webpack_require__(8);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ff6df_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/icon/Icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d3ff6df", Component.options)
  } else {
    hotAPI.reload("data-v-3d3ff6df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Prompt_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Prompt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Prompt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5596a466_node_modules_vue_loader_lib_selector_type_template_index_0_Prompt_vue__ = __webpack_require__(127);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Prompt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5596a466_node_modules_vue_loader_lib_selector_type_template_index_0_Prompt_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/modal/Prompt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Prompt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5596a466", Component.options)
  } else {
    hotAPI.reload("data-v-5596a466", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwIcon',
    extends: _Base2.default,
    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'icon'
         * */
        classPrefix: {
            type: String,
            default: 'icon'
        },
        /**
         * icon符号类型
         * @property phIcon
         * @type String
         * @default ''
         **/
        phIcon: {
            type: String,
            default: ''
        },
        /**
         * 按钮颜色[primary、warning、danger、info、error、success], 默认primary
         * @property phStyle
         * @type Boolean
         * @default 'default'
         * */
        phStyle: {
            type: String,
            default: 'default'
        },
        /**
         * 按钮尺寸[xs、sm、md、lg、xlg], 默认为sm
         * @property phSize
         * @type String
         * @default 'sm'
         * */
        phSize: {
            type: String,
            default: 'sm'
        }
    }
}; //
//
//
//
//
//

/**
 * Icon 
 * - 参见 https://future-team.github.io/gfs-icons/index.html
 * @class Icon
 * @module 基础组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo icon|icon.vue
 * @show true
 */

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: ['gfs-icon', ( _obj = {
      'gfs-icon-loading': _vm.phIcon && _vm.phIcon.indexOf('loading') >= 0
    }, _obj[(_vm.classPrefix + "-" + _vm.phIcon)] = _vm.phIcon, _obj ), _vm.classObject]
  }, [_vm._t("default")], 2)
  var _obj;
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d3ff6df", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60c2633f_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__ = __webpack_require__(20);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60c2633f_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/button/Button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60c2633f", Component.options)
  } else {
    hotAPI.reload("data-v-60c2633f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Dialog = __webpack_require__(28);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ButtonGroup = __webpack_require__(25);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(27);

var _Input2 = _interopRequireDefault(_Input);

var _toggle = __webpack_require__(13);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwPrompt',
    mixins: [_toggle2.default],
    components: {
        SwButton: _Button2.default,
        SwButtonGroup: _ButtonGroup2.default,
        SwDialog: _Dialog2.default,
        SwInput: _Input2.default
    },
    data: function data() {
        return {
            inputValue: ' ',
            currentVisible: this.visible
        };
    },

    computed: {
        currentButtons: function currentButtons() {
            return this.buttons ? this.buttons : [{ text: '取消' }, { text: '确定', onHandle: this.handleConfirm }];
        },
        buttonsType: function buttonsType() {
            return this.currentButtons.length > 2;
        }
    },
    methods: {
        /**
        * 点击确定时触发
        * @event on-confirm
        * @param 输入值
        */
        handleConfirm: function handleConfirm() {
            this.$emit('on-confirm', this.inputValue);
        },
        handleClick: function handleClick(onHandle) {
            /**
             * 打开/关闭时触发
             * @event on-toggle
             * @param {Boolean} 组件打开/关闭状态
             */
            onHandle ? onHandle(this.inputValue) : this.handleToggle.bind(this.false);
        },
        handleInput: function handleInput(value) {
            this.inputValue = value;
        }
    },
    watch: {
        visible: function visible(val) {
            this.currentVisible = val;
        },
        currentVisible: function currentVisible(val) {
            this.inputValue = '';
            this.$emit('on-toggle', val);
        }
    },
    props: {
        /**
         * 标题
         * @property title
         * @type String
         * */
        title: String,
        /**
         * 内容
         * @property title
         * @type String
         * */
        content: null,
        /**
         * 尾部按钮
         * @property buttons
         * @type Array
         * */
        buttons: Array,
        /**
         * 右上角按钮是否可见, 默认不可见
         * @property closeButton
         * @type Boolean
         * */
        closeButton: Boolean,
        /**
         * 阴影部分是否点击可关闭弹框, 默认传了closeCallback之后可关闭
         * @property shadowDisabled
         * @type Boolean
         * */
        shadowDisabled: Boolean
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * slot
 * - title  标题
 * - footer 底部内容，比如按钮
 * - defalut 正文内容
 * @class Prompt
 * @module 弹出类组件
 * @Constructor
 * @since 1.0.0
 * @demo prompt|prompt.vue
 * @show true
 */

/***/ })

/******/ });
});