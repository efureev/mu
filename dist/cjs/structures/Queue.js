"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Queue = void 0;

var _isFunction = _interopRequireDefault(require("../is/isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    _defineProperty(this, "data", []);
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(item) {
      this.data.push(item);
    }
  }, {
    key: "pull",
    value: function pull() {
      return !this.isEmpty() ? this.data.shift() : undefined;
    }
  }, {
    key: "peek",
    value: function peek() {
      return !this.isEmpty() ? this.data[0] : undefined;
    }
  }, {
    key: "size",
    value: function size() {
      return this.data.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.data.length === 0;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.data;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.data.length = 0;
    }
  }, {
    key: "toString",
    value: function toString(callback) {
      var data = this.toArray();

      if (callback && (0, _isFunction.default)(callback)) {
        return data.map(function (item) {
          return callback(item);
        }).toString();
      }

      return data.toString();
    }
  }]);

  return Queue;
}();

exports.Queue = Queue;

var _default = new Queue();

exports.default = _default;
//# sourceMappingURL=Queue.js.map