/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseResult from './BaseResult';
import RaffleResultValue from './RaffleResultValue';

/**
 * The RaffleResult model module.
 * @module model/RaffleResult
 * @version 0.0.1
 */
class RaffleResult {
    /**
     * Constructs a new <code>RaffleResult</code>.
     * @alias module:model/RaffleResult
     * @extends module:model/BaseResult
     * @implements module:model/BaseResult
     */
    constructor() { 
        BaseResult.initialize(this);
        RaffleResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
            BaseResult.constructFromObject(data, obj);

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [RaffleResultValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RaffleResultValue>} value
 */
RaffleResult.prototype['value'] = undefined;


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




export default RaffleResult;

