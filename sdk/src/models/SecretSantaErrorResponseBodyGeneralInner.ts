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
 * @interface SecretSantaErrorResponseBodyGeneralInner
 */
export interface SecretSantaErrorResponseBodyGeneralInner {
    /**
     * 
     * @type {string}
     * @memberof SecretSantaErrorResponseBodyGeneralInner
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof SecretSantaErrorResponseBodyGeneralInner
     */
    code?: string;
}

/**
 * Check if a given object implements the SecretSantaErrorResponseBodyGeneralInner interface.
 */
export function instanceOfSecretSantaErrorResponseBodyGeneralInner(value: object): value is SecretSantaErrorResponseBodyGeneralInner {
    return true;
}

export function SecretSantaErrorResponseBodyGeneralInnerFromJSON(json: any): SecretSantaErrorResponseBodyGeneralInner {
    return SecretSantaErrorResponseBodyGeneralInnerFromJSONTyped(json, false);
}

export function SecretSantaErrorResponseBodyGeneralInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSantaErrorResponseBodyGeneralInner {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function SecretSantaErrorResponseBodyGeneralInnerToJSON(value?: SecretSantaErrorResponseBodyGeneralInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'code': value['code'],
    };
}

