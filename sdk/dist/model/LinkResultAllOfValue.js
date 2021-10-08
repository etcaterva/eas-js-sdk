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
 * The LinkResultAllOfValue model module.
 * @module model/LinkResultAllOfValue
 * @version 0.0.1
 */
var LinkResultAllOfValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkResultAllOfValue</code>.
   * @alias module:model/LinkResultAllOfValue
   */
  function LinkResultAllOfValue() {
    _classCallCheck(this, LinkResultAllOfValue);

    LinkResultAllOfValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkResultAllOfValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkResultAllOfValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkResultAllOfValue} obj Optional instance to populate.
     * @return {module:model/LinkResultAllOfValue} The populated <code>LinkResultAllOfValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkResultAllOfValue();

        if (data.hasOwnProperty('element1')) {
          obj['element1'] = _ApiClient["default"].convertToType(data['element1'], 'String');
        }

        if (data.hasOwnProperty('element2')) {
          obj['element2'] = _ApiClient["default"].convertToType(data['element2'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LinkResultAllOfValue;
}();
/**
 * @member {String} element1
 */


LinkResultAllOfValue.prototype['element1'] = undefined;
/**
 * @member {String} element2
 */

LinkResultAllOfValue.prototype['element2'] = undefined;
var _default = LinkResultAllOfValue;
exports["default"] = _default;