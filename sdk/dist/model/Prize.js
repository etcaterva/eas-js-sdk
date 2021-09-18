"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseObject = _interopRequireDefault(require("./BaseObject"));

var _PrizeAllOf = _interopRequireDefault(require("./PrizeAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Prize model module.
 * @module model/Prize
 * @version 0.0.1
 */
var Prize = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Prize</code>.
   * @alias module:model/Prize
   * @implements module:model/BaseObject
   * @implements module:model/PrizeAllOf
   * @param name {String} 
   */
  function Prize(name) {
    _classCallCheck(this, Prize);

    _BaseObject["default"].initialize(this);

    _PrizeAllOf["default"].initialize(this, name);

    Prize.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Prize, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Prize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Prize} obj Optional instance to populate.
     * @return {module:model/Prize} The populated <code>Prize</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Prize();

        _BaseObject["default"].constructFromObject(data, obj);

        _PrizeAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Prize;
}();
/**
 * @member {String} id
 */


Prize.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Prize.prototype['created_at'] = undefined;
/**
 * @member {String} name
 */

Prize.prototype['name'] = undefined;
/**
 * @member {String} url
 */

Prize.prototype['url'] = undefined; // Implement BaseObject interface:

/**
 * @member {String} id
 */

_BaseObject["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_BaseObject["default"].prototype['created_at'] = undefined; // Implement PrizeAllOf interface:

/**
 * @member {String} name
 */

_PrizeAllOf["default"].prototype['name'] = undefined;
/**
 * @member {String} url
 */

_PrizeAllOf["default"].prototype['url'] = undefined;
var _default = Prize;
exports["default"] = _default;