"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _Prize = _interopRequireDefault(require("./Prize"));

var _RaffleResult = _interopRequireDefault(require("./RaffleResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RaffleAllOf model module.
 * @module model/RaffleAllOf
 * @version 0.0.1
 */
var RaffleAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RaffleAllOf</code>.
   * @alias module:model/RaffleAllOf
   * @param prizes {Array.<module:model/Prize>} 
   * @param participants {Array.<module:model/Participant>} 
   */
  function RaffleAllOf(prizes, participants) {
    _classCallCheck(this, RaffleAllOf);

    RaffleAllOf.initialize(this, prizes, participants);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RaffleAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, prizes, participants) {
      obj['prizes'] = prizes;
      obj['participants'] = participants;
    }
    /**
     * Constructs a <code>RaffleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RaffleAllOf} obj Optional instance to populate.
     * @return {module:model/RaffleAllOf} The populated <code>RaffleAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RaffleAllOf();

        if (data.hasOwnProperty('prizes')) {
          obj['prizes'] = _ApiClient["default"].convertToType(data['prizes'], [_Prize["default"]]);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_RaffleResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RaffleAllOf;
}();
/**
 * @member {Array.<module:model/Prize>} prizes
 */


RaffleAllOf.prototype['prizes'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

RaffleAllOf.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/RaffleResult>} results
 */

RaffleAllOf.prototype['results'] = undefined;
var _default = RaffleAllOf;
exports["default"] = _default;