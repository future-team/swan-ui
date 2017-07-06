'use strict';

exports.__esModule = true;

var _Button = require('./Button.vue');

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