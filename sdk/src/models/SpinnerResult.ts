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

/**
 * 
 * @export
 * @interface SpinnerResult
 */
export interface SpinnerResult extends BaseResult {
    /**
     * 
     * @type {number}
     * @memberof SpinnerResult
     */
    value?: number | null;
}

/**
 * Check if a given object implements the SpinnerResult interface.
 */
export function instanceOfSpinnerResult(value: object): value is SpinnerResult {
    return true;
}

export function SpinnerResultFromJSON(json: any): SpinnerResult {
    return SpinnerResultFromJSONTyped(json, false);
}

export function SpinnerResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpinnerResult {
    if (json == null) {
        return json;
    }
    return {
        ...BaseResultFromJSONTyped(json, ignoreDiscriminator),
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function SpinnerResultToJSON(value?: Omit<SpinnerResult, 'created_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseResultToJSON(value),
        'value': value['value'],
    };
}

