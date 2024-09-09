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
import type { PrizeField } from './PrizeField';
import {
    PrizeFieldFromJSON,
    PrizeFieldFromJSONTyped,
    PrizeFieldToJSON,
} from './PrizeField';

/**
 * 
 * @export
 * @interface CreateRafflePayload
 */
export interface CreateRafflePayload extends BaseFieldsCreate {
    /**
     * 
     * @type {Array<PrizeField>}
     * @memberof CreateRafflePayload
     */
    prizes: Array<PrizeField>;
    /**
     * 
     * @type {Array<ParticipantField>}
     * @memberof CreateRafflePayload
     */
    participants: Array<ParticipantField>;
}

/**
 * Check if a given object implements the CreateRafflePayload interface.
 */
export function instanceOfCreateRafflePayload(value: object): value is CreateRafflePayload {
    if (!('prizes' in value) || value['prizes'] === undefined) return false;
    if (!('participants' in value) || value['participants'] === undefined) return false;
    return true;
}

export function CreateRafflePayloadFromJSON(json: any): CreateRafflePayload {
    return CreateRafflePayloadFromJSONTyped(json, false);
}

export function CreateRafflePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRafflePayload {
    if (json == null) {
        return json;
    }
    return {
        ...BaseFieldsCreateFromJSONTyped(json, ignoreDiscriminator),
        'prizes': ((json['prizes'] as Array<any>).map(PrizeFieldFromJSON)),
        'participants': ((json['participants'] as Array<any>).map(ParticipantFieldFromJSON)),
    };
}

export function CreateRafflePayloadToJSON(value?: CreateRafflePayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseFieldsCreateToJSON(value),
        'prizes': ((value['prizes'] as Array<any>).map(PrizeFieldToJSON)),
        'participants': ((value['participants'] as Array<any>).map(ParticipantFieldToJSON)),
    };
}

