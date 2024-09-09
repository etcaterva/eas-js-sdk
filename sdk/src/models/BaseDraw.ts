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
import type { BaseObject } from './BaseObject';
import {
    BaseObjectFromJSON,
    BaseObjectFromJSONTyped,
    BaseObjectToJSON,
} from './BaseObject';

/**
 * 
 * @export
 * @interface BaseDraw
 */
export interface BaseDraw extends BaseObject {
    /**
     * 
     * @type {string}
     * @memberof BaseDraw
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseDraw
     */
    description?: string;
    /**
     * 
     * @type {Array<DrawMetadata>}
     * @memberof BaseDraw
     */
    metadata?: Array<DrawMetadata>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseDraw
     */
    payments: Array<BaseDrawPaymentsEnum>;
    /**
     * 
     * @type {Date}
     * @memberof BaseDraw
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BaseDraw
     */
    readonly privateId?: string;
}


/**
 * @export
 */
export const BaseDrawPaymentsEnum = {
    Certified: 'CERTIFIED',
    Adfree: 'ADFREE',
    Support: 'SUPPORT'
} as const;
export type BaseDrawPaymentsEnum = typeof BaseDrawPaymentsEnum[keyof typeof BaseDrawPaymentsEnum];


/**
 * Check if a given object implements the BaseDraw interface.
 */
export function instanceOfBaseDraw(value: object): value is BaseDraw {
    if (!('payments' in value) || value['payments'] === undefined) return false;
    return true;
}

export function BaseDrawFromJSON(json: any): BaseDraw {
    return BaseDrawFromJSONTyped(json, false);
}

export function BaseDrawFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseDraw {
    if (json == null) {
        return json;
    }
    return {
        ...BaseObjectFromJSONTyped(json, ignoreDiscriminator),
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'metadata': json['metadata'] == null ? undefined : ((json['metadata'] as Array<any>).map(DrawMetadataFromJSON)),
        'payments': json['payments'],
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'privateId': json['private_id'] == null ? undefined : json['private_id'],
    };
}

export function BaseDrawToJSON(value?: Omit<BaseDraw, 'updated_at'|'private_id'|'id'|'created_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseObjectToJSON(value),
        'title': value['title'],
        'description': value['description'],
        'metadata': value['metadata'] == null ? undefined : ((value['metadata'] as Array<any>).map(DrawMetadataToJSON)),
        'payments': value['payments'],
    };
}

