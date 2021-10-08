"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LetterResult = _interopRequireDefault(require("./LetterResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LetterAllOf model module.
 * @module model/LetterAllOf
 * @version 0.0.1
 */
var LetterAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LetterAllOf</code>.
   * @alias module:model/LetterAllOf
   */
  function LetterAllOf() {
    _classCallCheck(this, LetterAllOf);

    LetterAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LetterAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LetterAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LetterAllOf} obj Optional instance to populate.
     * @return {module:model/LetterAllOf} The populated <code>LetterAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LetterAllOf();

        if (data.hasOwnProperty('number_of_results')) {
          obj['number_of_results'] = _ApiClient["default"].convertToType(data['number_of_results'], 'Number');
        }

        if (data.hasOwnProperty('allow_repeated_results')) {
          obj['allow_repeated_results'] = _ApiClient["default"].convertToType(data['allow_repeated_results'], 'Boolean');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_LetterResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LetterAllOf;
}();
/**
 * @member {Number} number_of_results
 * @default 1
 */


LetterAllOf.prototype['number_of_results'] = 1;
/**
 * @member {Boolean} allow_repeated_results
 * @default true
 */

LetterAllOf.prototype['allow_repeated_results'] = true;
/**
 * @member {Array.<module:model/LetterResult>} results
 */

LetterAllOf.prototype['results'] = undefined;
var _default = LetterAllOf;
exports["default"] = _default;