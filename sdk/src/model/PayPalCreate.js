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
 * The PayPalCreate model module.
 * @module model/PayPalCreate
 * @version 0.0.1
 */
class PayPalCreate {
    /**
     * Constructs a new <code>PayPalCreate</code>.
     * @alias module:model/PayPalCreate
     */
    constructor() { 
        
        PayPalCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayPalCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayPalCreate} obj Optional instance to populate.
     * @return {module:model/PayPalCreate} The populated <code>PayPalCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayPalCreate();

            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], ['String']);
            }
            if (data.hasOwnProperty('draw_url')) {
                obj['draw_url'] = ApiClient.convertToType(data['draw_url'], 'String');
            }
            if (data.hasOwnProperty('draw_id')) {
                obj['draw_id'] = ApiClient.convertToType(data['draw_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PayPalCreate.OptionsEnum>} options
 */
PayPalCreate.prototype['options'] = undefined;

/**
 * @member {String} draw_url
 */
PayPalCreate.prototype['draw_url'] = undefined;

/**
 * @member {String} draw_id
 */
PayPalCreate.prototype['draw_id'] = undefined;





/**
 * Allowed values for the <code>options</code> property.
 * @enum {String}
 * @readonly
 */
PayPalCreate['OptionsEnum'] = {

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



export default PayPalCreate;

