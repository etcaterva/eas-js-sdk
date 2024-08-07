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
 * @interface SecretSantaResult
 */
export interface SecretSantaResult {
    /**
     * 
     * @type {string}
     * @memberof SecretSantaResult
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof SecretSantaResult
     */
    target?: string;
}

/**
 * Check if a given object implements the SecretSantaResult interface.
 */
export function instanceOfSecretSantaResult(value: object): value is SecretSantaResult {
    return true;
}

export function SecretSantaResultFromJSON(json: any): SecretSantaResult {
    return SecretSantaResultFromJSONTyped(json, false);
}

export function SecretSantaResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSantaResult {
    if (json == null) {
        return json;
    }
    return {
        
        'source': json['source'] == null ? undefined : json['source'],
        'target': json['target'] == null ? undefined : json['target'],
    };
}

export function SecretSantaResultToJSON(value?: SecretSantaResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'source': value['source'],
        'target': value['target'],
    };
}
