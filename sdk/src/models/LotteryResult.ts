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
import type { BaseResult } from './BaseResult';
import {
    BaseResultFromJSON,
    BaseResultFromJSONTyped,
    BaseResultToJSON,
} from './BaseResult';
import type { Participant } from './Participant';
import {
    ParticipantFromJSON,
    ParticipantFromJSONTyped,
    ParticipantToJSON,
} from './Participant';

/**
 * 
 * @export
 * @interface LotteryResult
 */
export interface LotteryResult extends BaseResult {
    /**
     * 
     * @type {Array<Participant>}
     * @memberof LotteryResult
     */
    value?: Array<Participant> | null;
}

/**
 * Check if a given object implements the LotteryResult interface.
 */
export function instanceOfLotteryResult(value: object): value is LotteryResult {
    return true;
}

export function LotteryResultFromJSON(json: any): LotteryResult {
    return LotteryResultFromJSONTyped(json, false);
}

export function LotteryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryResult {
    if (json == null) {
        return json;
    }
    return {
        ...BaseResultFromJSONTyped(json, ignoreDiscriminator),
        'value': json['value'] == null ? undefined : ((json['value'] as Array<any>).map(ParticipantFromJSON)),
    };
}

export function LotteryResultToJSON(value?: Omit<LotteryResult, 'id'|'created_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseResultToJSON(value),
        'value': value['value'] == null ? undefined : ((value['value'] as Array<any>).map(ParticipantToJSON)),
    };
}

