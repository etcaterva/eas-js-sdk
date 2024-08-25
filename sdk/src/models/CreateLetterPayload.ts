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
 * @interface CreateLetterPayload
 */
export interface CreateLetterPayload extends BaseFields {
    /**
     * 
     * @type {number}
     * @memberof CreateLetterPayload
     */
    numberOfResults: number;
    /**
     * 
     * @type {boolean}
     * @memberof CreateLetterPayload
     */
    allowRepeatedResults: boolean;
}



/**
 * Check if a given object implements the CreateLetterPayload interface.
 */
export function instanceOfCreateLetterPayload(value: object): value is CreateLetterPayload {
    if (!('numberOfResults' in value) || value['numberOfResults'] === undefined) return false;
    if (!('allowRepeatedResults' in value) || value['allowRepeatedResults'] === undefined) return false;
    return true;
}

export function CreateLetterPayloadFromJSON(json: any): CreateLetterPayload {
    return CreateLetterPayloadFromJSONTyped(json, false);
}

export function CreateLetterPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLetterPayload {
    if (json == null) {
        return json;
    }
    return {
        ...BaseFieldsFromJSONTyped(json, ignoreDiscriminator),
        'numberOfResults': json['number_of_results'],
        'allowRepeatedResults': json['allow_repeated_results'],
    };
}

export function CreateLetterPayloadToJSON(value?: CreateLetterPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseFieldsToJSON(value),
        'number_of_results': value['numberOfResults'],
        'allow_repeated_results': value['allowRepeatedResults'],
    };
}
