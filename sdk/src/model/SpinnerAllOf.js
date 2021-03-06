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
import SpinnerResult from './SpinnerResult';

/**
 * The SpinnerAllOf model module.
 * @module model/SpinnerAllOf
 * @version 0.0.1
 */
class SpinnerAllOf {
    /**
     * Constructs a new <code>SpinnerAllOf</code>.
     * @alias module:model/SpinnerAllOf
     */
    constructor() { 
        
        SpinnerAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SpinnerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpinnerAllOf} obj Optional instance to populate.
     * @return {module:model/SpinnerAllOf} The populated <code>SpinnerAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpinnerAllOf();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [SpinnerResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SpinnerResult>} results
 */
SpinnerAllOf.prototype['results'] = undefined;






export default SpinnerAllOf;

