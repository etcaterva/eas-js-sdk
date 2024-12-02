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
/**
 * 
 * @export
 * @interface ShiftsInterval
 */
export interface ShiftsInterval {
    /**
     * 
     * @type {Date}
     * @memberof ShiftsInterval
     */
    startTime: Date;
    /**
     * 
     * @type {Date}
     * @memberof ShiftsInterval
     */
    endTime: Date;
}

/**
 * Check if a given object implements the ShiftsInterval interface.
 */
export function instanceOfShiftsInterval(value: object): value is ShiftsInterval {
    if (!('startTime' in value) || value['startTime'] === undefined) return false;
    if (!('endTime' in value) || value['endTime'] === undefined) return false;
    return true;
}

export function ShiftsIntervalFromJSON(json: any): ShiftsInterval {
    return ShiftsIntervalFromJSONTyped(json, false);
}

export function ShiftsIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShiftsInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'startTime': (new Date(json['start_time'])),
        'endTime': (new Date(json['end_time'])),
    };
}

export function ShiftsIntervalToJSON(value?: ShiftsInterval | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_time': ((value['startTime']).toISOString()),
        'end_time': ((value['endTime']).toISOString()),
    };
}

