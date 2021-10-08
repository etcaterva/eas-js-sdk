"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _SpinnerAllOf = _interopRequireDefault(require("./SpinnerAllOf"));

var _SpinnerResult = _interopRequireDefault(require("./SpinnerResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Spinner model module.
 * @module model/Spinner
 * @version 0.0.1
 */
var Spinner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Spinner</code>.
   * @alias module:model/Spinner
   * @implements module:model/BaseDraw
   * @implements module:model/SpinnerAllOf
   */
  function Spinner() {
    _classCallCheck(this, Spinner);

    _BaseDraw["default"].initialize(this);

    _SpinnerAllOf["default"].initialize(this);

    Spinner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Spinner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Spinner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Spinner} obj Optional instance to populate.
     * @return {module:model/Spinner} The populated <code>Spinner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Spinner();

        _BaseDraw["default"].constructFromObject(data, obj);

        _SpinnerAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_SpinnerResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Spinner;
}();
/**
 * @member {String} id
 */


Spinner.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Spinner.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Spinner.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Spinner.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Spinner.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Spinner.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Spinner.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Spinner.PaymentsEnum>} payments
 */

Spinner.prototype['payments'] = undefined;
/**
 * @member {Array.<module:model/SpinnerResult>} results
 */

Spinner.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['payments'] = undefined; // Implement SpinnerAllOf interface:

/**
 * @member {Array.<module:model/SpinnerResult>} results
 */

_SpinnerAllOf["default"].prototype['results'] = undefined;
/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */

Spinner['PaymentsEnum'] = {
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
var _default = Spinner;
exports["default"] = _default;