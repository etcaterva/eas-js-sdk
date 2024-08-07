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
 * @interface SecretSantaParticipantsInner
 */
export interface SecretSantaParticipantsInner {
    /**
     * 
     * @type {string}
     * @memberof SecretSantaParticipantsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SecretSantaParticipantsInner
     */
    email?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SecretSantaParticipantsInner
     */
    exclusions?: Array<string>;
}

/**
 * Check if a given object implements the SecretSantaParticipantsInner interface.
 */
export function instanceOfSecretSantaParticipantsInner(value: object): value is SecretSantaParticipantsInner {
    return true;
}

export function SecretSantaParticipantsInnerFromJSON(json: any): SecretSantaParticipantsInner {
    return SecretSantaParticipantsInnerFromJSONTyped(json, false);
}

export function SecretSantaParticipantsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSantaParticipantsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'email': json['email'] == null ? undefined : json['email'],
        'exclusions': json['exclusions'] == null ? undefined : json['exclusions'],
    };
}

export function SecretSantaParticipantsInnerToJSON(value?: SecretSantaParticipantsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'email': value['email'],
        'exclusions': value['exclusions'],
    };
}
