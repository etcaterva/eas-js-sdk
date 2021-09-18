"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinkResultAllOfValue = _interopRequireDefault(require("./LinkResultAllOfValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LinkResultAllOf model module.
 * @module model/LinkResultAllOf
 * @version 0.0.1
 */
var LinkResultAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkResultAllOf</code>.
   * @alias module:model/LinkResultAllOf
   */
  function LinkResultAllOf() {
    _classCallCheck(this, LinkResultAllOf);

    LinkResultAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkResultAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkResultAllOf} obj Optional instance to populate.
     * @return {module:model/LinkResultAllOf} The populated <code>LinkResultAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkResultAllOf();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], [_LinkResultAllOfValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LinkResultAllOf;
}();
/**
 * @member {Array.<module:model/LinkResultAllOfValue>} value
 */


LinkResultAllOf.prototype['value'] = undefined;
var _default = LinkResultAllOf;
exports["default"] = _default;