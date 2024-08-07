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
import type { DrawMetadata } from './DrawMetadata';
import {
    DrawMetadataFromJSON,
    DrawMetadataFromJSONTyped,
    DrawMetadataToJSON,
} from './DrawMetadata';

/**
 * 
 * @export
 * @interface BaseFields
 */
export interface BaseFields {
    /**
     * 
     * @type {string}
     * @memberof BaseFields
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseFields
     */
    description?: string;
    /**
     * 
     * @type {Array<DrawMetadata>}
     * @memberof BaseFields
     */
    metadata?: Array<DrawMetadata>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseFields
     */
    payments?: Array<BaseFieldsPaymentsEnum>;
}


/**
 * @export
 */
export const BaseFieldsPaymentsEnum = {
    Certified: 'CERTIFIED',
    Adfree: 'ADFREE',
    Support: 'SUPPORT'
} as const;
export type BaseFieldsPaymentsEnum = typeof BaseFieldsPaymentsEnum[keyof typeof BaseFieldsPaymentsEnum];


/**
 * Check if a given object implements the BaseFields interface.
 */
export function instanceOfBaseFields(value: object): value is BaseFields {
    return true;
}

export function BaseFieldsFromJSON(json: any): BaseFields {
    return BaseFieldsFromJSONTyped(json, false);
}

export function BaseFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseFields {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'metadata': json['metadata'] == null ? undefined : ((json['metadata'] as Array<any>).map(DrawMetadataFromJSON)),
        'payments': json['payments'] == null ? undefined : json['payments'],
    };
}

export function BaseFieldsToJSON(value?: BaseFields | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'metadata': value['metadata'] == null ? undefined : ((value['metadata'] as Array<any>).map(DrawMetadataToJSON)),
        'payments': value['payments'],
    };
}

