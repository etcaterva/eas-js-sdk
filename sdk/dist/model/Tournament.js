"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _TournamentAllOf = _interopRequireDefault(require("./TournamentAllOf"));

var _TournamentResult = _interopRequireDefault(require("./TournamentResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Tournament model module.
 * @module model/Tournament
 * @version 0.0.1
 */
var Tournament = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tournament</code>.
   * @alias module:model/Tournament
   * @implements module:model/BaseDraw
   * @implements module:model/TournamentAllOf
   * @param participants {Array.<module:model/Participant>} 
   */
  function Tournament(participants) {
    _classCallCheck(this, Tournament);

    _BaseDraw["default"].initialize(this);

    _TournamentAllOf["default"].initialize(this, participants);

    Tournament.initialize(this, participants);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tournament, null, [{
    key: "initialize",
    value: function initialize(obj, participants) {
      obj['participants'] = participants;
    }
    /**
     * Constructs a <code>Tournament</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tournament} obj Optional instance to populate.
     * @return {module:model/Tournament} The populated <code>Tournament</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tournament();

        _BaseDraw["default"].constructFromObject(data, obj);

        _TournamentAllOf["default"].constructFromObject(data, obj);

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

  return Tournament;
}();
/**
 * @member {String} id
 */


Tournament.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Tournament.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Tournament.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Tournament.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Tournament.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Tournament.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Tournament.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Tournament.PaymentsEnum>} payments
 */

Tournament.prototype['payments'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

Tournament.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/TournamentResult>} results
 */

Tournament.prototype['results'] = undefined; // Implement BaseDraw interface:

/**
 * @member {String} id
 */

_BaseDraw["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_BaseDraw["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_BaseDraw["default"].prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

_BaseDraw["default"].prototype['title'] = undefined;
/**
 * @member {String} description
 */

_BaseDraw["default"].prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

_BaseDraw["default"].prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

_BaseDraw["default"].prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/BaseDraw.PaymentsEnum>} payments
 */

_BaseDraw["default"].prototype['payments'] = undefined; // Implement TournamentAllOf interface:

/**
 * @member {Array.<module:model/Participant>} participants
 */

_TournamentAllOf["default"].prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/TournamentResult>} results
 */

_TournamentAllOf["default"].prototype['results'] = undefined;
/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */

Tournament['PaymentsEnum'] = {
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
var _default = Tournament;
exports["default"] = _default;