"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupsResult = _interopRequireDefault(require("./GroupsResult"));

var _Participant = _interopRequireDefault(require("./Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GroupsAllOf model module.
 * @module model/GroupsAllOf
 * @version 0.0.1
 */
var GroupsAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupsAllOf</code>.
   * @alias module:model/GroupsAllOf
   * @param participants {Array.<module:model/Participant>} 
   * @param numberOfGroups {Number} 
   */
  function GroupsAllOf(participants, numberOfGroups) {
    _classCallCheck(this, GroupsAllOf);

    GroupsAllOf.initialize(this, participants, numberOfGroups);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupsAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, participants, numberOfGroups) {
      obj['participants'] = participants;
      obj['number_of_groups'] = numberOfGroups;
    }
    /**
     * Constructs a <code>GroupsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupsAllOf} obj Optional instance to populate.
     * @return {module:model/GroupsAllOf} The populated <code>GroupsAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupsAllOf();

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

  return GroupsAllOf;
}();
/**
 * @member {Array.<module:model/Participant>} participants
 */


GroupsAllOf.prototype['participants'] = undefined;
/**
 * @member {Number} number_of_groups
 */

GroupsAllOf.prototype['number_of_groups'] = undefined;
/**
 * @member {Array.<module:model/GroupsResult>} results
 */

GroupsAllOf.prototype['results'] = undefined;
var _default = GroupsAllOf;
exports["default"] = _default;