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
 * @interface LinkResultAllOfValue
 */
export interface LinkResultAllOfValue {
    /**
     * 
     * @type {string}
     * @memberof LinkResultAllOfValue
     */
    element1?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkResultAllOfValue
     */
    element2?: string;
}

/**
 * Check if a given object implements the LinkResultAllOfValue interface.
 */
export function instanceOfLinkResultAllOfValue(value: object): value is LinkResultAllOfValue {
    return true;
}

export function LinkResultAllOfValueFromJSON(json: any): LinkResultAllOfValue {
    return LinkResultAllOfValueFromJSONTyped(json, false);
}

export function LinkResultAllOfValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkResultAllOfValue {
    if (json == null) {
        return json;
    }
    return {
        
        'element1': json['element1'] == null ? undefined : json['element1'],
        'element2': json['element2'] == null ? undefined : json['element2'],
    };
}

export function LinkResultAllOfValueToJSON(value?: LinkResultAllOfValue | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'element1': value['element1'],
        'element2': value['element2'],
    };
}

