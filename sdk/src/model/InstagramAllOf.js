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
import InstagramResult from './InstagramResult';
import Prize from './Prize';

/**
 * The InstagramAllOf model module.
 * @module model/InstagramAllOf
 * @version 0.0.1
 */
class InstagramAllOf {
    /**
     * Constructs a new <code>InstagramAllOf</code>.
     * @alias module:model/InstagramAllOf
     * @param prizes {Array.<module:model/Prize>} 
     * @param useLikes {Boolean} 
     * @param minMentions {Number} 
     * @param postUrl {String} 
     */
    constructor(prizes, useLikes, minMentions, postUrl) { 
        
        InstagramAllOf.initialize(this, prizes, useLikes, minMentions, postUrl);
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
     * Constructs a <code>InstagramAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstagramAllOf} obj Optional instance to populate.
     * @return {module:model/InstagramAllOf} The populated <code>InstagramAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstagramAllOf();

            if (data.hasOwnProperty('prizes')) {
                obj['prizes'] = ApiClient.convertToType(data['prizes'], [Prize]);
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
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [InstagramResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Prize>} prizes
 */
InstagramAllOf.prototype['prizes'] = undefined;

/**
 * @member {Boolean} use_likes
 * @default false
 */
InstagramAllOf.prototype['use_likes'] = false;

/**
 * @member {Number} min_mentions
 * @default 0
 */
InstagramAllOf.prototype['min_mentions'] = 0;

/**
 * @member {String} post_url
 */
InstagramAllOf.prototype['post_url'] = undefined;

/**
 * @member {Array.<module:model/InstagramResult>} results
 */
InstagramAllOf.prototype['results'] = undefined;






export default InstagramAllOf;

