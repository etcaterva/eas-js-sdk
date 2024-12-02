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
import ParticipantField from './ParticipantField';
import ShiftsFields from './ShiftsFields';
import ShiftsInterval from './ShiftsInterval';
import ShiftsResult from './ShiftsResult';

/**
 * The Shifts model module.
 * @module model/Shifts
 * @version 1.0.0
 */
class Shifts {
    /**
     * Constructs a new <code>Shifts</code>.
     * @alias module:model/Shifts
     * @implements module:model/BaseDraw
     * @implements module:model/ShiftsFields
     * @param id {String} 
     * @param createdAt {Date} 
     * @param title {String} 
     * @param description {String} 
     * @param payments {Array.<module:model/Shifts.PaymentsEnum>} 
     * @param intervals {Array.<module:model/ShiftsInterval>} 
     * @param participants {Array.<module:model/ParticipantField>} 
     * @param results {Array.<module:model/ShiftsResult>} 
     */
    constructor(id, createdAt, title, description, payments, intervals, participants, results) { 
        BaseDraw.initialize(this, id, createdAt, title, description, payments);ShiftsFields.initialize(this, intervals, participants);
        Shifts.initialize(this, id, createdAt, title, description, payments, intervals, participants, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, title, description, payments, intervals, participants, results) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['title'] = title;
        obj['description'] = description;
        obj['payments'] = payments;
        obj['intervals'] = intervals;
        obj['participants'] = participants;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>Shifts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shifts} obj Optional instance to populate.
     * @return {module:model/Shifts} The populated <code>Shifts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Shifts();
            BaseDraw.constructFromObject(data, obj);
            ShiftsFields.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [ShiftsInterval]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [ParticipantField]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ShiftsResult]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Shifts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Shifts</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Shifts.RequiredProperties) {
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
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                ShiftsResult.validateJSON(item);
            };
        }

        return true;
    }


}

Shifts.RequiredProperties = ["id", "created_at", "title", "description", "payments", "intervals", "participants", "results"];

/**
 * @member {String} id
 */
Shifts.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Shifts.prototype['created_at'] = undefined;

/**
 * @member {String} title
 */
Shifts.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Shifts.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
Shifts.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Shifts.PaymentsEnum>} payments
 */
Shifts.prototype['payments'] = undefined;

/**
 * @member {Date} updated_at
 */
Shifts.prototype['updated_at'] = undefined;

/**
 * @member {String} private_id
 */
Shifts.prototype['private_id'] = undefined;

/**
 * @member {Array.<module:model/ShiftsInterval>} intervals
 */
Shifts.prototype['intervals'] = undefined;

/**
 * @member {Array.<module:model/ParticipantField>} participants
 */
Shifts.prototype['participants'] = undefined;

/**
 * @member {Array.<module:model/ShiftsResult>} results
 */
Shifts.prototype['results'] = undefined;


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
// Implement ShiftsFields interface:
/**
 * @member {Array.<module:model/ShiftsInterval>} intervals
 */
ShiftsFields.prototype['intervals'] = undefined;
/**
 * @member {Array.<module:model/ParticipantField>} participants
 */
ShiftsFields.prototype['participants'] = undefined;



/**
 * Allowed values for the <code>payments</code> property.
 * @enum {String}
 * @readonly
 */
Shifts['PaymentsEnum'] = {

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



export default Shifts;

