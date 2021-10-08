"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseDrawAllOf model module.
 * @module model/BaseDrawAllOf
 * @version 0.0.1
 */
var BaseDrawAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseDrawAllOf</code>.
   * @alias module:model/BaseDrawAllOf
   */
  function BaseDrawAllOf() {
    _classCallCheck(this, BaseDrawAllOf);

    BaseDrawAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseDrawAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseDrawAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseDrawAllOf} obj Optional instance to populate.
     * @return {module:model/BaseDrawAllOf} The populated <code>BaseDrawAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseDrawAllOf();

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('private_id')) {
          obj['private_id'] = _ApiClient["default"].convertToType(data['private_id'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], [_DrawMetadata["default"]]);
        }

        if (data.hasOwnProperty('payments')) {
          obj['payments'] = _ApiClient["default"].convertToType(data['payments'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return BaseDrawAllOf;
}();
/**
 * @member {Date} updated_at
 */


BaseDrawAllOf.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

BaseDrawAllOf.prototype['title'] = undefined;
/**
 * @member {String} description
 */

BaseDrawAllOf.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

BaseDrawAllOf.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

BaseDrawAllOf.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/BaseDrawAllOf.PaymentsEnum>} payments
 */

BaseDrawAllOf.prototype['payments'] = undefined;
/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */

BaseDrawAllOf['PaymentsEnum'] = {
  /**
   * value: "CERTIFIED"
   * @const
   */
  "CERTIFIED": "CERTIFIED",

  /**
   * value: "ADFREE"
   * @const
   */
  "ADFREE": "ADFREE",

  /**
   * value: "SUPPORT"
   * @const
   */
  "SUPPORT": "SUPPORT"
};
var _default = BaseDrawAllOf;
exports["default"] = _default;