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
/******/ 	return __webpack_require__(__webpack_require__.s = 512);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classUtil = __webpack_require__(9);

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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool = __webpack_require__(4);

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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swipe_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swipe_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swipe_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f01ec516_node_modules_vue_loader_lib_selector_type_template_index_0_Swipe_vue__ = __webpack_require__(233);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swipe_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f01ec516_node_modules_vue_loader_lib_selector_type_template_index_0_Swipe_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/swipe/Swipe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Swipe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f01ec516", Component.options)
  } else {
    hotAPI.reload("data-v-f01ec516", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ff6df_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__ = __webpack_require__(22);
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _Drag = __webpack_require__(52);

var _Drag2 = _interopRequireDefault(_Drag);

var _Button = __webpack_require__(23);

var _Button2 = _interopRequireDefault(_Button);

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
//

/**
 * 左滑组件
 *
 * 需要在移动端查看效果 点击：https://future-team.github.io/swan-ui/examples/index.html#/swipe
 * @class Swipe
 * @module 操作类组件
 * @extends Base
 * @Constructor
 * @since 1.0.0
 * @demo swipe|swipe.vue
 * @show true
 */
exports.default = {
    name: 'SwSwipe',
    extends: _Base2.default,
    components: {
        SwButton: _Button2.default,
        SwDrag: _Drag2.default
    },
    data: function data() {
        return {
            btnsWidth: 0,
            translateX: 0,
            preTranslateX: 0,
            distance: 0
        };
    },
    created: function created() {
        new _logger2.default('Swipe');
    },

    methods: {
        handleDrag: function handleDrag(position, evt) {
            if (!this.btnsWidth) return;
            this.translateX = this.preTranslateX + position.move.x - position.start.x;

            if (this.translateX >= 0) {
                this.translateX = 0;
            }
            if (this.translateX <= -this.btnsWidth) {
                this.translateX = -this.btnsWidth;
            }
            this.distance = position.move.x - position.start.x; //<0：左刷  >0: 右刷
            this.setSwipePosition(evt.currentTarget, this.translateX);
        },
        handleDrop: function handleDrop(position, evt) {
            if (!this.btnsWidth) return;
            if (Math.abs(this.distance) < this.btnsWidth / 3) {
                //未滑过按钮的三分之一，则保持不变
                this.translateX = this.distance <= 0 ? 0 : -this.btnsWidth;
            } else {
                this.translateX = this.distance <= 0 ? -this.btnsWidth : 0;
            }
            this.preTranslateX = this.translateX;
            this.setSwipePosition(evt.currentTarget, this.translateX);
        },
        handleClick: function handleClick(onHandle) {
            onHandle && onHandle();
            this.setSwipeBack();
        },
        setSwipeBack: function setSwipeBack() {
            this.dragActionRef.style.transform = 'translateX(0)';
        },
        setSwipePosition: function setSwipePosition(target, translateX) {
            target.style.transform = 'translateX(' + translateX + 'px)';
            target.style.webkitTransform = 'translateX(' + translateX + 'px)';
        }
    },
    mounted: function mounted() {
        this.btnsWidth = this.$refs.buttons.offsetWidth;
        this.dragActionRef = this.$refs.swipeDrag;
    },

    props: {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'swipe'
         * */
        classPrefix: {
            type: String,
            default: 'swipe'
        },
        /**
         * 按钮组
         * @property buttons
         * @type Array
         * */
        buttons: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pmlogger = __webpack_require__(7);

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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
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
exports.default = {
    name: 'SwIcon',
    extends: _Base2.default,
    created: function created() {
        new _logger2.default('Icon');
    },

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
};

/***/ }),

/***/ 22:
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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60c2633f_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__ = __webpack_require__(40);
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classObject
  }, [_c('sw-drag', {
    ref: "swipeDrag",
    staticClass: "ph-swipe-content",
    on: {
      "drag": _vm.handleDrag,
      "drop": _vm.handleDrop
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    ref: "buttons",
    staticClass: "ph-swipe-btns"
  }, _vm._l((_vm.buttons), function(button) {
    return _c('sw-button', _vm._b({
      key: button.text,
      attrs: {
        "phStyle": button.phStyle
      },
      on: {
        "click": function($event) {
          _vm.handleClick(button.onHandle)
        }
      }
    }, 'sw-button', button.otherProps, false), [_vm._v("\n            " + _vm._s(button.text) + "\n        ")])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f01ec516", esExports)
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _Icon = __webpack_require__(15);

var _Icon2 = _interopRequireDefault(_Icon);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  created: function created() {
    new _logger2.default('Button');
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

/***/ }),

/***/ 4:
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

/***/ 40:
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

/***/ 5:
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

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f66c3bf_node_modules_vue_loader_lib_selector_type_template_index_0_Drag_vue__ = __webpack_require__(88);
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

/***/ 6:
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _logger = __webpack_require__(8);

var _logger2 = _interopRequireDefault(_logger);

exports['default'] = _logger2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _extend = __webpack_require__(5);

var _extend2 = _interopRequireDefault(_extend);

var _helper = __webpack_require__(6);

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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwDrag',
    data: function data() {
        return {
            position: {},
            isMouseDown: false
        };
    },
    created: function created() {
        new _logger2.default('Drag');
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

/***/ }),

/***/ 88:
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

/***/ 9:
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

var _propertyConfig = __webpack_require__(11);

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

/***/ })

/******/ });
});