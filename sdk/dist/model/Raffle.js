"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _Prize = _interopRequireDefault(require("./Prize"));

var _RaffleAllOf = _interopRequireDefault(require("./RaffleAllOf"));

var _RaffleResult = _interopRequireDefault(require("./RaffleResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Raffle model module.
 * @module model/Raffle
 * @version 0.0.1
 */
var Raffle = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Raffle</code>.
   * @alias module:model/Raffle
   * @implements module:model/BaseDraw
   * @implements module:model/RaffleAllOf
   * @param prizes {Array.<module:model/Prize>} 
   * @param participants {Array.<module:model/Participant>} 
   */
  function Raffle(prizes, participants) {
    _classCallCheck(this, Raffle);

    _BaseDraw["default"].initialize(this);

    _RaffleAllOf["default"].initialize(this, prizes, participants);

    Raffle.initialize(this, prizes, participants);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Raffle, null, [{
    key: "initialize",
    value: function initialize(obj, prizes, participants) {
      obj['prizes'] = prizes;
      obj['participants'] = participants;
    }
    /**
     * Constructs a <code>Raffle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Raffle} obj Optional instance to populate.
     * @return {module:model/Raffle} The populated <code>Raffle</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Raffle();

        _BaseDraw["default"].constructFromObject(data, obj);

        _RaffleAllOf["default"].constructFromObject(data, obj);

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

  return Raffle;
}();
/**
 * @member {String} id
 */


Raffle.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Raffle.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Raffle.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Raffle.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Raffle.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Raffle.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Raffle.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Prize>} prizes
 */

Raffle.prototype['prizes'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

Raffle.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/RaffleResult>} results
 */

Raffle.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['metadata'] = undefined; // Implement RaffleAllOf interface:

/**
 * @member {Array.<module:model/Prize>} prizes
 */

_RaffleAllOf["default"].prototype['prizes'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

_RaffleAllOf["default"].prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/RaffleResult>} results
 */

_RaffleAllOf["default"].prototype['results'] = undefined;
var _default = Raffle;
exports["default"] = _default;