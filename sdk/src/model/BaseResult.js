/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseObject from './BaseObject';

/**
 * The BaseResult model module.
 * @module model/BaseResult
 * @version 1.0.0
 */
class BaseResult {
    /**
     * Constructs a new <code>BaseResult</code>.
     * @alias module:model/BaseResult
     * @implements module:model/BaseObject
     */
    constructor() { 
        BaseObject.initialize(this);
        BaseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseResult} obj Optional instance to populate.
     * @return {module:model/BaseResult} The populated <code>BaseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseResult();
            BaseObject.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('schedule_date')) {
                obj['schedule_date'] = ApiClient.convertToType(data['schedule_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
BaseResult.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
BaseResult.prototype['created_at'] = undefined;

/**
 * @member {Date} schedule_date
 */
BaseResult.prototype['schedule_date'] = undefined;


// Implement BaseObject interface:
/**
 * @member {String} id
 */
BaseObject.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseObject.prototype['created_at'] = undefined;




export default BaseResult;

