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
import DrawMetadata from './DrawMetadata';

/**
 * The BaseDrawAllOf model module.
 * @module model/BaseDrawAllOf
 * @version 0.0.1
 */
class BaseDrawAllOf {
    /**
     * Constructs a new <code>BaseDrawAllOf</code>.
     * @alias module:model/BaseDrawAllOf
     */
    constructor() { 
        
        BaseDrawAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseDrawAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseDrawAllOf} obj Optional instance to populate.
     * @return {module:model/BaseDrawAllOf} The populated <code>BaseDrawAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseDrawAllOf();

            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('private_id')) {
                obj['private_id'] = ApiClient.convertToType(data['private_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [DrawMetadata]);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} updated_at
 */
BaseDrawAllOf.prototype['updated_at'] = undefined;

/**
 * @member {String} title
 */
BaseDrawAllOf.prototype['title'] = undefined;

/**
 * @member {String} description
 */
BaseDrawAllOf.prototype['description'] = undefined;

/**
 * @member {String} private_id
 */
BaseDrawAllOf.prototype['private_id'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
BaseDrawAllOf.prototype['metadata'] = undefined;






export default BaseDrawAllOf;

