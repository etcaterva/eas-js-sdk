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
import BaseDraw from './BaseDraw';
import DrawMetadata from './DrawMetadata';
import LinkFields from './LinkFields';
import LinkResult from './LinkResult';

/**
 * The Link model module.
 * @module model/Link
 * @version 1.0.0
 */
class Link {
    /**
     * Constructs a new <code>Link</code>.
     * @alias module:model/Link
     * @implements module:model/BaseDraw
     * @implements module:model/LinkFields
     * @param id {String} 
     * @param createdAt {Date} 
     * @param title {String} 
     * @param description {String} 
     * @param payments {Array.<module:model/Link.PaymentsEnum>} 
     * @param itemsSet1 {Array.<String>} 
     * @param itemsSet2 {Array.<String>} 
     * @param results {Array.<module:model/LinkResult>} 
     */
    constructor(id, createdAt, title, description, payments, itemsSet1, itemsSet2, results) { 
        BaseDraw.initialize(this, id, createdAt, title, description, payments);LinkFields.initialize(this, itemsSet1, itemsSet2);
        Link.initialize(this, id, createdAt, title, description, payments, itemsSet1, itemsSet2, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, title, description, payments, itemsSet1, itemsSet2, results) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['title'] = title;
        obj['description'] = description;
        obj['payments'] = payments;
        obj['items_set1'] = itemsSet1;
        obj['items_set2'] = itemsSet2;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Link} obj Optional instance to populate.
     * @return {module:model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Link();
            BaseDraw.constructFromObject(data, obj);
            LinkFields.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [DrawMetadata]);
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], ['String']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('private_id')) {
                obj['private_id'] = ApiClient.convertToType(data['private_id'], 'String');
            }
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

    /**
     * Validates the JSON data with respect to <code>Link</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Link</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Link.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
        // ensure the json data is a string
        if (data['private_id'] && !(typeof data['private_id'] === 'string' || data['private_id'] instanceof String)) {
            throw new Error("Expected the field `private_id` to be a primitive type in the JSON string but got " + data['private_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items_set1'])) {
            throw new Error("Expected the field `items_set1` to be an array in the JSON data but got " + data['items_set1']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items_set2'])) {
            throw new Error("Expected the field `items_set2` to be an array in the JSON data but got " + data['items_set2']);
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                LinkResult.validateJSON(item);
            };
        }

        return true;
    }


}

Link.RequiredProperties = ["id", "created_at", "title", "description", "payments", "items_set1", "items_set2", "results"];

/**
 * @member {String} id
 */
Link.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Link.prototype['created_at'] = undefined;

/**
 * @member {String} title
 */
Link.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Link.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
Link.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Link.PaymentsEnum>} payments
 */
Link.prototype['payments'] = undefined;

/**
 * @member {Date} updated_at
 */
Link.prototype['updated_at'] = undefined;

/**
 * @member {String} private_id
 */
Link.prototype['private_id'] = undefined;

/**
 * @member {Array.<String>} items_set1
 */
Link.prototype['items_set1'] = undefined;

/**
 * @member {Array.<String>} items_set2
 */
Link.prototype['items_set2'] = undefined;

/**
 * @member {Array.<module:model/LinkResult>} results
 */
Link.prototype['results'] = undefined;


// Implement BaseDraw interface:
/**
 * @member {String} id
 */
BaseDraw.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseDraw.prototype['created_at'] = undefined;
/**
 * @member {String} title
 */
BaseDraw.prototype['title'] = undefined;
/**
 * @member {String} description
 */
BaseDraw.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
BaseDraw.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/BaseDraw.PaymentsEnum>} payments
 */
BaseDraw.prototype['payments'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseDraw.prototype['updated_at'] = undefined;
/**
 * @member {String} private_id
 */
BaseDraw.prototype['private_id'] = undefined;
// Implement LinkFields interface:
/**
 * @member {Array.<String>} items_set1
 */
LinkFields.prototype['items_set1'] = undefined;
/**
 * @member {Array.<String>} items_set2
 */
LinkFields.prototype['items_set2'] = undefined;



/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */
Link['PaymentsEnum'] = {

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



export default Link;

