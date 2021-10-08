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
 * The CoinResultAllOf model module.
 * @module model/CoinResultAllOf
 * @version 0.0.1
 */
var CoinResultAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinResultAllOf</code>.
   * @alias module:model/CoinResultAllOf
   */
  function CoinResultAllOf() {
    _classCallCheck(this, CoinResultAllOf);

    CoinResultAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoinResultAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoinResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinResultAllOf} obj Optional instance to populate.
     * @return {module:model/CoinResultAllOf} The populated <code>CoinResultAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinResultAllOf();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CoinResultAllOf;
}();
/**
 * @member {Array.<module:model/CoinResultAllOf.ValueEnum>} value
 */


CoinResultAllOf.prototype['value'] = undefined;
/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */

CoinResultAllOf['ValueEnum'] = {
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
var _default = CoinResultAllOf;
exports["default"] = _default;