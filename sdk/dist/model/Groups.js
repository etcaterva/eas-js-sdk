"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseDraw = _interopRequireDefault(require("./BaseDraw"));

var _DrawMetadata = _interopRequireDefault(require("./DrawMetadata"));

var _GroupsAllOf = _interopRequireDefault(require("./GroupsAllOf"));

var _GroupsResult = _interopRequireDefault(require("./GroupsResult"));

var _Participant = _interopRequireDefault(require("./Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Groups model module.
 * @module model/Groups
 * @version 0.0.1
 */
var Groups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Groups</code>.
   * @alias module:model/Groups
   * @implements module:model/BaseDraw
   * @implements module:model/GroupsAllOf
   * @param participants {Array.<module:model/Participant>} 
   * @param numberOfGroups {Number} 
   */
  function Groups(participants, numberOfGroups) {
    _classCallCheck(this, Groups);

    _BaseDraw["default"].initialize(this);

    _GroupsAllOf["default"].initialize(this, participants, numberOfGroups);

    Groups.initialize(this, participants, numberOfGroups);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Groups, null, [{
    key: "initialize",
    value: function initialize(obj, participants, numberOfGroups) {
      obj['participants'] = participants;
      obj['number_of_groups'] = numberOfGroups;
    }
    /**
     * Constructs a <code>Groups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Groups} obj Optional instance to populate.
     * @return {module:model/Groups} The populated <code>Groups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Groups();

        _BaseDraw["default"].constructFromObject(data, obj);

        _GroupsAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }

        if (data.hasOwnProperty('number_of_groups')) {
          obj['number_of_groups'] = _ApiClient["default"].convertToType(data['number_of_groups'], 'Number');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_GroupsResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Groups;
}();
/**
 * @member {String} id
 */


Groups.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Groups.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Groups.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Groups.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Groups.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */

Groups.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */

Groups.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

Groups.prototype['participants'] = undefined;
/**
 * @member {Number} number_of_groups
 */

Groups.prototype['number_of_groups'] = undefined;
/**
 * @member {Array.<module:model/GroupsResult>} results
 */

Groups.prototype['results'] = undefined; // Implement BaseDraw interface:

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

_BaseDraw["default"].prototype['metadata'] = undefined; // Implement GroupsAllOf interface:

/**
 * @member {Array.<module:model/Participant>} participants
 */

_GroupsAllOf["default"].prototype['participants'] = undefined;
/**
 * @member {Number} number_of_groups
 */

_GroupsAllOf["default"].prototype['number_of_groups'] = undefined;
/**
 * @member {Array.<module:model/GroupsResult>} results
 */

_GroupsAllOf["default"].prototype['results'] = undefined;
var _default = Groups;
exports["default"] = _default;