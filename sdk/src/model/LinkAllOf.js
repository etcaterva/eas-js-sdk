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
import LinkResult from './LinkResult';

/**
 * The LinkAllOf model module.
 * @module model/LinkAllOf
 * @version 0.0.1
 */
class LinkAllOf {
    /**
     * Constructs a new <code>LinkAllOf</code>.
     * @alias module:model/LinkAllOf
     */
    constructor() { 
        
        LinkAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkAllOf} obj Optional instance to populate.
     * @return {module:model/LinkAllOf} The populated <code>LinkAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkAllOf();

            if (data.hasOwnProperty('items_set1')) {
                obj['items_set1'] = ApiClient.convertToType(data['items_set1'], ['String']);
            }
            if (data.hasOwnProperty('items_set2')) {
                obj['items_set2'] = ApiClient.convertToType(data['items_set2'], ['String']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LinkResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} items_set1
 */
LinkAllOf.prototype['items_set1'] = undefined;

/**
 * @member {Array.<String>} items_set2
 */
LinkAllOf.prototype['items_set2'] = undefined;

/**
 * @member {Array.<module:model/LinkResult>} results
 */
LinkAllOf.prototype['results'] = undefined;






export default LinkAllOf;
