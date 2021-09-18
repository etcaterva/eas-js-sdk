"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseObject = _interopRequireDefault(require("./BaseObject"));

var _BaseResultAllOf = _interopRequireDefault(require("./BaseResultAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseResult model module.
 * @module model/BaseResult
 * @version 0.0.1
 */
var BaseResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseResult</code>.
   * @alias module:model/BaseResult
   * @implements module:model/BaseObject
   * @implements module:model/BaseResultAllOf
   */
  function BaseResult() {
    _classCallCheck(this, BaseResult);

    _BaseObject["default"].initialize(this);

    _BaseResultAllOf["default"].initialize(this);

    BaseResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseResult} obj Optional instance to populate.
     * @return {module:model/BaseResult} The populated <code>BaseResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseResult();

        _BaseObject["default"].constructFromObject(data, obj);

        _BaseResultAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('schedule_date')) {
          obj['schedule_date'] = _ApiClient["default"].convertToType(data['schedule_date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return BaseResult;
}();
/**
 * @member {String} id
 */


BaseResult.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

BaseResult.prototype['created_at'] = undefined;
/**
 * @member {Date} schedule_date
 */

BaseResult.prototype['schedule_date'] = undefined; // Implement BaseObject interface:

/**
 * @member {String} id
 */

_BaseObject["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_BaseObject["default"].prototype['created_at'] = undefined; // Implement BaseResultAllOf interface:

/**
 * @member {Date} schedule_date
 */

_BaseResultAllOf["default"].prototype['schedule_date'] = undefined;
var _default = BaseResult;
exports["default"] = _default;