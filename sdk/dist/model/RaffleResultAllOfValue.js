"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _Prize = _interopRequireDefault(require("./Prize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RaffleResultAllOfValue model module.
 * @module model/RaffleResultAllOfValue
 * @version 0.0.1
 */
var RaffleResultAllOfValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RaffleResultAllOfValue</code>.
   * @alias module:model/RaffleResultAllOfValue
   */
  function RaffleResultAllOfValue() {
    _classCallCheck(this, RaffleResultAllOfValue);

    RaffleResultAllOfValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RaffleResultAllOfValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RaffleResultAllOfValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RaffleResultAllOfValue} obj Optional instance to populate.
     * @return {module:model/RaffleResultAllOfValue} The populated <code>RaffleResultAllOfValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RaffleResultAllOfValue();

        if (data.hasOwnProperty('participant')) {
          obj['participant'] = _Participant["default"].constructFromObject(data['participant']);
        }

        if (data.hasOwnProperty('prize')) {
          obj['prize'] = _Prize["default"].constructFromObject(data['prize']);
        }
      }

      return obj;
    }
  }]);

  return RaffleResultAllOfValue;
}();
/**
 * @member {module:model/Participant} participant
 */


RaffleResultAllOfValue.prototype['participant'] = undefined;
/**
 * @member {module:model/Prize} prize
 */

RaffleResultAllOfValue.prototype['prize'] = undefined;
var _default = RaffleResultAllOfValue;
exports["default"] = _default;