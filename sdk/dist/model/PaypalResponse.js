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
 * The PaypalResponse model module.
 * @module model/PaypalResponse
 * @version 0.0.1
 */
var PaypalResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaypalResponse</code>.
   * @alias module:model/PaypalResponse
   */
  function PaypalResponse() {
    _classCallCheck(this, PaypalResponse);

    PaypalResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaypalResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaypalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaypalResponse} obj Optional instance to populate.
     * @return {module:model/PaypalResponse} The populated <code>PaypalResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaypalResponse();

        if (data.hasOwnProperty('redirect_url')) {
          obj['redirect_url'] = _ApiClient["default"].convertToType(data['redirect_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaypalResponse;
}();
/**
 * @member {String} redirect_url
 */


PaypalResponse.prototype['redirect_url'] = undefined;
var _default = PaypalResponse;
exports["default"] = _default;