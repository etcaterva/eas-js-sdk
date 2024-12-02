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
import ParticipantField from './ParticipantField';
import ShiftsFields from './ShiftsFields';
import ShiftsInterval from './ShiftsInterval';

/**
 * The CreateShiftsPayload model module.
 * @module model/CreateShiftsPayload
 * @version 1.0.0
 */
class CreateShiftsPayload {
    /**
     * Constructs a new <code>CreateShiftsPayload</code>.
     * @alias module:model/CreateShiftsPayload
     * @implements module:model/BaseFieldsCreate
     * @implements module:model/ShiftsFields
     * @param intervals {Array.<module:model/ShiftsInterval>} 
     * @param participants {Array.<module:model/ParticipantField>} 
     */
    constructor(intervals, participants) { 
        BaseFieldsCreate.initialize(this);ShiftsFields.initialize(this, intervals, participants);
        CreateShiftsPayload.initialize(this, intervals, participants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, intervals, participants) { 
        obj['intervals'] = intervals;
        obj['participants'] = participants;
    }

    /**
     * Constructs a <code>CreateShiftsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateShiftsPayload} obj Optional instance to populate.
     * @return {module:model/CreateShiftsPayload} The populated <code>CreateShiftsPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateShiftsPayload();
            BaseFieldsCreate.constructFromObject(data, obj);
            ShiftsFields.constructFromObject(data, obj);

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [DrawMetadata]);
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [ShiftsInterval]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [ParticipantField]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateShiftsPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateShiftsPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateShiftsPayload.RequiredProperties) {
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
        if (data['intervals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['intervals'])) {
                throw new Error("Expected the field `intervals` to be an array in the JSON data but got " + data['intervals']);
            }
            // validate the optional field `intervals` (array)
            for (const item of data['intervals']) {
                ShiftsInterval.validateJSON(item);
            };
        }
        if (data['participants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['participants'])) {
                throw new Error("Expected the field `participants` to be an array in the JSON data but got " + data['participants']);
            }
            // validate the optional field `participants` (array)
            for (const item of data['participants']) {
                ParticipantField.validateJSON(item);
            };
        }

        return true;
    }


}

CreateShiftsPayload.RequiredProperties = ["intervals", "participants"];

/**
 * @member {String} title
 */
CreateShiftsPayload.prototype['title'] = undefined;

/**
 * @member {String} description
 */
CreateShiftsPayload.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
CreateShiftsPayload.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/ShiftsInterval>} intervals
 */
CreateShiftsPayload.prototype['intervals'] = undefined;

/**
 * @member {Array.<module:model/ParticipantField>} participants
 */
CreateShiftsPayload.prototype['participants'] = undefined;


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
// Implement ShiftsFields interface:
/**
 * @member {Array.<module:model/ShiftsInterval>} intervals
 */
ShiftsFields.prototype['intervals'] = undefined;
/**
 * @member {Array.<module:model/ParticipantField>} participants
 */
ShiftsFields.prototype['participants'] = undefined;




export default CreateShiftsPayload;

