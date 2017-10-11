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
/******/ 	return __webpack_require__(__webpack_require__.s = 179);
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

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(undefined);
// imports


// module
exports.push([module.i, "\n.ph-popover-main[data-v-0adf58ea]{\n    padding: 0;\n}\n.ph-popover-right .ph-popover-main[data-v-0adf58ea] {\n     margin-left:0;\n}\n.ph-popover-content[data-v-0adf58ea]{\n    min-width: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "position": "relative",
      "display": "inline-block"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }]
  }, [_c('div', {
    class: ("ph-popover ph-popover-" + _vm.currentPlacement + " show")
  }, [_c('div', {
    ref: "arrowElem",
    staticClass: "ph-popover-arrow",
    style: (_vm.position.arrowPosition)
  }), _vm._v(" "), _c('div', {
    ref: "contentElem",
    staticClass: "ph-popover-main",
    style: (_vm.position.contentPosition)
  }, [_c('div', {
    staticClass: "ph-popover-content"
  }, [_vm._t("content", [_c('div', {
    staticClass: "ph-popover-text"
  }, [_vm._v(_vm._s(_vm.content))])])], 2)])])]), _vm._v(" "), _c('div', {
    ref: "targetElem",
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0adf58ea", esExports)
  }
}

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("02f02f72", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0adf58ea\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0adf58ea\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pmlogger = __webpack_require__(6);

var _pmlogger2 = _interopRequireDefault(_pmlogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var opt = {};
opt.id = '84344732';
opt.url = 'http://future.sankuai.com/monitor/logstore/log/';
opt.repeat = 1;
opt.combo = true;
opt.delay = 1000;
var pmlogger = null;

if (!pmlogger) {
    pmlogger = new _pmlogger2.default(opt);
}

var PmLogger = function PmLogger(msg) {
    _classCallCheck(this, PmLogger);

    try {
        pmlogger.info({
            msg: msg,
            type: 8
        });
    } catch (err) {
        pmlogger.error({
            msg: err.toString(),
            type: 2
        });
    }
};

exports.default = PmLogger;

/***/ }),

/***/ 20:
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

/***/ 21:
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

var listToStyles = __webpack_require__(26)

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

/***/ 26:
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

/***/ 3:
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = (function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    //获取dom节点坐标

    Helper.getPosition = function getPosition(e) {
        var opts = {
            x: e.clientX,
            y: e.clientY
        };
        if (e.target && e.target.nodeType === 1) {
            opts.type = e.target.nodeName;
            opts.id = e.target.id;
            opts.classname = e.target.className;
        }

        return opts;
    };

    //获取当前时间

    Helper.getNowDateTime = function getNowDateTime() {

        //return yyyy-mm-dd 12:12:00
        var date = new Date();
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };

    //获取页面信息

    Helper.getPageInfo = function getPageInfo() {
        var title = document.getElementsByTagName('title'),
            opts = {};
        if (title && title.length >= 1) {
            opts.title = title[0].innerHTML;
        }
        opts.url = window.location.href;
        return opts;
    };

    //获取浏览器信息

    Helper.getBrowserInfo = function getBrowserInfo() {
        //浏览器
        var uc = navigator,
            opts = {};
        opts.userAgent = uc.userAgent;
        return opts;
    };

    //添加事件

    Helper.addEvent = function addEvent(element, e, fn) {

        if (element.addEventListener) {
            element.addEventListener(e, fn, false);
        }
        //ie使用attachEvent，来添加事件
        else {
                element.attachEvent("on" + e, fn);
            }
    };

    return Helper;
})();

exports["default"] = Helper;
module.exports = exports["default"];

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _logger = __webpack_require__(7);

var _logger2 = _interopRequireDefault(_logger);

exports['default'] = _logger2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _extend = __webpack_require__(4);

var _extend2 = _interopRequireDefault(_extend);

var _helper = __webpack_require__(5);

var _helper2 = _interopRequireDefault(_helper);

var isBindError = false;

