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
import type { SecretSantaErrorResponseBodyGeneralInner } from './SecretSantaErrorResponseBodyGeneralInner';
import {
    SecretSantaErrorResponseBodyGeneralInnerFromJSON,
    SecretSantaErrorResponseBodyGeneralInnerFromJSONTyped,
    SecretSantaErrorResponseBodyGeneralInnerToJSON,
} from './SecretSantaErrorResponseBodyGeneralInner';

/**
 * 
 * @export
 * @interface SecretSantaErrorResponseBody
 */
export interface SecretSantaErrorResponseBody {
    /**
     * 
     * @type {Array<SecretSantaErrorResponseBodyGeneralInner>}
     * @memberof SecretSantaErrorResponseBody
     */
    general?: Array<SecretSantaErrorResponseBodyGeneralInner>;
}

/**
 * Check if a given object implements the SecretSantaErrorResponseBody interface.
 */
export function instanceOfSecretSantaErrorResponseBody(value: object): value is SecretSantaErrorResponseBody {
    return true;
}

export function SecretSantaErrorResponseBodyFromJSON(json: any): SecretSantaErrorResponseBody {
    return SecretSantaErrorResponseBodyFromJSONTyped(json, false);
}

export function SecretSantaErrorResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSantaErrorResponseBody {
    if (json == null) {
        return json;
    }
    return {
        
        'general': json['general'] == null ? undefined : ((json['general'] as Array<any>).map(SecretSantaErrorResponseBodyGeneralInnerFromJSON)),
    };
}

export function SecretSantaErrorResponseBodyToJSON(value?: SecretSantaErrorResponseBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'general': value['general'] == null ? undefined : ((value['general'] as Array<any>).map(SecretSantaErrorResponseBodyGeneralInnerToJSON)),
    };
}

