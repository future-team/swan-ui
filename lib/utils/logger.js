'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pmlogger = require('pmlogger');

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