var Logger = (function () {
    function Logger() {
        var _this = this,
            _arguments = arguments;

        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Logger);

        this.config = _extend2['default']({
            //id,没有id是不上报的
            id: '',
            //上报地址
            url: 'http://future.sankuai.com/monitor/logstore/log/',
            //合并上报
            combo: false,
            //当 combo 为 true 可用，延迟多少毫秒，合并缓冲区中的上报（默认）
            delay: '',
            //抽样上报
            random: 1,
            //重复上报次数
            repeat: 10,
            //错误级别 1-debug 2-info 4-error
            level: 4,
            onReport: function onReport(id, errObj) {},
            submit: null

        }, config);

        this.errors = [];
        this.errorMap = {};
        this.errorList = [];
        this.imgs = [];
        this.comboTimeout = null;
        var orgError = window.onerror;

        this.types = ['jsError', 'globalError', 'catchError', 'ajaxError', '404', '500', 'cssError', 'htmlError', 'component', 'install', 'info'];

        var id = parseInt(this.config.id, 10);
        if (id) {
            this.config.report = (this.config.url || "") + "?applyId=" + id +
            // "&from=" + encodeURIComponent(location.href) +
            "&";
        }
        // if had error in cache , report now
        if (this.errors.length) {
            this.send();
        }

        this.dom = {};
        if (!isBindError) {
            window.onerror = function () {
                _this.onerror.apply(_this, _arguments);
                orgError && orgError.apply(window, _arguments);
            };
            _helper2['default'].addEvent(document.body, 'mousedown', function (e) {
                var target = e.target;
                if (target.nodeType === 1) {
                    _this.dom = _helper2['default'].getPosition(e);
                }
            });
        }
    }

    Logger.prototype.info = function info(msg) {
        if (!msg) {
            return this;
        }
        if (this.isObject(msg)) {
            msg.level = 2;
            if (!msg.type) msg.type = 10;
        } else {
            msg = {
                msg: msg,
                level: 2,
                type: 10
            };
        }
        this.pushMessage(msg);
        return this;
    };

    Logger.prototype.log = function log(msg) {
        return this.info(msg);
    };

    Logger.prototype.debug = function debug(msg) {
        if (!msg) {
            return this;
        }
        if (this.isObject(msg)) {
            msg.level = 1;
        } else {
            msg = {
                msg: msg,
                level: 1
            };
        }
        this.pushMessage(msg);
        return this;
    };

    Logger.prototype.error = function error(msg) {
        if (!msg) {
            return this;
        }
        if (this.isObject(msg)) {
            msg.level = 4;
        } else {
            msg = {
                msg: msg,
                level: 4
            };
        }
        this.pushMessage(msg);
        return this;
    };

    Logger.prototype.report = function report(msg) {
        msg && this.pushMessage(msg);
        this.send(true);
        return this;
    };

    Logger.prototype.errorTostring = function errorTostring(error, index) {
        var param = [];
        var params = [];
        var stringify = [];
        if (this.isObject(error)) {
            error.level = error.level || this.config.level;
            for (var key in error) {
                var value = error[key];
                if (!this.isEmpty(value)) {
                    if (this.isObject(value)) {
                        try {
                            value = JSON.stringify(value);
                        } catch (err) {
                            value = "[mslogger detect value stringify error] " + err.toString();
                        }
                    }
                    stringify.push(key + ":" + value);
                    param.push(key + "=" + encodeURIComponent(value));
                    params.push(key + "[" + index + "]=" + encodeURIComponent(value));
                }
            }
        }

        // msg[0]=msg&target[0]=target -- combo report
        // msg:msg,target:target -- ignore
        // msg=msg&target=target -- report with out combo
        return [params.join("&"), stringify.join(","), param.join("&")];
    };

    Logger.prototype.submit = function submit(url) {
        if (this.config.submit) {
            this.config.submit(url);
        } else {
            var img = new Image();
            this.imgs.push(img);
            img.src = url;
        }
    };

    Logger.prototype.send = function send(isReoprtNow) {
        var _this2 = this;

        if (!this.config.report) return;
        while (this.errors.length) {
            var error = this.errors.shift();
            // 重复上报
            if (this.isRepert(error)) continue;
            var errorStr = this.errorTostring(error, this.errorList.length);

            if (this.config.combo) {
                this.errorList.push(errorStr[0]);
            } else {
                this.submit(this.config.report + errorStr[2] + "&t=" + +new Date());
            }
            this.config.onReport && this.config.onReport(this.config.id, error);
        }

        // 合并上报
        var count = this.errorList.length;
        if (count) {
            var comboReport = function comboReport() {
                clearTimeout(_this2.comboTimeout);
                _this2.submit(_this2.config.report + _this2.errorList.join("&") + "&count=" + _this2.errorList.length + "&t=" + +new Date());
                _this2.comboTimeout = 0;
                _this2.errorList = [];
            };

            if (isReoprtNow) {
                comboReport(); // 立即上报
            } else if (!this.comboTimeout) {
                    this.comboTimeout = setTimeout(comboReport, this.config.delay); // 延迟上报
                }
        }
    };

    Logger.prototype.isRepert = function isRepert(error) {
        if (!this.isObject(error)) return true;
        var msg = error.msg;
        var times = this.errorMap[msg] = (parseInt(this.errorMap[msg], 10) || 0) + 1;
        return times > this.config.repeat;
    };

    Logger.prototype.isObject = function isObject(obj) {
        var type = typeof obj;
        return type === "object" && !!obj;
    };

    Logger.prototype.isEmpty = function isEmpty(obj) {
        if (obj === null) return true;
        if (this.isOBJByType(obj, "Number")) {
            return false;
        }
        return !obj;
    };

    Logger.prototype.processError = function processError(errObj) {
        try {
            if (errObj.stack) {
                var url = errObj.stack.match("https?://[^\n]+");
                url = url ? url[0] : "";
                var rowCols = url.match(":(\\d+):(\\d+)");
                if (!rowCols) {
                    rowCols = [0, 0, 0];
                }

                var stack = this.processStackMsg(errObj);
                return {
                    msg: stack,
                    rowNum: rowCols[1],
                    colNum: rowCols[2],
                    target: url.replace(rowCols[0], "")
                };
            } else {
                //ie 独有 error 对象信息，try-catch 捕获到错误信息传过来，造成没有msg
                if (errObj.name && errObj.message && errObj.description) {
                    return {
                        msg: JSON.stringify(errObj)
                    };
                }
                return errObj;
            }
        } catch (err) {
            return errObj;
        }
    };

    Logger.prototype.pushMessage = function pushMessage(msg) {
        // 抽样
        if (Math.random() >= this.config.random) {
            return this;
        }

        var data = this.isObject(msg) ? this.processError(msg) : {
            msg: msg
        };
        // 在错误发生时获取页面链接
        if (!data.from) {
            data.from = location.href;
        }
        if (typeof data.type === 'undefined') {
            data.type = this.types[0];
        } else if (isNaN(data.type)) {
            console.error('为正确传入type值，type值只能为int类型');
            return this;
        }

        data.type = this.types[data.type];
        this.errors.push(_extend2['default'](data, {
            title: encodeURIComponent(_helper2['default'].getPageInfo().title || ''),
            domId: this.dom.id,
            domType: this.dom.type,
            domClass: this.dom.className,
            domX: this.dom.x,
            domY: this.dom.y
        }));
        this.dom = {};
        this.send();
        return this;
    };

    Logger.prototype.isOBJByType = function isOBJByType(o, type) {
        return Object.prototype.toString.call(o) === "[object " + (type || "Object") + "]";
    };

    Logger.prototype.processStackMsg = function processStackMsg(error) {
        var stack = error.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, "");

        var msg = error.toString();
        if (stack.indexOf(msg) < 0) {
            stack = msg + "@" + stack;
        }
        return stack;
    };

    Logger.prototype.onerror = function onerror(msg, url, line, col, error) {
        isBindError = true;
        var newMsg = msg;

        if (error && error.stack) {
            newMsg = this.processStackMsg(error);
        }

        if (this.isOBJByType(newMsg, "Event")) {
            newMsg += newMsg.type ? "--" + newMsg.type + "--" + (newMsg.target ? newMsg.target.tagName + "::" + newMsg.target.src : "") : "";
        }

        this.pushMessage({
            msg: newMsg,
            target: url,
            rowNum: line,
            colNum: col,
            type: 1 //this.types[1]
        });

        this.send();
    };

    return Logger;
})();

