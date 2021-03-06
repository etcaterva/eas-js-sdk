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

/**
 * The LinkResultAllOfValue model module.
 * @module model/LinkResultAllOfValue
 * @version 0.0.1
 */
class LinkResultAllOfValue {
    /**
     * Constructs a new <code>LinkResultAllOfValue</code>.
     * @alias module:model/LinkResultAllOfValue
     */
    constructor() { 
        
        LinkResultAllOfValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkResultAllOfValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkResultAllOfValue} obj Optional instance to populate.
     * @return {module:model/LinkResultAllOfValue} The populated <code>LinkResultAllOfValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkResultAllOfValue();

            if (data.hasOwnProperty('element1')) {
                obj['element1'] = ApiClient.convertToType(data['element1'], 'String');
            }
            if (data.hasOwnProperty('element2')) {
                obj['element2'] = ApiClient.convertToType(data['element2'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} element1
 */
LinkResultAllOfValue.prototype['element1'] = undefined;

/**
 * @member {String} element2
 */
LinkResultAllOfValue.prototype['element2'] = undefined;






export default LinkResultAllOfValue;

