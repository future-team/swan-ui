'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = require('../utils/constants');

var _constants2 = _interopRequireDefault(_constants);

var _property = require('../utils/property.config');

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