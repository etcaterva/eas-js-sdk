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
import type { BaseFieldsCreate } from './BaseFieldsCreate';
import {
    BaseFieldsCreateFromJSON,
    BaseFieldsCreateFromJSONTyped,
    BaseFieldsCreateToJSON,
} from './BaseFieldsCreate';
import type { DrawMetadata } from './DrawMetadata';
import {
    DrawMetadataFromJSON,
    DrawMetadataFromJSONTyped,
    DrawMetadataToJSON,
} from './DrawMetadata';
import type { ParticipantField } from './ParticipantField';
import {
    ParticipantFieldFromJSON,
    ParticipantFieldFromJSONTyped,
    ParticipantFieldToJSON,
} from './ParticipantField';

/**
 * 
 * @export
 * @interface CreateLotteryPayload
 */
export interface CreateLotteryPayload extends BaseFieldsCreate {
    /**
     * 
     * @type {Array<ParticipantField>}
     * @memberof CreateLotteryPayload
     */
    participants: Array<ParticipantField>;
    /**
     * 
     * @type {number}
     * @memberof CreateLotteryPayload
     */
    numberOfResults?: number;
}

/**
 * Check if a given object implements the CreateLotteryPayload interface.
 */
export function instanceOfCreateLotteryPayload(value: object): value is CreateLotteryPayload {
    if (!('participants' in value) || value['participants'] === undefined) return false;
    return true;
}

export function CreateLotteryPayloadFromJSON(json: any): CreateLotteryPayload {
    return CreateLotteryPayloadFromJSONTyped(json, false);
}

export function CreateLotteryPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLotteryPayload {
    if (json == null) {
        return json;
    }
    return {
        ...BaseFieldsCreateFromJSONTyped(json, ignoreDiscriminator),
        'participants': ((json['participants'] as Array<any>).map(ParticipantFieldFromJSON)),
        'numberOfResults': json['number_of_results'] == null ? undefined : json['number_of_results'],
    };
}

export function CreateLotteryPayloadToJSON(value?: CreateLotteryPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseFieldsCreateToJSON(value),
        'participants': ((value['participants'] as Array<any>).map(ParticipantFieldToJSON)),
        'number_of_results': value['numberOfResults'],
    };
}

