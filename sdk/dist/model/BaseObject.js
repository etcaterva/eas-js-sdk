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
 * The BaseObject model module.
 * @module model/BaseObject
 * @version 0.0.1
 */
var BaseObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseObject</code>.
   * @alias module:model/BaseObject
   */
  function BaseObject() {
    _classCallCheck(this, BaseObject);

    BaseObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseObject} obj Optional instance to populate.
     * @return {module:model/BaseObject} The populated <code>BaseObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseObject();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return BaseObject;
}();
/**
 * @member {String} id
 */


BaseObject.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

BaseObject.prototype['created_at'] = undefined;
var _default = BaseObject;
exports["default"] = _default;