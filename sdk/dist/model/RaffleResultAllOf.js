"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RaffleResultAllOfValue = _interopRequireDefault(require("./RaffleResultAllOfValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RaffleResultAllOf model module.
 * @module model/RaffleResultAllOf
 * @version 0.0.1
 */
var RaffleResultAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RaffleResultAllOf</code>.
   * @alias module:model/RaffleResultAllOf
   */
  function RaffleResultAllOf() {
    _classCallCheck(this, RaffleResultAllOf);

    RaffleResultAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RaffleResultAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RaffleResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RaffleResultAllOf} obj Optional instance to populate.
     * @return {module:model/RaffleResultAllOf} The populated <code>RaffleResultAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RaffleResultAllOf();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], [_RaffleResultAllOfValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RaffleResultAllOf;
}();
/**
 * @member {Array.<module:model/RaffleResultAllOfValue>} value
 */


RaffleResultAllOf.prototype['value'] = undefined;
var _default = RaffleResultAllOf;
exports["default"] = _default;