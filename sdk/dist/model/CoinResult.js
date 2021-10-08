"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseResult = _interopRequireDefault(require("./BaseResult"));

var _CoinResultAllOf = _interopRequireDefault(require("./CoinResultAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CoinResult model module.
 * @module model/CoinResult
 * @version 0.0.1
 */
var CoinResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinResult</code>.
   * @alias module:model/CoinResult
   * @implements module:model/BaseResult
   * @implements module:model/CoinResultAllOf
   */
  function CoinResult() {
    _classCallCheck(this, CoinResult);

    _BaseResult["default"].initialize(this);

    _CoinResultAllOf["default"].initialize(this);

    CoinResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoinResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoinResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinResult} obj Optional instance to populate.
     * @return {module:model/CoinResult} The populated <code>CoinResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinResult();

        _BaseResult["default"].constructFromObject(data, obj);

        _CoinResultAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('schedule_date')) {
          obj['schedule_date'] = _ApiClient["default"].convertToType(data['schedule_date'], 'Date');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CoinResult;
}();
/**
 * @member {String} id
 */


CoinResult.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

CoinResult.prototype['created_at'] = undefined;
/**
 * @member {Date} schedule_date
 */

CoinResult.prototype['schedule_date'] = undefined;
/**
 * @member {Array.<module:model/CoinResult.ValueEnum>} value
 */

CoinResult.prototype['value'] = undefined; // Implement BaseResult interface:

/**
 * @member {String} id
 */

_BaseResult["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_BaseResult["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} schedule_date
 */

_BaseResult["default"].prototype['schedule_date'] = undefined; // Implement CoinResultAllOf interface:

/**
 * @member {Array.<module:model/CoinResultAllOf.ValueEnum>} value
 */

_CoinResultAllOf["default"].prototype['value'] = undefined;
/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */

CoinResult['ValueEnum'] = {
  /**
   * value: "HEAD"
   * @const
   */
  "HEAD": "HEAD",

  /**
   * value: "TAIL"
   * @const
   */
  "TAIL": "TAIL"
};
var _default = CoinResult;
exports["default"] = _default;