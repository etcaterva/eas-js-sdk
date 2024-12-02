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
 * @interface ShiftsResultAllOfInterval
 */
export interface ShiftsResultAllOfInterval {
    /**
     * 
     * @type {Date}
     * @memberof ShiftsResultAllOfInterval
     */
    startTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ShiftsResultAllOfInterval
     */
    endTime?: Date;
}

/**
 * Check if a given object implements the ShiftsResultAllOfInterval interface.
 */
export function instanceOfShiftsResultAllOfInterval(value: object): value is ShiftsResultAllOfInterval {
    return true;
}

export function ShiftsResultAllOfIntervalFromJSON(json: any): ShiftsResultAllOfInterval {
    return ShiftsResultAllOfIntervalFromJSONTyped(json, false);
}

export function ShiftsResultAllOfIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShiftsResultAllOfInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'startTime': json['start_time'] == null ? undefined : (new Date(json['start_time'])),
        'endTime': json['end_time'] == null ? undefined : (new Date(json['end_time'])),
    };
}

export function ShiftsResultAllOfIntervalToJSON(value?: ShiftsResultAllOfInterval | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_time': value['startTime'] == null ? undefined : ((value['startTime']).toISOString()),
        'end_time': value['endTime'] == null ? undefined : ((value['endTime']).toISOString()),
    };
}

