"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _LinkAllOf = _interopRequireDefault(require("./LinkAllOf"));

var _LinkResult = _interopRequireDefault(require("./LinkResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Link model module.
 * @module model/Link
 * @version 0.0.1
 */
var Link = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Link</code>.
   * @alias module:model/Link
   * @implements module:model/BaseDraw
   * @implements module:model/LinkAllOf
   */
  function Link() {
    _classCallCheck(this, Link);

    _BaseDraw["default"].initialize(this);

    _LinkAllOf["default"].initialize(this);

    Link.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Link, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Link} obj Optional instance to populate.
     * @return {module:model/Link} The populated <code>Link</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Link();

        _BaseDraw["default"].constructFromObject(data, obj);

        _LinkAllOf["default"].constructFromObject(data, obj);

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

  return Link;
}();
/**
 * @member {String} id
 */


Link.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Link.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Link.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Link.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Link.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Link.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Link.prototype['metadata'] = undefined;
/**
 * @member {Array.<String>} items_set1
 */

Link.prototype['items_set1'] = undefined;
/**
 * @member {Array.<String>} items_set2
 */

Link.prototype['items_set2'] = undefined;
/**
 * @member {Array.<module:model/LinkResult>} results
 */

Link.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['metadata'] = undefined; // Implement LinkAllOf interface:

/**
 * @member {Array.<String>} items_set1
 */

_LinkAllOf["default"].prototype['items_set1'] = undefined;
/**
 * @member {Array.<String>} items_set2
 */

_LinkAllOf["default"].prototype['items_set2'] = undefined;
/**
 * @member {Array.<module:model/LinkResult>} results
 */

_LinkAllOf["default"].prototype['results'] = undefined;
var _default = Link;
exports["default"] = _default;