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
 * The SpinnerResult model module.
 * @module model/SpinnerResult
 * @version 0.0.10
 */
class SpinnerResult {
    /**
     * Constructs a new <code>SpinnerResult</code>.
     * @alias module:model/SpinnerResult
     * @extends module:model/BaseResult
     * @implements module:model/BaseResult
     */
    constructor() { 
        BaseResult.initialize(this);
        SpinnerResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SpinnerResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpinnerResult} obj Optional instance to populate.
     * @return {module:model/SpinnerResult} The populated <code>SpinnerResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpinnerResult();
            BaseResult.constructFromObject(data, obj);
            BaseResult.constructFromObject(data, obj);

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} value
 */
SpinnerResult.prototype['value'] = undefined;


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




export default SpinnerResult;

