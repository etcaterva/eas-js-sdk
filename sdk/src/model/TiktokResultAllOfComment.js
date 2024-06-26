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
 * The TiktokResultAllOfComment model module.
 * @module model/TiktokResultAllOfComment
 * @version 1.0.0
 */
class TiktokResultAllOfComment {
    /**
     * Constructs a new <code>TiktokResultAllOfComment</code>.
     * @alias module:model/TiktokResultAllOfComment
     */
    constructor() { 
        
        TiktokResultAllOfComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TiktokResultAllOfComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TiktokResultAllOfComment} obj Optional instance to populate.
     * @return {module:model/TiktokResultAllOfComment} The populated <code>TiktokResultAllOfComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TiktokResultAllOfComment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userpic')) {
                obj['userpic'] = ApiClient.convertToType(data['userpic'], 'String');
            }
            if (data.hasOwnProperty('userid')) {
                obj['userid'] = ApiClient.convertToType(data['userid'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TiktokResultAllOfComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TiktokResultAllOfComment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
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
        if (data['userid'] && !(typeof data['userid'] === 'string' || data['userid'] instanceof String)) {
            throw new Error("Expected the field `userid` to be a primitive type in the JSON string but got " + data['userid']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
TiktokResultAllOfComment.prototype['id'] = undefined;

/**
 * @member {String} text
 */
TiktokResultAllOfComment.prototype['text'] = undefined;

/**
 * @member {String} username
 */
TiktokResultAllOfComment.prototype['username'] = undefined;

/**
 * @member {String} userpic
 */
TiktokResultAllOfComment.prototype['userpic'] = undefined;

/**
 * @member {String} userid
 */
TiktokResultAllOfComment.prototype['userid'] = undefined;

/**
 * @member {String} url
 */
TiktokResultAllOfComment.prototype['url'] = undefined;






export default TiktokResultAllOfComment;

