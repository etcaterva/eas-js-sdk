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
import type { Participant } from './Participant';
import {
    ParticipantFromJSON,
    ParticipantFromJSONTyped,
    ParticipantToJSON,
} from './Participant';

/**
 * 
 * @export
 * @interface TournamentResultAllOfValue
 */
export interface TournamentResultAllOfValue {
    /**
     * 
     * @type {string}
     * @memberof TournamentResultAllOfValue
     */
    id?: string;
    /**
     * 
     * @type {Array<Participant>}
     * @memberof TournamentResultAllOfValue
     */
    participants?: Array<Participant>;
    /**
     * 
     * @type {string}
     * @memberof TournamentResultAllOfValue
     */
    score?: string;
    /**
     * 
     * @type {string}
     * @memberof TournamentResultAllOfValue
     */
    winnerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TournamentResultAllOfValue
     */
    nextMatchId?: string;
}

/**
 * Check if a given object implements the TournamentResultAllOfValue interface.
 */
export function instanceOfTournamentResultAllOfValue(value: object): value is TournamentResultAllOfValue {
    return true;
}

export function TournamentResultAllOfValueFromJSON(json: any): TournamentResultAllOfValue {
    return TournamentResultAllOfValueFromJSONTyped(json, false);
}

export function TournamentResultAllOfValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): TournamentResultAllOfValue {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'participants': json['participants'] == null ? undefined : ((json['participants'] as Array<any>).map(ParticipantFromJSON)),
        'score': json['score'] == null ? undefined : json['score'],
        'winnerId': json['winner_id'] == null ? undefined : json['winner_id'],
        'nextMatchId': json['next_match_id'] == null ? undefined : json['next_match_id'],
    };
}

export function TournamentResultAllOfValueToJSON(value?: TournamentResultAllOfValue | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'participants': value['participants'] == null ? undefined : ((value['participants'] as Array<any>).map(ParticipantToJSON)),
        'score': value['score'],
        'winner_id': value['winnerId'],
        'next_match_id': value['nextMatchId'],
    };
}
