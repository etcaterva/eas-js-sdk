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
import type { ParticipantField } from './ParticipantField';
import {
    ParticipantFieldFromJSON,
    ParticipantFieldFromJSONTyped,
    ParticipantFieldToJSON,
} from './ParticipantField';

/**
 * 
 * @export
 * @interface GroupsFields
 */
export interface GroupsFields {
    /**
     * 
     * @type {Array<ParticipantField>}
     * @memberof GroupsFields
     */
    participants: Array<ParticipantField>;
    /**
     * 
     * @type {number}
     * @memberof GroupsFields
     */
    numberOfGroups: number;
}

/**
 * Check if a given object implements the GroupsFields interface.
 */
export function instanceOfGroupsFields(value: object): value is GroupsFields {
    if (!('participants' in value) || value['participants'] === undefined) return false;
    if (!('numberOfGroups' in value) || value['numberOfGroups'] === undefined) return false;
    return true;
}

export function GroupsFieldsFromJSON(json: any): GroupsFields {
    return GroupsFieldsFromJSONTyped(json, false);
}

export function GroupsFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupsFields {
    if (json == null) {
        return json;
    }
    return {
        
        'participants': ((json['participants'] as Array<any>).map(ParticipantFieldFromJSON)),
        'numberOfGroups': json['number_of_groups'],
    };
}

export function GroupsFieldsToJSON(value?: GroupsFields | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'participants': ((value['participants'] as Array<any>).map(ParticipantFieldToJSON)),
        'number_of_groups': value['numberOfGroups'],
    };
}

