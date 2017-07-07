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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Base_vue__ = __webpack_require__(5);
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Button = __webpack_require__(21);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(22);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Badge = __webpack_require__(20);

var _Badge2 = _interopRequireDefault(_Badge);

var _Star = __webpack_require__(24);

var _Star2 = _interopRequireDefault(_Star);

var _Icon = __webpack_require__(23);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'phoenix-styles'

var components = [_Button2.default, _ButtonGroup2.default, _Badge2.default, _Star2.default, _Icon2.default];

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
    Button: _Button2.default,
    ButtonGroup: _ButtonGroup2.default,
    Badge: _Badge2.default,
    Star: _Star2.default,
    Icon: _Icon2.default
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwBadge',
    extends: _Base2.default,
    props: {
        classPrefix: {
            type: String,
            default: 'badge'
        },
        phStyle: {
            type: String,
            default: 'primary'
        },
        classMapping: {
            type: Object,
            default: function _default() {
                return {
                    'primary': 'primary',
                    'info': 'info',
                    'success': 'success',
                    'error': 'error',
                    'warning': 'warning',
                    'danger': 'danger'
                };
            }
        }
    }
}; //
//
//
//
//
//
//

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwBase',
    mixins: [_style2.default],
    props: ['id'],
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwButton',
    extends: _Base2.default,
    methods: {
        handleClick: function handleClick(evt) {
            this.$emit('click', this.id);
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwButtonGroup',
    extends: _Base2.default,
    props: {
        classPrefix: {
            type: String,
            default: 'button-group'
        },
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
//

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(14);

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'SwIcon',
    extends: _Base2.default,
    computed: {
        classList: function classList() {
            return (0, _classnames2.default)('gfs-icon', this.phIcon ? this.classPrefix + '-' + this.phIcon : '');
        }
    },
    props: {
        classPrefix: {
            type: String,
            default: 'icon'
        },
        phIcon: {
            type: String,
            default: ''
        },
        phStyle: {
            type: String,
            default: 'primary'
        },
        phSize: {
            type: String,
            default: 'sm'
        },
        classMapping: {
            type: Object,
            default: function _default() {
                return {
                    'primary': 'primary',
                    'info': 'info',
                    'success': 'success',
                    'error': 'error',
                    'warning': 'warning',
                    'danger': 'danger',
                    'link': 'link',
                    'gray': 'gray'
                };
            }
        }
    }
}; //
//
//
//
//
//

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Base = __webpack_require__(1);

var _Base2 = _interopRequireDefault(_Base);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
    name: 'SwStar',
    extends: _Base2.default,
    props: {
        classPrefix: {
            type: String,
            default: 'star'
        },
        rate: {
            type: [Number, String],
            default: 0,
            validator: function validator(val) {
                if (typeof val == 'string' && parseInt(val) != val) {
                    return false;
                }
                return true;
            }
        },
        phSize: {
            type: String,
            default: 'sm'
        }
    },
    computed: {
        classList: function classList() {
            var rateCls = 'star-' + Math.round(this.rate * 2 / 10) * 5;
            return (0, _classnames2.default)(this.classObject, this.setPhPrefix(rateCls));
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = __webpack_require__(11);

var _constants2 = _interopRequireDefault(_constants);

var _property = __webpack_require__(12);

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
        },

        setPhPrefix: function setPhPrefix(val) {
            return 'ph-' + val;
        }
    }
};

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tool = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b518881a_node_modules_vue_loader_lib_selector_type_template_index_0_Badge_vue__ = __webpack_require__(29);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b518881a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b518881a_node_modules_vue_loader_lib_selector_type_template_index_0_Badge_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Badge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Badge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b518881a", Component.options)
  } else {
    hotAPI.reload("data-v-b518881a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ed43edc_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ed43edc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ed43edc_node_modules_vue_loader_lib_selector_type_template_index_0_Button_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ed43edc", Component.options)
  } else {
    hotAPI.reload("data-v-3ed43edc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a8cefbd_node_modules_vue_loader_lib_selector_type_template_index_0_ButtonGroup_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a8cefbd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ButtonGroup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a8cefbd_node_modules_vue_loader_lib_selector_type_template_index_0_ButtonGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/ButtonGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ButtonGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a8cefbd", Component.options)
  } else {
    hotAPI.reload("data-v-2a8cefbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02f7674e_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02f7674e_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02f7674e", Component.options)
  } else {
    hotAPI.reload("data-v-02f7674e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Star_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Star_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78ee81b2_node_modules_vue_loader_lib_selector_type_template_index_0_Star_vue__ = __webpack_require__(28);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Star_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78ee81b2_node_modules_vue_loader_lib_selector_type_template_index_0_Star_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Star.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Star.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78ee81b2", Component.options)
  } else {
    hotAPI.reload("data-v-78ee81b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classList
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02f7674e", module.exports)
  }
}

/***/ }),
/* 26 */
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
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a8cefbd", module.exports)
  }
}

/***/ }),
/* 27 */
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
     require("vue-hot-reload-api").rerender("data-v-3ed43edc", module.exports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classList
  }, [_c('div', {
    class: _vm.setPhPrefix('star-grey')
  })])
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78ee81b2", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classObject,
    style: (_vm.styleObject)
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b518881a", module.exports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});
//# sourceMappingURL=swan-ui.js.map