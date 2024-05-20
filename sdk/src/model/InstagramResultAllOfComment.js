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

/**
 * The InstagramResultAllOfComment model module.
 * @module model/InstagramResultAllOfComment
 * @version 1.0.0
 */
class InstagramResultAllOfComment {
    /**
     * Constructs a new <code>InstagramResultAllOfComment</code>.
     * @alias module:model/InstagramResultAllOfComment
     */
    constructor() { 
        
        InstagramResultAllOfComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstagramResultAllOfComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstagramResultAllOfComment} obj Optional instance to populate.
     * @return {module:model/InstagramResultAllOfComment} The populated <code>InstagramResultAllOfComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstagramResultAllOfComment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userpic')) {
                obj['userpic'] = ApiClient.convertToType(data['userpic'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstagramResultAllOfComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstagramResultAllOfComment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['userpic'] && !(typeof data['userpic'] === 'string' || data['userpic'] instanceof String)) {
            throw new Error("Expected the field `userpic` to be a primitive type in the JSON string but got " + data['userpic']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
InstagramResultAllOfComment.prototype['id'] = undefined;

/**
 * @member {String} username
 */
InstagramResultAllOfComment.prototype['username'] = undefined;

/**
 * @member {String} userpic
 */
InstagramResultAllOfComment.prototype['userpic'] = undefined;

/**
 * @member {String} text
 */
InstagramResultAllOfComment.prototype['text'] = undefined;






export default InstagramResultAllOfComment;

