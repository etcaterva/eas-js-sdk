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
import type { RaffleResultAllOfValue } from './RaffleResultAllOfValue';
import {
    RaffleResultAllOfValueFromJSON,
    RaffleResultAllOfValueFromJSONTyped,
    RaffleResultAllOfValueToJSON,
} from './RaffleResultAllOfValue';

/**
 * 
 * @export
 * @interface RaffleResult
 */
export interface RaffleResult extends BaseResult {
    /**
     * 
     * @type {Array<RaffleResultAllOfValue>}
     * @memberof RaffleResult
     */
    value?: Array<RaffleResultAllOfValue> | null;
}

/**
 * Check if a given object implements the RaffleResult interface.
 */
export function instanceOfRaffleResult(value: object): value is RaffleResult {
    return true;
}

export function RaffleResultFromJSON(json: any): RaffleResult {
    return RaffleResultFromJSONTyped(json, false);
}

export function RaffleResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): RaffleResult {
    if (json == null) {
        return json;
    }
    return {
        ...BaseResultFromJSONTyped(json, ignoreDiscriminator),
        'value': json['value'] == null ? undefined : ((json['value'] as Array<any>).map(RaffleResultAllOfValueFromJSON)),
    };
}

export function RaffleResultToJSON(value?: Omit<RaffleResult, 'created_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseResultToJSON(value),
        'value': value['value'] == null ? undefined : ((value['value'] as Array<any>).map(RaffleResultAllOfValueToJSON)),
    };
}

