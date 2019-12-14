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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EchaloasuerteJsSdk) {
      root.EchaloasuerteJsSdk = {};
    }
    root.EchaloasuerteJsSdk.DrawTossPayload = factory(root.EchaloasuerteJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DrawTossPayload model module.
   * @module model/DrawTossPayload
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>DrawTossPayload</code>.
   * @alias module:model/DrawTossPayload
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DrawTossPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DrawTossPayload} obj Optional instance to populate.
   * @return {module:model/DrawTossPayload} The populated <code>DrawTossPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('schedule_date')) {
        obj['schedule_date'] = ApiClient.convertToType(data['schedule_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Date} schedule_date
   */
  exports.prototype['schedule_date'] = undefined;



  return exports;
}));


