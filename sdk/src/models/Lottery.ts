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
import type { ParticipantField } from './ParticipantField';
import {
    ParticipantFieldFromJSON,
    ParticipantFieldFromJSONTyped,
    ParticipantFieldToJSON,
} from './ParticipantField';
import type { BaseDraw } from './BaseDraw';
import {
    BaseDrawFromJSON,
    BaseDrawFromJSONTyped,
    BaseDrawToJSON,
} from './BaseDraw';
import type { LotteryResult } from './LotteryResult';
import {
    LotteryResultFromJSON,
    LotteryResultFromJSONTyped,
    LotteryResultToJSON,
} from './LotteryResult';

/**
 * 
 * @export
 * @interface Lottery
 */
export interface Lottery extends BaseDraw {
    /**
     * 
     * @type {Array<ParticipantField>}
     * @memberof Lottery
     */
    participants: Array<ParticipantField>;
    /**
     * 
     * @type {number}
     * @memberof Lottery
     */
    numberOfResults?: number;
    /**
     * 
     * @type {Array<LotteryResult>}
     * @memberof Lottery
     */
    readonly results: Array<LotteryResult>;
}



/**
 * Check if a given object implements the Lottery interface.
 */
export function instanceOfLottery(value: object): value is Lottery {
    if (!('participants' in value) || value['participants'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function LotteryFromJSON(json: any): Lottery {
    return LotteryFromJSONTyped(json, false);
}

export function LotteryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Lottery {
    if (json == null) {
        return json;
    }
    return {
        ...BaseDrawFromJSONTyped(json, ignoreDiscriminator),
        'participants': ((json['participants'] as Array<any>).map(ParticipantFieldFromJSON)),
        'numberOfResults': json['number_of_results'] == null ? undefined : json['number_of_results'],
        'results': ((json['results'] as Array<any>).map(LotteryResultFromJSON)),
    };
}

export function LotteryToJSON(value?: Omit<Lottery, 'results'|'id'|'created_at'|'updated_at'|'private_id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseDrawToJSON(value),
        'participants': ((value['participants'] as Array<any>).map(ParticipantFieldToJSON)),
        'number_of_results': value['numberOfResults'],
    };
}

