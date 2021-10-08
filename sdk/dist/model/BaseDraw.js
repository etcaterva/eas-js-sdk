"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDrawAllOf = _interopRequireDefault(require("./BaseDrawAllOf"));

var _BaseObject = _interopRequireDefault(require("./BaseObject"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseDraw model module.
 * @module model/BaseDraw
 * @version 0.0.1
 */
var BaseDraw = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseDraw</code>.
   * @alias module:model/BaseDraw
   * @implements module:model/BaseObject
   * @implements module:model/BaseDrawAllOf
   */
  function BaseDraw() {
    _classCallCheck(this, BaseDraw);

    _BaseObject["default"].initialize(this);

    _BaseDrawAllOf["default"].initialize(this);

    BaseDraw.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseDraw, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseDraw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseDraw} obj Optional instance to populate.
     * @return {module:model/BaseDraw} The populated <code>BaseDraw</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseDraw();

        _BaseObject["default"].constructFromObject(data, obj);

        _BaseDrawAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

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

  return BaseDraw;
}();
/**
 * @member {String} id
 */


BaseDraw.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

BaseDraw.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

BaseDraw.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

BaseDraw.prototype['title'] = undefined;
/**
 * @member {String} description
 */

BaseDraw.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

BaseDraw.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

BaseDraw.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/BaseDraw.PaymentsEnum>} payments
 */

BaseDraw.prototype['payments'] = undefined; // Implement BaseObject interface:

/**
 * @member {String} id
 */

_BaseObject["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_BaseObject["default"].prototype['created_at'] = undefined; // Implement BaseDrawAllOf interface:

/**
 * @member {Date} updated_at
 */

_BaseDrawAllOf["default"].prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

_BaseDrawAllOf["default"].prototype['title'] = undefined;
/**
 * @member {String} description
 */

_BaseDrawAllOf["default"].prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

_BaseDrawAllOf["default"].prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

_BaseDrawAllOf["default"].prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/BaseDrawAllOf.PaymentsEnum>} payments
 */

_BaseDrawAllOf["default"].prototype['payments'] = undefined;
/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */

BaseDraw['PaymentsEnum'] = {
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
var _default = BaseDraw;
exports["default"] = _default;