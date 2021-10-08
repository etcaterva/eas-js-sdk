"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseObject = _interopRequireDefault(require("./BaseObject"));

var _ParticipantAllOf = _interopRequireDefault(require("./ParticipantAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Participant model module.
 * @module model/Participant
 * @version 0.0.1
 */
var Participant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Participant</code>.
   * @alias module:model/Participant
   * @implements module:model/BaseObject
   * @implements module:model/ParticipantAllOf
   * @param name {String} 
   */
  function Participant(name) {
    _classCallCheck(this, Participant);

    _BaseObject["default"].initialize(this);

    _ParticipantAllOf["default"].initialize(this, name);

    Participant.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Participant, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Participant} obj Optional instance to populate.
     * @return {module:model/Participant} The populated <code>Participant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Participant();

        _BaseObject["default"].constructFromObject(data, obj);

        _ParticipantAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('facebook_id')) {
          obj['facebook_id'] = _ApiClient["default"].convertToType(data['facebook_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Participant;
}();
/**
 * @member {String} id
 */


Participant.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Participant.prototype['created_at'] = undefined;
/**
 * @member {String} name
 */

Participant.prototype['name'] = undefined;
/**
 * @member {String} facebook_id
 */

Participant.prototype['facebook_id'] = undefined; // Implement BaseObject interface:

/**
 * @member {String} id
 */

_BaseObject["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_BaseObject["default"].prototype['created_at'] = undefined; // Implement ParticipantAllOf interface:

/**
 * @member {String} name
 */

_ParticipantAllOf["default"].prototype['name'] = undefined;
/**
 * @member {String} facebook_id
 */

_ParticipantAllOf["default"].prototype['facebook_id'] = undefined;
var _default = Participant;
exports["default"] = _default;