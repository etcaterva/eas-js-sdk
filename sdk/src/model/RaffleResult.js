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
import BaseResult from './BaseResult';
import RaffleResultAllOfValue from './RaffleResultAllOfValue';

/**
 * The RaffleResult model module.
 * @module model/RaffleResult
 * @version 1.0.0
 */
class RaffleResult {
    /**
     * Constructs a new <code>RaffleResult</code>.
     * @alias module:model/RaffleResult
     * @implements module:model/BaseResult
     * @param scheduleDate {Date} 
     * @param createdAt {Date} 
     */
    constructor(scheduleDate, createdAt) { 
        BaseResult.initialize(this, scheduleDate, createdAt);
        RaffleResult.initialize(this, scheduleDate, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scheduleDate, createdAt) { 
        obj['schedule_date'] = scheduleDate;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>RaffleResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RaffleResult} obj Optional instance to populate.
     * @return {module:model/RaffleResult} The populated <code>RaffleResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RaffleResult();
            BaseResult.constructFromObject(data, obj);

            if (data.hasOwnProperty('schedule_date')) {
                obj['schedule_date'] = ApiClient.convertToType(data['schedule_date'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [RaffleResultAllOfValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RaffleResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RaffleResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RaffleResult.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                RaffleResultAllOfValue.validateJSON(item);
            };
        }

        return true;
    }


}

RaffleResult.RequiredProperties = ["schedule_date", "created_at"];

/**
 * @member {Date} schedule_date
 */
RaffleResult.prototype['schedule_date'] = undefined;

/**
 * @member {Date} created_at
 */
RaffleResult.prototype['created_at'] = undefined;

/**
 * @member {Array.<module:model/RaffleResultAllOfValue>} value
 */
RaffleResult.prototype['value'] = undefined;


// Implement BaseResult interface:
/**
 * @member {Date} schedule_date
 */
BaseResult.prototype['schedule_date'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResult.prototype['created_at'] = undefined;




export default RaffleResult;

