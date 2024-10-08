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
import type { BaseDraw } from './BaseDraw';
import {
    BaseDrawFromJSON,
    BaseDrawFromJSONTyped,
    BaseDrawToJSON,
} from './BaseDraw';
import type { LetterResult } from './LetterResult';
import {
    LetterResultFromJSON,
    LetterResultFromJSONTyped,
    LetterResultToJSON,
} from './LetterResult';

/**
 * 
 * @export
 * @interface Letter
 */
export interface Letter extends BaseDraw {
    /**
     * 
     * @type {number}
     * @memberof Letter
     */
    numberOfResults: number;
    /**
     * 
     * @type {boolean}
     * @memberof Letter
     */
    allowRepeatedResults: boolean;
    /**
     * 
     * @type {Array<LetterResult>}
     * @memberof Letter
     */
    readonly results: Array<LetterResult>;
}



/**
 * Check if a given object implements the Letter interface.
 */
export function instanceOfLetter(value: object): value is Letter {
    if (!('numberOfResults' in value) || value['numberOfResults'] === undefined) return false;
    if (!('allowRepeatedResults' in value) || value['allowRepeatedResults'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function LetterFromJSON(json: any): Letter {
    return LetterFromJSONTyped(json, false);
}

export function LetterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Letter {
    if (json == null) {
        return json;
    }
    return {
        ...BaseDrawFromJSONTyped(json, ignoreDiscriminator),
        'numberOfResults': json['number_of_results'],
        'allowRepeatedResults': json['allow_repeated_results'],
        'results': ((json['results'] as Array<any>).map(LetterResultFromJSON)),
    };
}

export function LetterToJSON(value?: Omit<Letter, 'results'|'id'|'created_at'|'updated_at'|'private_id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseDrawToJSON(value),
        'number_of_results': value['numberOfResults'],
        'allow_repeated_results': value['allowRepeatedResults'],
    };
}

