"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _LotteryAllOf = _interopRequireDefault(require("./LotteryAllOf"));

var _LotteryResult = _interopRequireDefault(require("./LotteryResult"));

var _Participant = _interopRequireDefault(require("./Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Lottery model module.
 * @module model/Lottery
 * @version 0.0.1
 */
var Lottery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Lottery</code>.
   * @alias module:model/Lottery
   * @implements module:model/BaseDraw
   * @implements module:model/LotteryAllOf
   * @param participants {Array.<module:model/Participant>} 
   */
  function Lottery(participants) {
    _classCallCheck(this, Lottery);

    _BaseDraw["default"].initialize(this);

    _LotteryAllOf["default"].initialize(this, participants);

    Lottery.initialize(this, participants);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Lottery, null, [{
    key: "initialize",
    value: function initialize(obj, participants) {
      obj['participants'] = participants;
    }
    /**
     * Constructs a <code>Lottery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Lottery} obj Optional instance to populate.
     * @return {module:model/Lottery} The populated <code>Lottery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Lottery();

        _BaseDraw["default"].constructFromObject(data, obj);

        _LotteryAllOf["default"].constructFromObject(data, obj);

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

  return Lottery;
}();
/**
 * @member {String} id
 */


Lottery.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Lottery.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Lottery.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Lottery.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Lottery.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Lottery.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Lottery.prototype['metadata'] = undefined;
/**
 * @member {Number} number_of_results
 * @default 1
 */

Lottery.prototype['number_of_results'] = 1;
/**
 * @member {Array.<module:model/Participant>} participants
 */

Lottery.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/LotteryResult>} results
 */

Lottery.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['metadata'] = undefined; // Implement LotteryAllOf interface:

/**
 * @member {Number} number_of_results
 * @default 1
 */

_LotteryAllOf["default"].prototype['number_of_results'] = 1;
/**
 * @member {Array.<module:model/Participant>} participants
 */

_LotteryAllOf["default"].prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/LotteryResult>} results
 */

_LotteryAllOf["default"].prototype['results'] = undefined;
var _default = Lottery;
exports["default"] = _default;