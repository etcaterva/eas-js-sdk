"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Participant = _interopRequireDefault(require("./Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TournamentResultAllOf model module.
 * @module model/TournamentResultAllOf
 * @version 0.0.1
 */
var TournamentResultAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TournamentResultAllOf</code>.
   * @alias module:model/TournamentResultAllOf
   */
  function TournamentResultAllOf() {
    _classCallCheck(this, TournamentResultAllOf);

    TournamentResultAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TournamentResultAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TournamentResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TournamentResultAllOf} obj Optional instance to populate.
     * @return {module:model/TournamentResultAllOf} The populated <code>TournamentResultAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TournamentResultAllOf();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], [[_Participant["default"]]]);
        }
      }

      return obj;
    }
  }]);

  return TournamentResultAllOf;
}();
/**
 * @member {Array.<Array.<module:model/Participant>>} value
 */


TournamentResultAllOf.prototype['value'] = undefined;
var _default = TournamentResultAllOf;
exports["default"] = _default;