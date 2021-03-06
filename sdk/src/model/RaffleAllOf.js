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
import RaffleResult from './RaffleResult';

/**
 * The RaffleAllOf model module.
 * @module model/RaffleAllOf
 * @version 0.0.1
 */
class RaffleAllOf {
    /**
     * Constructs a new <code>RaffleAllOf</code>.
     * @alias module:model/RaffleAllOf
     * @param prizes {Array.<module:model/Prize>} 
     * @param participants {Array.<module:model/Participant>} 
     */
    constructor(prizes, participants) { 
        
        RaffleAllOf.initialize(this, prizes, participants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prizes, participants) { 
        obj['prizes'] = prizes;
        obj['participants'] = participants;
    }

    /**
     * Constructs a <code>RaffleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RaffleAllOf} obj Optional instance to populate.
     * @return {module:model/RaffleAllOf} The populated <code>RaffleAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RaffleAllOf();

            if (data.hasOwnProperty('prizes')) {
                obj['prizes'] = ApiClient.convertToType(data['prizes'], [Prize]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [RaffleResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Prize>} prizes
 */
RaffleAllOf.prototype['prizes'] = undefined;

/**
 * @member {Array.<module:model/Participant>} participants
 */
RaffleAllOf.prototype['participants'] = undefined;

/**
 * @member {Array.<module:model/RaffleResult>} results
 */
RaffleAllOf.prototype['results'] = undefined;






export default RaffleAllOf;

