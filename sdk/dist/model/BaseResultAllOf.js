"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseResultAllOf model module.
 * @module model/BaseResultAllOf
 * @version 0.0.1
 */
var BaseResultAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseResultAllOf</code>.
   * @alias module:model/BaseResultAllOf
   */
  function BaseResultAllOf() {
    _classCallCheck(this, BaseResultAllOf);

    BaseResultAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseResultAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseResultAllOf} obj Optional instance to populate.
     * @return {module:model/BaseResultAllOf} The populated <code>BaseResultAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseResultAllOf();

        if (data.hasOwnProperty('schedule_date')) {
          obj['schedule_date'] = _ApiClient["default"].convertToType(data['schedule_date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return BaseResultAllOf;
}();
/**
 * @member {Date} schedule_date
 */


BaseResultAllOf.prototype['schedule_date'] = undefined;
var _default = BaseResultAllOf;
exports["default"] = _default;