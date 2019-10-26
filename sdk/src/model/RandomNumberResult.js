/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseResult from './BaseResult';

/**
 * The RandomNumberResult model module.
 * @module model/RandomNumberResult
 * @version 0.0.10
 */
class RandomNumberResult {
    /**
     * Constructs a new <code>RandomNumberResult</code>.
     * @alias module:model/RandomNumberResult
     * @extends module:model/BaseResult
     * @implements module:model/BaseResult
     */
    constructor() { 
        BaseResult.initialize(this);
        RandomNumberResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RandomNumberResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RandomNumberResult} obj Optional instance to populate.
     * @return {module:model/RandomNumberResult} The populated <code>RandomNumberResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RandomNumberResult();
            BaseResult.constructFromObject(data, obj);
            BaseResult.constructFromObject(data, obj);

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} value
 */
RandomNumberResult.prototype['value'] = undefined;


// Implement BaseResult interface:
/**
 * @member {} id
 */
BaseResult.prototype['id'] = undefined;
/**
 * @member {} created_at
 */
BaseResult.prototype['created_at'] = undefined;
/**
 * @member {} schedule_date
 */
BaseResult.prototype['schedule_date'] = undefined;




export default RandomNumberResult;

