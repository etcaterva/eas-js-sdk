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

/**
 * The LetterResult model module.
 * @module model/LetterResult
 * @version 0.0.1
 */
class LetterResult {
    /**
     * Constructs a new <code>LetterResult</code>.
     * @alias module:model/LetterResult
     * @extends module:model/BaseResult
     * @implements module:model/BaseResult
     */
    constructor() { 
        BaseResult.initialize(this);
        LetterResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LetterResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LetterResult} obj Optional instance to populate.
     * @return {module:model/LetterResult} The populated <code>LetterResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LetterResult();
            BaseResult.constructFromObject(data, obj);
            BaseResult.constructFromObject(data, obj);

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} value
 */
LetterResult.prototype['value'] = undefined;


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




export default LetterResult;

