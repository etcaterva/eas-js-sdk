/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseObject from './BaseObject';
import DrawMetadata from './DrawMetadata';

/**
 * The BaseDraw model module.
 * @module model/BaseDraw
 * @version 1.0.0
 */
class BaseDraw {
    /**
     * Constructs a new <code>BaseDraw</code>.
     * @alias module:model/BaseDraw
     * @implements module:model/BaseObject
     */
    constructor() { 
        BaseObject.initialize(this);
        BaseDraw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseDraw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseDraw} obj Optional instance to populate.
     * @return {module:model/BaseDraw} The populated <code>BaseDraw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseDraw();
            BaseObject.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
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
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseDraw</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseDraw</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['private_id'] && !(typeof data['private_id'] === 'string' || data['private_id'] instanceof String)) {
            throw new Error("Expected the field `private_id` to be a primitive type in the JSON string but got " + data['private_id']);
        }
        if (data['metadata']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['metadata'])) {
                throw new Error("Expected the field `metadata` to be an array in the JSON data but got " + data['metadata']);
            }
            // validate the optional field `metadata` (array)
            for (const item of data['metadata']) {
                DrawMetadata.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['payments'])) {
            throw new Error("Expected the field `payments` to be an array in the JSON data but got " + data['payments']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
BaseDraw.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
BaseDraw.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
BaseDraw.prototype['updated_at'] = undefined;

/**
 * @member {String} title
 */
BaseDraw.prototype['title'] = undefined;

/**
 * @member {String} description
 */
BaseDraw.prototype['description'] = undefined;

/**
 * @member {String} private_id
 */
BaseDraw.prototype['private_id'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
BaseDraw.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/BaseDraw.PaymentsEnum>} payments
 */
BaseDraw.prototype['payments'] = undefined;


// Implement BaseObject interface:
/**
 * @member {String} id
 */
BaseObject.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseObject.prototype['created_at'] = undefined;



/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */
BaseDraw['PaymentsEnum'] = {

    /**
     * value: "CERTIFIED"
     * @const
     */
    "CERTIFIED": "CERTIFIED",

    /**
     * value: "ADFREE"
     * @const
     */
    "ADFREE": "ADFREE",

    /**
     * value: "SUPPORT"
     * @const
     */
    "SUPPORT": "SUPPORT"
};



export default BaseDraw;

