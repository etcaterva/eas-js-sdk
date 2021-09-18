"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LotteryResult = _interopRequireDefault(require("./LotteryResult"));

var _Participant = _interopRequireDefault(require("./Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LotteryAllOf model module.
 * @module model/LotteryAllOf
 * @version 0.0.1
 */
var LotteryAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LotteryAllOf</code>.
   * @alias module:model/LotteryAllOf
   * @param participants {Array.<module:model/Participant>} 
   */
  function LotteryAllOf(participants) {
    _classCallCheck(this, LotteryAllOf);

    LotteryAllOf.initialize(this, participants);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LotteryAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, participants) {
      obj['participants'] = participants;
    }
    /**
     * Constructs a <code>LotteryAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LotteryAllOf} obj Optional instance to populate.
     * @return {module:model/LotteryAllOf} The populated <code>LotteryAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LotteryAllOf();

        if (data.hasOwnProperty('number_of_results')) {
          obj['number_of_results'] = _ApiClient["default"].convertToType(data['number_of_results'], 'Number');
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_LotteryResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LotteryAllOf;
}();
/**
 * @member {Number} number_of_results
 * @default 1
 */


LotteryAllOf.prototype['number_of_results'] = 1;
/**
 * @member {Array.<module:model/Participant>} participants
 */

LotteryAllOf.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/LotteryResult>} results
 */

LotteryAllOf.prototype['results'] = undefined;
var _default = LotteryAllOf;
exports["default"] = _default;