exports['default'] = Logger;
module.exports = exports['default'];

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popover_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0adf58ea_node_modules_vue_loader_lib_selector_type_template_index_0_Popover_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0adf58ea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popover_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0adf58ea_node_modules_vue_loader_lib_selector_type_template_index_0_Popover_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/popover/Popover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0adf58ea", Component.options)
  } else {
    hotAPI.reload("data-v-0adf58ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool = __webpack_require__(3);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

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

/**
 * 气泡
 * @class Popover
 * @module 弹出类组件
 * @Constructor
 * @since 1.0.0
 * @demo popover|popover.vue
 * @show true
 */
exports.default = {
    name: 'SwPopover',
    data: function data() {
        return {
            position: {},
            visible: false,
            currentPlacement: this.placement,
            flag: false
        };
    },
    created: function created() {
        new _logger2.default('Popover');
    },

    methods: {
        init: function init() {
            this.targetElem = this.$refs.targetElem;
            this.clientHeight = (0, _tool.getClientHeight)();
            this.clientWidth = (0, _tool.getClientWidth)();
            this.targetStyle = {
                width: this.targetElem.clientWidth,
                height: this.targetElem.clientHeight,
                offsetTop: (0, _tool.getOffset)(this.targetElem).offsetTop
                // document.addEventListener('click', this.handleDocumentClick)
            };
        },
        handleClick: function handleClick() {
            this.visible = !this.visible;
        },
        handleDocumentClick: function handleDocumentClick(evt) {
            if (evt.target === this.targetElem.firstElementChild) {
                return;
            }
            this.visible = false;
        },
        computedStyle: function computedStyle() {
            if (!this.flag) {
                this.flag = true;
                this.contentElem = this.$refs.contentElem;
                this.arrowElem = this.$refs.arrowElem;

                this.contentStyle = {
                    width: this.contentElem.clientWidth,
                    height: this.contentElem.clientHeight,
                    offsetTop: (0, _tool.getOffset)(this.contentElem).offsetTop,
                    offsetLeft: (0, _tool.getOffset)(this.contentElem).offsetLeft
                };

                this.arrowStyle = {
                    width: this.arrowElem.clientWidth,
                    height: this.arrowElem.clientHeight,
                    offsetTop: (0, _tool.getOffset)(this.arrowElem).offsetTop
                };

                this.contentElem.style.width = this.contentStyle.width + 'px';
                this.contentElem.style.height = this.contentStyle.height + 'px';
            }
        },
        computePosition: function computePosition(placement) {
            var _this = this;

            this.currentPlacement = placement;
            this.$nextTick(function () {
                var arrowPosition = {};
                var contentPosition = {};
                var bodyScrollTop = (0, _tool.getWindowScrollTop)();
                var bodyScrollLeft = (0, _tool.getWindowScrollLeft)();
                _this.computedStyle();
                switch (placement) {
                    case 'bottom':
                        arrowPosition = {
                            top: _this.targetStyle.height + _this.distance,
                            left: _this.targetStyle.width / 2
                        };
                        contentPosition = {
                            top: _this.targetStyle.height + _this.distance + _this.arrowStyle.height / 2,
                            left: 0
                        };
                        if (_this.clientHeight + bodyScrollTop <= _this.contentStyle.offsetTop + _this.contentStyle.height + contentPosition.top) {
                            _this.computePosition('top');
                        }
                        break;
                    case 'top':
                        arrowPosition = {
                            top: -_this.distance,
                            left: _this.targetStyle.width / 2
                        };
                        contentPosition = {
                            top: -_this.contentStyle.height - _this.distance - _this.arrowStyle.height / 2,
                            left: 0
                        };
                        if (_this.contentStyle.offsetTop + contentPosition.top <= bodyScrollTop) {
                            _this.computePosition('bottom');
                        }
                        break;
                    case 'left':
                        arrowPosition = {
                            top: _this.targetStyle.height / 2,
                            left: -_this.distance
                        };
                        contentPosition = {
                            top: -(_this.contentStyle.height - _this.targetStyle.height) / 2,
                            left: -(_this.contentStyle.width + _this.arrowStyle.width + _this.distance)
                        };
                        if (_this.contentStyle.offsetLeft + contentPosition.left <= bodyScrollLeft) {
                            _this.computePosition('right');
                        }

                        break;
                    case 'right':
                        arrowPosition = {
                            top: _this.targetStyle.height / 2,
                            left: _this.targetStyle.width + _this.arrowStyle.width / 2 + _this.distance
                        };
                        contentPosition = {
                            top: -(_this.contentStyle.height - _this.targetStyle.height) / 2,
                            left: _this.targetStyle.width + _this.arrowStyle.width + _this.distance
                        };
                        if (_this.clientWidth + bodyScrollLeft <= _this.contentStyle.offsetLeft + _this.contentStyle.width + contentPosition.left) {
                            _this.computePosition('left');
                        }
                        break;
                    default:
                        arrowPosition = {};
                }
                _this.position = {
                    arrowPosition: {
                        top: arrowPosition.top + 'px',
                        left: arrowPosition.left + 'px'
                    },
                    contentPosition: {
                        top: contentPosition.top + 'px',
                        left: contentPosition.left + 'px'
                    }
                };
            });
        }
    },
    watch: {
        visible: function visible(val) {
            val && this.computePosition(this.placement);
        }
    },
    mounted: function mounted() {
        this.init();
    },
    destroyed: function destroyed() {
        // document.removeEventListener('click', this.handleDocumentClick)
    },

    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'popover'
         * */
        classPrefix: {
            type: String,
            default: 'popover'
        },
        /**
         * 气泡的位置
         * @property placement
         * @type String
         * @default 'bottom'
         * */
        placement: {
            type: String,
            default: 'bottom'
        },
        /**
         * 气泡距离点击物的距离
         * @property distance
         * @type Number
         * @default 5
         * */
        distance: {
            type: Number,
            default: 5
        },
        /**
         * 提示信息
         * @property content
         * @type String
         * @default ''
         * */
        content: {
            type: String,
            default: ''
        }
    }
};

/***/ })

/******/ });
});