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
 * @interface SecretSantaCreateResponse
 */
export interface SecretSantaCreateResponse {
    /**
     * 
     * @type {string}
     * @memberof SecretSantaCreateResponse
     */
    id?: string;
}

/**
 * Check if a given object implements the SecretSantaCreateResponse interface.
 */
export function instanceOfSecretSantaCreateResponse(value: object): value is SecretSantaCreateResponse {
    return true;
}

export function SecretSantaCreateResponseFromJSON(json: any): SecretSantaCreateResponse {
    return SecretSantaCreateResponseFromJSONTyped(json, false);
}

export function SecretSantaCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSantaCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SecretSantaCreateResponseToJSON(value?: SecretSantaCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
    };
}
