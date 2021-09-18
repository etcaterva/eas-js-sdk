"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RandomNumberResult = _interopRequireDefault(require("./RandomNumberResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RandomNumberAllOf model module.
 * @module model/RandomNumberAllOf
 * @version 0.0.1
 */
var RandomNumberAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RandomNumberAllOf</code>.
   * @alias module:model/RandomNumberAllOf
   * @param rangeMin {Number} 
   * @param rangeMax {Number} 
   */
  function RandomNumberAllOf(rangeMin, rangeMax) {
    _classCallCheck(this, RandomNumberAllOf);

    RandomNumberAllOf.initialize(this, rangeMin, rangeMax);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RandomNumberAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, rangeMin, rangeMax) {
      obj['range_min'] = rangeMin;
      obj['range_max'] = rangeMax;
    }
    /**
     * Constructs a <code>RandomNumberAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RandomNumberAllOf} obj Optional instance to populate.
     * @return {module:model/RandomNumberAllOf} The populated <code>RandomNumberAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RandomNumberAllOf();

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

  return RandomNumberAllOf;
}();
/**
 * @member {Number} range_min
 */


RandomNumberAllOf.prototype['range_min'] = undefined;
/**
 * @member {Number} range_max
 */

RandomNumberAllOf.prototype['range_max'] = undefined;
/**
 * @member {Number} number_of_results
 * @default 1
 */

RandomNumberAllOf.prototype['number_of_results'] = 1;
/**
 * @member {Boolean} allow_repeated_results
 * @default true
 */

RandomNumberAllOf.prototype['allow_repeated_results'] = true;
/**
 * @member {Array.<module:model/RandomNumberResult>} results
 */

RandomNumberAllOf.prototype['results'] = undefined;
var _default = RandomNumberAllOf;
exports["default"] = _default;