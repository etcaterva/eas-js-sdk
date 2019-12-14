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
    define(['ApiClient', 'model/BaseResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseResult'));
  } else {
    // Browser globals (root is window)
    if (!root.EchaloasuerteJsSdk) {
      root.EchaloasuerteJsSdk = {};
    }
    root.EchaloasuerteJsSdk.RandomNumberResult = factory(root.EchaloasuerteJsSdk.ApiClient, root.EchaloasuerteJsSdk.BaseResult);
  }
}(this, function(ApiClient, BaseResult) {
  'use strict';




  /**
   * The RandomNumberResult model module.
   * @module model/RandomNumberResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RandomNumberResult</code>.
   * @alias module:model/RandomNumberResult
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
   * Constructs a <code>RandomNumberResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RandomNumberResult} obj Optional instance to populate.
   * @return {module:model/RandomNumberResult} The populated <code>RandomNumberResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BaseResult.constructFromObject(data, obj);
      BaseResult.constructFromObject(data, obj);
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], ['Number']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseResult.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<Number>} value
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


