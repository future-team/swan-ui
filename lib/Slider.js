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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.classObject, {
      'ph-keep-range': _vm.showRange
    }]
  }, [(_vm.showTipMode) ? _c('div', {
    staticClass: "ph-slider-text"
  }, [_vm._v(_vm._s(_vm.currentProgress))]) : _vm._e(), _vm._v(" "), (_vm.showRange) ? _c('div', {
    staticClass: "ph-slider-range"
  }, [_c('strong', {
    staticClass: "ph-slider-range-start"
  }, [_vm._v(_vm._s(_vm.range[0]))]), _vm._v(" "), _c('strong', {
    staticClass: "ph-slider-range-end"
  }, [_vm._v(_vm._s(_vm.range[1]))])]) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "sliderLine",
    staticClass: "ph-slider-line"
  }, [_c('div', {
    ref: "sliderProgress",
    staticClass: "ph-slider-progress"
  }), _vm._v(" "), _c('div', {
    ref: "sliderBtn",
    staticClass: "ph-slider-content"
  }, [_c('div', {
    class: ['ph-slider-tip', _vm.tipVisible && !_vm.showTipMode ? 'show' : 'hide']
  }, [_vm._v(_vm._s(_vm.currentProgress))]), _vm._v(" "), _c('sw-drag', {
    staticClass: "ph-slider-btn",
    on: {
      "drag": _vm.handleDrag,
      "drop": _vm.handleDrop
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64513f42", esExports)
  }
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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f66c3bf_node_modules_vue_loader_lib_selector_type_template_index_0_Drag_vue__ = __webpack_require__(41);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f66c3bf_node_modules_vue_loader_lib_selector_type_template_index_0_Drag_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/drag/Drag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Drag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f66c3bf", Component.options)
  } else {
    hotAPI.reload("data-v-2f66c3bf", Component.options)
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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
 * 拖拽组件  
 * - 要在移动端查看效果： https://future-team.github.io/swan-ui/examples/index.html#/drag
 *
 * 示例:
 * ```code
 *     <sw-drag @drag="handleDrag" @drop="handleDrop">
 *          <div class="drag-demo">拖我出去</div>
 *     </sw-drag>
 * ```
 * ```code
 *  handleDrag(position){
 *       let prePosition = position.start
 *       let nowPosition = position.move
 *
 *       this.distanceX = this.preDistanceX + nowPosition.x - prePosition.x
 *       this.distanceY = this.preDistanceY + nowPosition.y - prePosition.y
 *
 *       this.setBoxPosition(this.distanceX,this.distanceY)
 *   },
 *   handleDrop(){
 *       this.preDistanceX = this.distanceX
 *       this.preDistanceY = this.distanceY
 *   }
 * ```
 *
 * @class Drag
 * @module 辅助组件
 * @Constructor
 * @since 0.0.1
 * @demo drag|drag.vue
 * @show true
 * */
exports.default = {
    name: 'SwDrag',
    data: function data() {
        return {
            position: {},
            isMouseDown: false
        };
    },

    methods: {
        /**
        * 拖动时时触发
        * @event drag
        * @param 位置 position
        */
        handleTouchStart: function handleTouchStart(evt) {
            this.position.start = { x: evt.touches[0].pageX, y: evt.touches[0].pageY };
            this.position.move = this.position.start;
            this.$emit('drag', this.position, evt);
            this.$emit('drag-start', this.position, evt);
        },
        handleTouchMove: function handleTouchMove(evt) {
            this.position.move = { x: evt.touches[0].pageX, y: evt.touches[0].pageY };
            this.$emit('drag', this.position, evt);
        },

        /**
        * 松开时触发
        * @event drop
        * @param 位置 position
        */
        handleTouchEnd: function handleTouchEnd(evt) {
            this.position.end = { x: evt.changedTouches[0].pageX, y: evt.changedTouches[0].pageY };
            this.position.start = this.position.move;
            this.$emit('drop', this.position, evt);
        },
        handleTouchCancel: function handleTouchCancel() {
            // 触屏取消:忽然来电话等情况
        }
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ph-drag-action",
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.handleTouchStart($event)
      },
      "touchmove": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.handleTouchMove($event)
      },
      "touchend": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.handleTouchEnd($event)
      },
      "touchcancel": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.handleTouchCancel($event)
      }
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f66c3bf", esExports)
  }
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64513f42_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__ = __webpack_require__(130);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64513f42_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/slider/Slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64513f42", Component.options)
  } else {
    hotAPI.reload("data-v-64513f42", Component.options)
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

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _Drag = __webpack_require__(26);

var _Drag2 = _interopRequireDefault(_Drag);

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

/**
 * 滑动输入条组件
 * - 需要在移动端查看效果：https://future-team.github.io/swan-ui/examples/index.html#/slider
 * @class Slider
 * @module 操作类组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo slider|slider.vue
 * @show true
 */
exports.default = {
    name: 'SwSlider',
    extends: _Base2.default,
    components: { SwDrag: _Drag2.default },
    data: function data() {
        return {
            showTipMode: this.tipMode === 'default',
            currentProgress: this.progress || this.range[0],
            tipVisible: this.tipStay || false
        };
    },

    methods: {
        handleDrag: function handleDrag(position) {
            var newProgress = void 0,
                nowSec = void 0;

            this.preX = position.start.x;
            this.X = position.move.x;
            this.distance = this.X - this.preX;

            this.prevProgressWidth = this.newProgressWidth + this.distance;

            if (this.prevProgressWidth <= 0) this.prevProgressWidth = 0;
            if (this.prevProgressWidth >= this.sliderLength) this.prevProgressWidth = this.sliderLength;
            nowSec = Math.round(this.prevProgressWidth / this.eachSection, 0);
            this.prevProgressWidth = this.eachSection * nowSec;

            newProgress = this.prevProgressWidth / this.sliderLength * this.rangeDiff + this.range[0];

            this.setSliderPosition(this.prevProgressWidth + 'px');

            this.tipVisible = true;
            this.currentProgress = parseInt(newProgress);
        },

        /**
        * 松开时触发
        * @event slide-end
        * @param 当前值 currentProgress
        */
        handleDrop: function handleDrop() {
            if (!this.tipStay) {
                this.tipVisible = false;
            }
            this.newProgressWidth = this.prevProgressWidth;
            this.$emit('slide-end', this.currentProgress);
        },
        getNewProgressWidth: function getNewProgressWidth(currentProgress) {
            // 保留2位小数
            return this.sliderLength * (Math.round((currentProgress - this.range[0]) / this.rangeDiff * 100) / 100);
        },
        setSliderPosition: function setSliderPosition(distance) {
            this.$refs.sliderProgress.style.width = distance;
            this.$refs.sliderBtn.style.left = distance;
        }
    },
    computed: {
        rangeDiff: function rangeDiff() {
            return this.range[1] - this.range[0];
        }
    },
    mounted: function mounted() {
        this.sliderLength = parseInt(this.$refs.sliderLine.offsetWidth);
        this.eachSection = this.sliderLength / this.rangeDiff * this.duration;
        this.newProgressWidth = this.getNewProgressWidth(this.currentProgress);
        this.setSliderPosition(this.newProgressWidth + 'px');
    },

    watch: {
        progress: function progress(val) {
            this.currentProgress = val;
            this.newProgressWidth = this.getNewProgressWidth(val);
            this.setSliderPosition(this.newProgressWidth + 'px');
        }
    },
    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'slider'
         * */
        classPrefix: {
            type: String,
            default: 'slider'
        },
        /**
         * 初始进度
         * @property progress
         * @type Number
         * @default 0
         * */
        progress: {
            type: Number,
            default: 0
        },
        /**
         * 进度提示的位置
         * @property placement
         * @type String
         * @default 'top'
         * */
        placement: {
            type: String,
            default: 'top'
        },
        /**
         * 范围，可传固定范围的数组如：[25,50]
         * @property range
         * @type Array
         * @default [0,100]
         * */
        range: {
            type: Array,
            default: function _default() {
                return [0, 100];
            },
            validator: function validator(val) {
                return val.length === 2 && val[0] <= val[1];
            }
        },
        /**
         * 是否在进度条前后显示范围
         * @property showRange
         * @type Boolean
         * @default false
         * */
        showRange: {
            type: Boolean,
            default: false
        },
        /**
         * 显示提示的模式，可选[default,tooltip]
         * @property tipMode
         * @type String
         * @default 'default'
         * */
        tipMode: {
            type: String,
            default: 'default'
        },
        /**
         * 每次移动的固定距离
         * @property duration
         * @type Number
         * @default 1
         * */
        duration: {
            type: Number,
            default: 1
        },
        /**
         * 初始及松开按钮时是否显示tooltip
         * @property tipStay
         * @type Boolean
         * @default false
         * */
        tipStay: {
            type: Boolean,
            default: false
        },
        /**
         * 进度条是否只读
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled: Boolean,
        classMapping: {
            type: Object,
            default: function _default() {
                return {
                    'disabled': 'disabled',
                    'top': 'tip-top',
                    'bottom': 'tip-bottom'
                };
            }
        }

    }
};

/***/ })

/******/ });
});