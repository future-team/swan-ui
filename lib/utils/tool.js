'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.warning = warning;
exports.getClientHeight = getClientHeight;
exports.getWindowScrollTop = getWindowScrollTop;
exports.getOffsetTop = getOffsetTop;
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

function getWindowScrollTop() {
    return window.pageYOffset ? window.pageYOffset : document.compatMode === 'BackCompat' ? document.body.scrollTop : document.documentElement.scrollTop;
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