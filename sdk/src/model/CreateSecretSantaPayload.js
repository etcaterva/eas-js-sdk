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
import CreateSecretSantaPayloadParticipantsInner from './CreateSecretSantaPayloadParticipantsInner';

/**
 * The CreateSecretSantaPayload model module.
 * @module model/CreateSecretSantaPayload
 * @version 1.0.0
 */
class CreateSecretSantaPayload {
    /**
     * Constructs a new <code>CreateSecretSantaPayload</code>.
     * @alias module:model/CreateSecretSantaPayload
     * @param language {module:model/CreateSecretSantaPayload.LanguageEnum} 
     * @param participants {Array.<module:model/CreateSecretSantaPayloadParticipantsInner>} 
     */
    constructor(language, participants) { 
        
        CreateSecretSantaPayload.initialize(this, language, participants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, language, participants) { 
        obj['language'] = language;
        obj['participants'] = participants;
    }

    /**
     * Constructs a <code>CreateSecretSantaPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSecretSantaPayload} obj Optional instance to populate.
     * @return {module:model/CreateSecretSantaPayload} The populated <code>CreateSecretSantaPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSecretSantaPayload();

            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [CreateSecretSantaPayloadParticipantsInner]);
            }
            if (data.hasOwnProperty('admin_email')) {
                obj['admin_email'] = ApiClient.convertToType(data['admin_email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSecretSantaPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSecretSantaPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSecretSantaPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        if (data['participants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['participants'])) {
                throw new Error("Expected the field `participants` to be an array in the JSON data but got " + data['participants']);
            }
            // validate the optional field `participants` (array)
            for (const item of data['participants']) {
                CreateSecretSantaPayloadParticipantsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['admin_email'] && !(typeof data['admin_email'] === 'string' || data['admin_email'] instanceof String)) {
            throw new Error("Expected the field `admin_email` to be a primitive type in the JSON string but got " + data['admin_email']);
        }

        return true;
    }


}

CreateSecretSantaPayload.RequiredProperties = ["language", "participants"];

/**
 * @member {module:model/CreateSecretSantaPayload.LanguageEnum} language
 */
CreateSecretSantaPayload.prototype['language'] = undefined;

/**
 * @member {Array.<module:model/CreateSecretSantaPayloadParticipantsInner>} participants
 */
CreateSecretSantaPayload.prototype['participants'] = undefined;

/**
 * @member {String} admin_email
 */
CreateSecretSantaPayload.prototype['admin_email'] = undefined;





/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */
CreateSecretSantaPayload['LanguageEnum'] = {

    /**
     * value: "es"
     * @const
     */
    "es": "es",

    /**
     * value: "en"
     * @const
     */
    "en": "en"
};



export default CreateSecretSantaPayload;

