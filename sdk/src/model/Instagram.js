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
import BaseDraw from './BaseDraw';
import DrawMetadata from './DrawMetadata';
import InstagramAllOf from './InstagramAllOf';
import InstagramResult from './InstagramResult';
import Prize from './Prize';

/**
 * The Instagram model module.
 * @module model/Instagram
 * @version 0.0.1
 */
class Instagram {
    /**
     * Constructs a new <code>Instagram</code>.
     * @alias module:model/Instagram
     * @implements module:model/BaseDraw
     * @implements module:model/InstagramAllOf
     * @param prizes {Array.<module:model/Prize>} 
     * @param useLikes {Boolean} 
     * @param useComments {Boolean} 
     * @param postUrl {String} 
     */
    constructor(prizes, useLikes, useComments, postUrl) { 
        BaseDraw.initialize(this);InstagramAllOf.initialize(this, prizes, useLikes, useComments, postUrl);
        Instagram.initialize(this, prizes, useLikes, useComments, postUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prizes, useLikes, useComments, postUrl) { 
        obj['prizes'] = prizes;
        obj['use_likes'] = useLikes || false;
        obj['use_comments'] = useComments || false;
        obj['post_url'] = postUrl;
    }

    /**
     * Constructs a <code>Instagram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Instagram} obj Optional instance to populate.
     * @return {module:model/Instagram} The populated <code>Instagram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Instagram();
            BaseDraw.constructFromObject(data, obj);
            InstagramAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('prizes')) {
                obj['prizes'] = ApiClient.convertToType(data['prizes'], [Prize]);
            }
            if (data.hasOwnProperty('use_likes')) {
                obj['use_likes'] = ApiClient.convertToType(data['use_likes'], 'Boolean');
            }
            if (data.hasOwnProperty('use_comments')) {
                obj['use_comments'] = ApiClient.convertToType(data['use_comments'], 'Boolean');
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
 * @member {String} id
 */
Instagram.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Instagram.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Instagram.prototype['updated_at'] = undefined;

/**
 * @member {String} title
 */
Instagram.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Instagram.prototype['description'] = undefined;

/**
 * @member {String} private_id
 */
Instagram.prototype['private_id'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
Instagram.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Instagram.PaymentsEnum>} payments
 */
Instagram.prototype['payments'] = undefined;

/**
 * @member {Array.<module:model/Prize>} prizes
 */
Instagram.prototype['prizes'] = undefined;

/**
 * @member {Boolean} use_likes
 * @default false
 */
Instagram.prototype['use_likes'] = false;

/**
 * @member {Boolean} use_comments
 * @default false
 */
Instagram.prototype['use_comments'] = false;

/**
 * @member {String} post_url
 */
Instagram.prototype['post_url'] = undefined;

/**
 * @member {Array.<module:model/InstagramResult>} results
 */
Instagram.prototype['results'] = undefined;


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
// Implement InstagramAllOf interface:
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
 * @member {Boolean} use_comments
 * @default false
 */
InstagramAllOf.prototype['use_comments'] = false;
/**
 * @member {String} post_url
 */
InstagramAllOf.prototype['post_url'] = undefined;
/**
 * @member {Array.<module:model/InstagramResult>} results
 */
InstagramAllOf.prototype['results'] = undefined;



/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */
Instagram['PaymentsEnum'] = {

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



export default Instagram;

