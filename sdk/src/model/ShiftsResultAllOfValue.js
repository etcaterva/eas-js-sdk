/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Participant from './Participant';
import ShiftsResultAllOfInterval from './ShiftsResultAllOfInterval';

/**
 * The ShiftsResultAllOfValue model module.
 * @module model/ShiftsResultAllOfValue
 * @version 0.0.1
 */
class ShiftsResultAllOfValue {
    /**
     * Constructs a new <code>ShiftsResultAllOfValue</code>.
     * @alias module:model/ShiftsResultAllOfValue
     */
    constructor() { 
        
        ShiftsResultAllOfValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShiftsResultAllOfValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShiftsResultAllOfValue} obj Optional instance to populate.
     * @return {module:model/ShiftsResultAllOfValue} The populated <code>ShiftsResultAllOfValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShiftsResultAllOfValue();

            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ShiftsResultAllOfInterval.constructFromObject(data['interval']);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShiftsResultAllOfValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShiftsResultAllOfValue</code>.
     */
    static validateJSON(data) {
        // validate the optional field `interval`
        if (data['interval']) { // data not null
          ShiftsResultAllOfInterval.validateJSON(data['interval']);
        }
        if (data['participants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['participants'])) {
                throw new Error("Expected the field `participants` to be an array in the JSON data but got " + data['participants']);
            }
            // validate the optional field `participants` (array)
            for (const item of data['participants']) {
                Participant.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/ShiftsResultAllOfInterval} interval
 */
ShiftsResultAllOfValue.prototype['interval'] = undefined;

/**
 * @member {Array.<module:model/Participant>} participants
 */
ShiftsResultAllOfValue.prototype['participants'] = undefined;






export default ShiftsResultAllOfValue;

