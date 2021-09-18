"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _RandomNumberAllOf = _interopRequireDefault(require("./RandomNumberAllOf"));

var _RandomNumberResult = _interopRequireDefault(require("./RandomNumberResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RandomNumber model module.
 * @module model/RandomNumber
 * @version 0.0.1
 */
var RandomNumber = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RandomNumber</code>.
   * @alias module:model/RandomNumber
   * @implements module:model/BaseDraw
   * @implements module:model/RandomNumberAllOf
   * @param rangeMin {Number} 
   * @param rangeMax {Number} 
   */
  function RandomNumber(rangeMin, rangeMax) {
    _classCallCheck(this, RandomNumber);

    _BaseDraw["default"].initialize(this);

    _RandomNumberAllOf["default"].initialize(this, rangeMin, rangeMax);

    RandomNumber.initialize(this, rangeMin, rangeMax);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RandomNumber, null, [{
    key: "initialize",
    value: function initialize(obj, rangeMin, rangeMax) {
      obj['range_min'] = rangeMin;
      obj['range_max'] = rangeMax;
    }
    /**
     * Constructs a <code>RandomNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RandomNumber} obj Optional instance to populate.
     * @return {module:model/RandomNumber} The populated <code>RandomNumber</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RandomNumber();

        _BaseDraw["default"].constructFromObject(data, obj);

        _RandomNumberAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('range_min')) {
          obj['range_min'] = _ApiClient["default"].convertToType(data['range_min'], 'Number');
        }

        if (data.hasOwnProperty('range_max')) {
          obj['range_max'] = _ApiClient["default"].convertToType(data['range_max'], 'Number');
        }

        if (data.hasOwnProperty('number_of_results')) {
          obj['number_of_results'] = _ApiClient["default"].convertToType(data['number_of_results'], 'Number');
        }

        if (data.hasOwnProperty('allow_repeated_results')) {
          obj['allow_repeated_results'] = _ApiClient["default"].convertToType(data['allow_repeated_results'], 'Boolean');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_RandomNumberResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RandomNumber;
}();
/**
 * @member {String} id
 */


RandomNumber.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

RandomNumber.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

RandomNumber.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

RandomNumber.prototype['title'] = undefined;
/**
 * @member {String} description
 */

RandomNumber.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

RandomNumber.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

RandomNumber.prototype['metadata'] = undefined;
/**
 * @member {Number} range_min
 */

RandomNumber.prototype['range_min'] = undefined;
/**
 * @member {Number} range_max
 */

RandomNumber.prototype['range_max'] = undefined;
/**
 * @member {Number} number_of_results
 * @default 1
 */

RandomNumber.prototype['number_of_results'] = 1;
/**
 * @member {Boolean} allow_repeated_results
 * @default true
 */

RandomNumber.prototype['allow_repeated_results'] = true;
/**
 * @member {Array.<module:model/RandomNumberResult>} results
 */

RandomNumber.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['metadata'] = undefined; // Implement RandomNumberAllOf interface:

/**
 * @member {Number} range_min
 */

_RandomNumberAllOf["default"].prototype['range_min'] = undefined;
/**
 * @member {Number} range_max
 */

_RandomNumberAllOf["default"].prototype['range_max'] = undefined;
/**
 * @member {Number} number_of_results
 * @default 1
 */

_RandomNumberAllOf["default"].prototype['number_of_results'] = 1;
/**
 * @member {Boolean} allow_repeated_results
 * @default true
 */

_RandomNumberAllOf["default"].prototype['allow_repeated_results'] = true;
/**
 * @member {Array.<module:model/RandomNumberResult>} results
 */

_RandomNumberAllOf["default"].prototype['results'] = undefined;
var _default = RandomNumber;
exports["default"] = _default;