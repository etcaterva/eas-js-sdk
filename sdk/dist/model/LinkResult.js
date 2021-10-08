"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseResult = _interopRequireDefault(require("./BaseResult"));

var _LinkResultAllOf = _interopRequireDefault(require("./LinkResultAllOf"));

var _LinkResultAllOfValue = _interopRequireDefault(require("./LinkResultAllOfValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LinkResult model module.
 * @module model/LinkResult
 * @version 0.0.1
 */
var LinkResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkResult</code>.
   * @alias module:model/LinkResult
   * @implements module:model/BaseResult
   * @implements module:model/LinkResultAllOf
   */
  function LinkResult() {
    _classCallCheck(this, LinkResult);

    _BaseResult["default"].initialize(this);

    _LinkResultAllOf["default"].initialize(this);

    LinkResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkResult} obj Optional instance to populate.
     * @return {module:model/LinkResult} The populated <code>LinkResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkResult();

        _BaseResult["default"].constructFromObject(data, obj);

        _LinkResultAllOf["default"].constructFromObject(data, obj);

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
          obj['value'] = _ApiClient["default"].convertToType(data['value'], [_LinkResultAllOfValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LinkResult;
}();
/**
 * @member {String} id
 */


LinkResult.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

LinkResult.prototype['created_at'] = undefined;
/**
 * @member {Date} schedule_date
 */

LinkResult.prototype['schedule_date'] = undefined;
/**
 * @member {Array.<module:model/LinkResultAllOfValue>} value
 */

LinkResult.prototype['value'] = undefined; // Implement BaseResult interface:

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

_BaseResult["default"].prototype['schedule_date'] = undefined; // Implement LinkResultAllOf interface:

/**
 * @member {Array.<module:model/LinkResultAllOfValue>} value
 */

_LinkResultAllOf["default"].prototype['value'] = undefined;
var _default = LinkResult;
exports["default"] = _default;