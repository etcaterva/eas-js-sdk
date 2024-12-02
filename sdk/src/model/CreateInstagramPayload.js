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
import BaseFieldsCreate from './BaseFieldsCreate';
import DrawMetadata from './DrawMetadata';
import InstagramFields from './InstagramFields';
import PrizeField from './PrizeField';

/**
 * The CreateInstagramPayload model module.
 * @module model/CreateInstagramPayload
 * @version 1.0.0
 */
class CreateInstagramPayload {
    /**
     * Constructs a new <code>CreateInstagramPayload</code>.
     * @alias module:model/CreateInstagramPayload
     * @implements module:model/BaseFieldsCreate
     * @implements module:model/InstagramFields
     * @param prizes {Array.<module:model/PrizeField>} 
     * @param useLikes {Boolean} 
     * @param minMentions {Number} 
     * @param postUrl {String} 
     */
    constructor(prizes, useLikes, minMentions, postUrl) { 
        BaseFieldsCreate.initialize(this);InstagramFields.initialize(this, prizes, useLikes, minMentions, postUrl);
        CreateInstagramPayload.initialize(this, prizes, useLikes, minMentions, postUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prizes, useLikes, minMentions, postUrl) { 
        obj['prizes'] = prizes;
        obj['use_likes'] = useLikes || false;
        obj['min_mentions'] = minMentions || 0;
        obj['post_url'] = postUrl;
    }

    /**
     * Constructs a <code>CreateInstagramPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInstagramPayload} obj Optional instance to populate.
     * @return {module:model/CreateInstagramPayload} The populated <code>CreateInstagramPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInstagramPayload();
            BaseFieldsCreate.constructFromObject(data, obj);
            InstagramFields.constructFromObject(data, obj);

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [DrawMetadata]);
            }
            if (data.hasOwnProperty('prizes')) {
                obj['prizes'] = ApiClient.convertToType(data['prizes'], [PrizeField]);
            }
            if (data.hasOwnProperty('use_likes')) {
                obj['use_likes'] = ApiClient.convertToType(data['use_likes'], 'Boolean');
            }
            if (data.hasOwnProperty('min_mentions')) {
                obj['min_mentions'] = ApiClient.convertToType(data['min_mentions'], 'Number');
            }
            if (data.hasOwnProperty('post_url')) {
                obj['post_url'] = ApiClient.convertToType(data['post_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateInstagramPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateInstagramPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateInstagramPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['prizes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['prizes'])) {
                throw new Error("Expected the field `prizes` to be an array in the JSON data but got " + data['prizes']);
            }
            // validate the optional field `prizes` (array)
            for (const item of data['prizes']) {
                PrizeField.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['post_url'] && !(typeof data['post_url'] === 'string' || data['post_url'] instanceof String)) {
            throw new Error("Expected the field `post_url` to be a primitive type in the JSON string but got " + data['post_url']);
        }

        return true;
    }


}

CreateInstagramPayload.RequiredProperties = ["prizes", "use_likes", "min_mentions", "post_url"];

/**
 * @member {String} title
 */
CreateInstagramPayload.prototype['title'] = undefined;

/**
 * @member {String} description
 */
CreateInstagramPayload.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
CreateInstagramPayload.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/PrizeField>} prizes
 */
CreateInstagramPayload.prototype['prizes'] = undefined;

/**
 * @member {Boolean} use_likes
 * @default false
 */
CreateInstagramPayload.prototype['use_likes'] = false;

/**
 * @member {Number} min_mentions
 * @default 0
 */
CreateInstagramPayload.prototype['min_mentions'] = 0;

/**
 * @member {String} post_url
 */
CreateInstagramPayload.prototype['post_url'] = undefined;


// Implement BaseFieldsCreate interface:
/**
 * @member {String} title
 */
BaseFieldsCreate.prototype['title'] = undefined;
/**
 * @member {String} description
 */
BaseFieldsCreate.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
BaseFieldsCreate.prototype['metadata'] = undefined;
// Implement InstagramFields interface:
/**
 * @member {Array.<module:model/PrizeField>} prizes
 */
InstagramFields.prototype['prizes'] = undefined;
/**
 * @member {Boolean} use_likes
 * @default false
 */
InstagramFields.prototype['use_likes'] = false;
/**
 * @member {Number} min_mentions
 * @default 0
 */
InstagramFields.prototype['min_mentions'] = 0;
/**
 * @member {String} post_url
 */
InstagramFields.prototype['post_url'] = undefined;




export default CreateInstagramPayload;

