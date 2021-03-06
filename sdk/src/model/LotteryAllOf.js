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
import LotteryResult from './LotteryResult';
import Participant from './Participant';

/**
 * The LotteryAllOf model module.
 * @module model/LotteryAllOf
 * @version 0.0.1
 */
class LotteryAllOf {
    /**
     * Constructs a new <code>LotteryAllOf</code>.
     * @alias module:model/LotteryAllOf
     * @param participants {Array.<module:model/Participant>} 
     */
    constructor(participants) { 
        
        LotteryAllOf.initialize(this, participants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, participants) { 
        obj['participants'] = participants;
    }

    /**
     * Constructs a <code>LotteryAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LotteryAllOf} obj Optional instance to populate.
     * @return {module:model/LotteryAllOf} The populated <code>LotteryAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LotteryAllOf();

            if (data.hasOwnProperty('number_of_results')) {
                obj['number_of_results'] = ApiClient.convertToType(data['number_of_results'], 'Number');
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LotteryResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} number_of_results
 * @default 1
 */
LotteryAllOf.prototype['number_of_results'] = 1;

/**
 * @member {Array.<module:model/Participant>} participants
 */
LotteryAllOf.prototype['participants'] = undefined;

/**
 * @member {Array.<module:model/LotteryResult>} results
 */
LotteryAllOf.prototype['results'] = undefined;






export default LotteryAllOf;

