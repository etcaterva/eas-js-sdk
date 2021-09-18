"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecretSantaParticipants = _interopRequireDefault(require("./SecretSantaParticipants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SecretSanta model module.
 * @module model/SecretSanta
 * @version 0.0.1
 */
var SecretSanta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecretSanta</code>.
   * @alias module:model/SecretSanta
   */
  function SecretSanta() {
    _classCallCheck(this, SecretSanta);

    SecretSanta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecretSanta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecretSanta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretSanta} obj Optional instance to populate.
     * @return {module:model/SecretSanta} The populated <code>SecretSanta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecretSanta();

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_SecretSantaParticipants["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SecretSanta;
}();
/**
 * @member {module:model/SecretSanta.LanguageEnum} language
 */


SecretSanta.prototype['language'] = undefined;
/**
 * @member {Array.<module:model/SecretSantaParticipants>} participants
 */

SecretSanta.prototype['participants'] = undefined;
/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */

SecretSanta['LanguageEnum'] = {
  /**
   * value: "es"
   * @const
   */
  "es": "es",

  /**
   * value: "en"
   * @const
   */
  "en": "en"
};
var _default = SecretSanta;
exports["default"] = _default;