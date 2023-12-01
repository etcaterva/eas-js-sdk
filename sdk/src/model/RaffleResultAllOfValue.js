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
import Prize from './Prize';

/**
 * The RaffleResultAllOfValue model module.
 * @module model/RaffleResultAllOfValue
 * @version 0.0.1
 */
class RaffleResultAllOfValue {
    /**
     * Constructs a new <code>RaffleResultAllOfValue</code>.
     * @alias module:model/RaffleResultAllOfValue
     */
    constructor() { 
        
        RaffleResultAllOfValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RaffleResultAllOfValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RaffleResultAllOfValue} obj Optional instance to populate.
     * @return {module:model/RaffleResultAllOfValue} The populated <code>RaffleResultAllOfValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RaffleResultAllOfValue();

            if (data.hasOwnProperty('participant')) {
                obj['participant'] = Participant.constructFromObject(data['participant']);
            }
            if (data.hasOwnProperty('prize')) {
                obj['prize'] = Prize.constructFromObject(data['prize']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RaffleResultAllOfValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RaffleResultAllOfValue</code>.
     */
    static validateJSON(data) {
        // validate the optional field `participant`
        if (data['participant']) { // data not null
          Participant.validateJSON(data['participant']);
        }
        // validate the optional field `prize`
        if (data['prize']) { // data not null
          Prize.validateJSON(data['prize']);
        }

        return true;
    }


}



/**
 * @member {module:model/Participant} participant
 */
RaffleResultAllOfValue.prototype['participant'] = undefined;

/**
 * @member {module:model/Prize} prize
 */
RaffleResultAllOfValue.prototype['prize'] = undefined;






export default RaffleResultAllOfValue;

