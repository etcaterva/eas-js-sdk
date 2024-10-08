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
 * @interface CreateGroupsPayload
 */
export interface CreateGroupsPayload extends BaseFieldsCreate {
    /**
     * 
     * @type {Array<ParticipantField>}
     * @memberof CreateGroupsPayload
     */
    participants: Array<ParticipantField>;
    /**
     * 
     * @type {number}
     * @memberof CreateGroupsPayload
     */
    numberOfGroups: number;
}

/**
 * Check if a given object implements the CreateGroupsPayload interface.
 */
export function instanceOfCreateGroupsPayload(value: object): value is CreateGroupsPayload {
    if (!('participants' in value) || value['participants'] === undefined) return false;
    if (!('numberOfGroups' in value) || value['numberOfGroups'] === undefined) return false;
    return true;
}

export function CreateGroupsPayloadFromJSON(json: any): CreateGroupsPayload {
    return CreateGroupsPayloadFromJSONTyped(json, false);
}

export function CreateGroupsPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGroupsPayload {
    if (json == null) {
        return json;
    }
    return {
        ...BaseFieldsCreateFromJSONTyped(json, ignoreDiscriminator),
        'participants': ((json['participants'] as Array<any>).map(ParticipantFieldFromJSON)),
        'numberOfGroups': json['number_of_groups'],
    };
}

export function CreateGroupsPayloadToJSON(value?: CreateGroupsPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseFieldsCreateToJSON(value),
        'participants': ((value['participants'] as Array<any>).map(ParticipantFieldToJSON)),
        'number_of_groups': value['numberOfGroups'],
    };
}

