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
    define(['ApiClient', 'model/BaseResult', 'model/RaffleResultValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseResult'), require('./RaffleResultValue'));
  } else {
    // Browser globals (root is window)
    if (!root.EchaloasuerteJsSdk) {
      root.EchaloasuerteJsSdk = {};
    }
    root.EchaloasuerteJsSdk.RaffleResult = factory(root.EchaloasuerteJsSdk.ApiClient, root.EchaloasuerteJsSdk.BaseResult, root.EchaloasuerteJsSdk.RaffleResultValue);
  }
}(this, function(ApiClient, BaseResult, RaffleResultValue) {
  'use strict';




  /**
   * The RaffleResult model module.
   * @module model/RaffleResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RaffleResult</code>.
   * @alias module:model/RaffleResult
   * @class
   * @extends module:model/BaseResult
   * @implements module:model/BaseResult
   */
  var exports = function() {
    var _this = this;
    BaseResult.call(_this);
    BaseResult.call(_this);

  };

  /**
   * Constructs a <code>RaffleResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RaffleResult} obj Optional instance to populate.
   * @return {module:model/RaffleResult} The populated <code>RaffleResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BaseResult.constructFromObject(data, obj);
      BaseResult.constructFromObject(data, obj);
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], [RaffleResultValue]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseResult.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<module:model/RaffleResultValue>} value
   */
  exports.prototype['value'] = undefined;

  // Implement BaseResult interface:
  /**
   * @member {} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {} schedule_date
   */
exports.prototype['schedule_date'] = undefined;



  return exports;
}));


