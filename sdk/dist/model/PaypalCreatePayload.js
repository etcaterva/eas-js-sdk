"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaypalCreatePayload model module.
 * @module model/PaypalCreatePayload
 * @version 0.0.1
 */
var PaypalCreatePayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaypalCreatePayload</code>.
   * @alias module:model/PaypalCreatePayload
   * @param options {Array.<module:model/PaypalCreatePayload.OptionsEnum>} 
   * @param drawUrl {String} 
   * @param drawId {String} 
   */
  function PaypalCreatePayload(options, drawUrl, drawId) {
    _classCallCheck(this, PaypalCreatePayload);

    PaypalCreatePayload.initialize(this, options, drawUrl, drawId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaypalCreatePayload, null, [{
    key: "initialize",
    value: function initialize(obj, options, drawUrl, drawId) {
      obj['options'] = options;
      obj['draw_url'] = drawUrl;
      obj['draw_id'] = drawId;
    }
    /**
     * Constructs a <code>PaypalCreatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaypalCreatePayload} obj Optional instance to populate.
     * @return {module:model/PaypalCreatePayload} The populated <code>PaypalCreatePayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaypalCreatePayload();

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], ['String']);
        }

        if (data.hasOwnProperty('draw_url')) {
          obj['draw_url'] = _ApiClient["default"].convertToType(data['draw_url'], 'String');
        }

        if (data.hasOwnProperty('draw_id')) {
          obj['draw_id'] = _ApiClient["default"].convertToType(data['draw_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaypalCreatePayload;
}();
/**
 * @member {Array.<module:model/PaypalCreatePayload.OptionsEnum>} options
 */


PaypalCreatePayload.prototype['options'] = undefined;
/**
 * @member {String} draw_url
 */

PaypalCreatePayload.prototype['draw_url'] = undefined;
/**
 * @member {String} draw_id
 */

PaypalCreatePayload.prototype['draw_id'] = undefined;
/**
 * Allowed values for the <code>options</code> property.
 * @enum {String}
 * @readonly
 */

PaypalCreatePayload['OptionsEnum'] = {
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
var _default = PaypalCreatePayload;
exports["default"] = _default;