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
 * @interface CreateTournamentPayload
 */
export interface CreateTournamentPayload extends BaseFieldsCreate {
    /**
     * 
     * @type {Array<ParticipantField>}
     * @memberof CreateTournamentPayload
     */
    participants: Array<ParticipantField>;
}

/**
 * Check if a given object implements the CreateTournamentPayload interface.
 */
export function instanceOfCreateTournamentPayload(value: object): value is CreateTournamentPayload {
    if (!('participants' in value) || value['participants'] === undefined) return false;
    return true;
}

export function CreateTournamentPayloadFromJSON(json: any): CreateTournamentPayload {
    return CreateTournamentPayloadFromJSONTyped(json, false);
}

export function CreateTournamentPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTournamentPayload {
    if (json == null) {
        return json;
    }
    return {
        ...BaseFieldsCreateFromJSONTyped(json, ignoreDiscriminator),
        'participants': ((json['participants'] as Array<any>).map(ParticipantFieldFromJSON)),
    };
}

export function CreateTournamentPayloadToJSON(value?: CreateTournamentPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseFieldsCreateToJSON(value),
        'participants': ((value['participants'] as Array<any>).map(ParticipantFieldToJSON)),
    };
}
