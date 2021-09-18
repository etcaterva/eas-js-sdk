"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinkResult = _interopRequireDefault(require("./LinkResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LinkAllOf model module.
 * @module model/LinkAllOf
 * @version 0.0.1
 */
var LinkAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkAllOf</code>.
   * @alias module:model/LinkAllOf
   */
  function LinkAllOf() {
    _classCallCheck(this, LinkAllOf);

    LinkAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkAllOf} obj Optional instance to populate.
     * @return {module:model/LinkAllOf} The populated <code>LinkAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkAllOf();

        if (data.hasOwnProperty('items_set1')) {
          obj['items_set1'] = _ApiClient["default"].convertToType(data['items_set1'], ['String']);
        }

        if (data.hasOwnProperty('items_set2')) {
          obj['items_set2'] = _ApiClient["default"].convertToType(data['items_set2'], ['String']);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_LinkResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LinkAllOf;
}();
/**
 * @member {Array.<String>} items_set1
 */


LinkAllOf.prototype['items_set1'] = undefined;
/**
 * @member {Array.<String>} items_set2
 */

LinkAllOf.prototype['items_set2'] = undefined;
/**
 * @member {Array.<module:model/LinkResult>} results
 */

LinkAllOf.prototype['results'] = undefined;
var _default = LinkAllOf;
exports["default"] = _default;