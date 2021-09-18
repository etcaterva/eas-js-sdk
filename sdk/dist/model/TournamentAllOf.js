"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _TournamentResult = _interopRequireDefault(require("./TournamentResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TournamentAllOf model module.
 * @module model/TournamentAllOf
 * @version 0.0.1
 */
var TournamentAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TournamentAllOf</code>.
   * @alias module:model/TournamentAllOf
   * @param participants {Array.<module:model/Participant>} 
   */
  function TournamentAllOf(participants) {
    _classCallCheck(this, TournamentAllOf);

    TournamentAllOf.initialize(this, participants);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TournamentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, participants) {
      obj['participants'] = participants;
    }
    /**
     * Constructs a <code>TournamentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TournamentAllOf} obj Optional instance to populate.
     * @return {module:model/TournamentAllOf} The populated <code>TournamentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TournamentAllOf();

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_TournamentResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TournamentAllOf;
}();
/**
 * @member {Array.<module:model/Participant>} participants
 */


TournamentAllOf.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/TournamentResult>} results
 */

TournamentAllOf.prototype['results'] = undefined;
var _default = TournamentAllOf;
exports["default"] = _default;