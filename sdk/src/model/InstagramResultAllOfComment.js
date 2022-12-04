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
 * The InstagramResultAllOfComment model module.
 * @module model/InstagramResultAllOfComment
 * @version 0.0.1
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

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
InstagramResultAllOfComment.prototype['username'] = undefined;

/**
 * @member {String} text
 */
InstagramResultAllOfComment.prototype['text'] = undefined;






export default InstagramResultAllOfComment;

