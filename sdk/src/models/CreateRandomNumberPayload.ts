/* tslint:disable */
/* eslint-disable */
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
 */

import { mapValues } from '../runtime';
import type { DrawMetadata } from './DrawMetadata';
import {
    DrawMetadataFromJSON,
    DrawMetadataFromJSONTyped,
    DrawMetadataToJSON,
} from './DrawMetadata';
import type { BaseFields } from './BaseFields';
import {
    BaseFieldsFromJSON,
    BaseFieldsFromJSONTyped,
    BaseFieldsToJSON,
} from './BaseFields';

/**
 * 
 * @export
 * @interface CreateRandomNumberPayload
 */
export interface CreateRandomNumberPayload extends BaseFields {
    /**
     * 
     * @type {number}
     * @memberof CreateRandomNumberPayload
     */
    rangeMin: number;
    /**
     * 
     * @type {number}
     * @memberof CreateRandomNumberPayload
     */
    rangeMax: number;
    /**
     * 
     * @type {number}
     * @memberof CreateRandomNumberPayload
     */
    numberOfResults: number;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRandomNumberPayload
     */
    allowRepeatedResults: boolean;
}



/**
 * Check if a given object implements the CreateRandomNumberPayload interface.
 */
export function instanceOfCreateRandomNumberPayload(value: object): value is CreateRandomNumberPayload {
    if (!('rangeMin' in value) || value['rangeMin'] === undefined) return false;
    if (!('rangeMax' in value) || value['rangeMax'] === undefined) return false;
    if (!('numberOfResults' in value) || value['numberOfResults'] === undefined) return false;
    if (!('allowRepeatedResults' in value) || value['allowRepeatedResults'] === undefined) return false;
    return true;
}

export function CreateRandomNumberPayloadFromJSON(json: any): CreateRandomNumberPayload {
    return CreateRandomNumberPayloadFromJSONTyped(json, false);
}

export function CreateRandomNumberPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRandomNumberPayload {
    if (json == null) {
        return json;
    }
    return {
        ...BaseFieldsFromJSONTyped(json, ignoreDiscriminator),
        'rangeMin': json['range_min'],
        'rangeMax': json['range_max'],
        'numberOfResults': json['number_of_results'],
        'allowRepeatedResults': json['allow_repeated_results'],
    };
}

export function CreateRandomNumberPayloadToJSON(value?: CreateRandomNumberPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseFieldsToJSON(value),
        'range_min': value['rangeMin'],
        'range_max': value['rangeMax'],
        'number_of_results': value['numberOfResults'],
        'allow_repeated_results': value['allowRepeatedResults'],
    };
}

