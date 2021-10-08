"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _LetterAllOf = _interopRequireDefault(require("./LetterAllOf"));

var _LetterResult = _interopRequireDefault(require("./LetterResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Letter model module.
 * @module model/Letter
 * @version 0.0.1
 */
var Letter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Letter</code>.
   * @alias module:model/Letter
   * @implements module:model/BaseDraw
   * @implements module:model/LetterAllOf
   */
  function Letter() {
    _classCallCheck(this, Letter);

    _BaseDraw["default"].initialize(this);

    _LetterAllOf["default"].initialize(this);

    Letter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Letter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Letter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Letter} obj Optional instance to populate.
     * @return {module:model/Letter} The populated <code>Letter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Letter();

        _BaseDraw["default"].constructFromObject(data, obj);

        _LetterAllOf["default"].constructFromObject(data, obj);

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

  return Letter;
}();
/**
 * @member {String} id
 */


Letter.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Letter.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Letter.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Letter.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Letter.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Letter.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Letter.prototype['metadata'] = undefined;
/**
 * @member {Number} number_of_results
 * @default 1
 */

Letter.prototype['number_of_results'] = 1;
/**
 * @member {Boolean} allow_repeated_results
 * @default true
 */

Letter.prototype['allow_repeated_results'] = true;
/**
 * @member {Array.<module:model/LetterResult>} results
 */

Letter.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['metadata'] = undefined; // Implement LetterAllOf interface:

/**
 * @member {Number} number_of_results
 * @default 1
 */

_LetterAllOf["default"].prototype['number_of_results'] = 1;
/**
 * @member {Boolean} allow_repeated_results
 * @default true
 */

_LetterAllOf["default"].prototype['allow_repeated_results'] = true;
/**
 * @member {Array.<module:model/LetterResult>} results
 */

_LetterAllOf["default"].prototype['results'] = undefined;
var _default = Letter;
exports["default"] = _default;