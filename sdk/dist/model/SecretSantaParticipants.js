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
 * The SecretSantaParticipants model module.
 * @module model/SecretSantaParticipants
 * @version 0.0.1
 */
var SecretSantaParticipants = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecretSantaParticipants</code>.
   * @alias module:model/SecretSantaParticipants
   */
  function SecretSantaParticipants() {
    _classCallCheck(this, SecretSantaParticipants);

    SecretSantaParticipants.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecretSantaParticipants, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecretSantaParticipants</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretSantaParticipants} obj Optional instance to populate.
     * @return {module:model/SecretSantaParticipants} The populated <code>SecretSantaParticipants</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecretSantaParticipants();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('exclusions')) {
          obj['exclusions'] = _ApiClient["default"].convertToType(data['exclusions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return SecretSantaParticipants;
}();
/**
 * @member {String} name
 */


SecretSantaParticipants.prototype['name'] = undefined;
/**
 * @member {String} email
 */

SecretSantaParticipants.prototype['email'] = undefined;
/**
 * @member {Array.<String>} exclusions
 */

SecretSantaParticipants.prototype['exclusions'] = undefined;
var _default = SecretSantaParticipants;
exports["default"] = _default;