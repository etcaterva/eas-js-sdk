/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BaseDraw', 'model/DrawMetadata', 'model/Participant', 'model/Prize', 'model/RaffleResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseDraw'), require('./DrawMetadata'), require('./Participant'), require('./Prize'), require('./RaffleResult'));
  } else {
    // Browser globals (root is window)
    if (!root.EchaloasuerteJsSdk) {
      root.EchaloasuerteJsSdk = {};
    }
    root.EchaloasuerteJsSdk.Raffle = factory(root.EchaloasuerteJsSdk.ApiClient, root.EchaloasuerteJsSdk.BaseDraw, root.EchaloasuerteJsSdk.DrawMetadata, root.EchaloasuerteJsSdk.Participant, root.EchaloasuerteJsSdk.Prize, root.EchaloasuerteJsSdk.RaffleResult);
  }
}(this, function(ApiClient, BaseDraw, DrawMetadata, Participant, Prize, RaffleResult) {
  'use strict';




  /**
   * The Raffle model module.
   * @module model/Raffle
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Raffle</code>.
   * @alias module:model/Raffle
   * @class
   * @extends module:model/BaseDraw
   * @implements module:model/BaseDraw
   * @param prizes {} 
   * @param participants {} 
   */
  var exports = function(prizes, participants) {
    var _this = this;
    BaseDraw.call(_this);
    BaseDraw.call(_this);
    _this['prizes'] = prizes;
    _this['participants'] = participants;

  };

  /**
   * Constructs a <code>Raffle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Raffle} obj Optional instance to populate.
   * @return {module:model/Raffle} The populated <code>Raffle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BaseDraw.constructFromObject(data, obj);
      BaseDraw.constructFromObject(data, obj);
      if (data.hasOwnProperty('prizes')) {
        obj['prizes'] = ApiClient.convertToType(data['prizes'], [Prize]);
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [RaffleResult]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseDraw.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<module:model/Prize>} prizes
   */
  exports.prototype['prizes'] = undefined;
  /**
   * @member {Array.<module:model/Participant>} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * @member {Array.<module:model/RaffleResult>} results
   */
  exports.prototype['results'] = undefined;

  // Implement BaseDraw interface:
  /**
   * @member {} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {} updated_at
   */
exports.prototype['updated_at'] = undefined;

  /**
   * @member {} title
   */
exports.prototype['title'] = undefined;

  /**
   * @member {} description
   */
exports.prototype['description'] = undefined;

  /**
   * @member {} private_id
   */
exports.prototype['private_id'] = undefined;

  /**
   * @member {} metadata
   */
exports.prototype['metadata'] = undefined;



  return exports;
}));


