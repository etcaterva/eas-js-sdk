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
import type { InstagramResultAllOfComment } from './InstagramResultAllOfComment';
import {
    InstagramResultAllOfCommentFromJSON,
    InstagramResultAllOfCommentFromJSONTyped,
    InstagramResultAllOfCommentToJSON,
} from './InstagramResultAllOfComment';
import type { Prize } from './Prize';
import {
    PrizeFromJSON,
    PrizeFromJSONTyped,
    PrizeToJSON,
} from './Prize';

/**
 * 
 * @export
 * @interface InstagramResultAllOfValue
 */
export interface InstagramResultAllOfValue {
    /**
     * 
     * @type {InstagramResultAllOfComment}
     * @memberof InstagramResultAllOfValue
     */
    comment?: InstagramResultAllOfComment;
    /**
     * 
     * @type {Prize}
     * @memberof InstagramResultAllOfValue
     */
    prize?: Prize;
}

/**
 * Check if a given object implements the InstagramResultAllOfValue interface.
 */
export function instanceOfInstagramResultAllOfValue(value: object): value is InstagramResultAllOfValue {
    return true;
}

export function InstagramResultAllOfValueFromJSON(json: any): InstagramResultAllOfValue {
    return InstagramResultAllOfValueFromJSONTyped(json, false);
}

export function InstagramResultAllOfValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstagramResultAllOfValue {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': json['comment'] == null ? undefined : InstagramResultAllOfCommentFromJSON(json['comment']),
        'prize': json['prize'] == null ? undefined : PrizeFromJSON(json['prize']),
    };
}

export function InstagramResultAllOfValueToJSON(value?: InstagramResultAllOfValue | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'comment': InstagramResultAllOfCommentToJSON(value['comment']),
        'prize': PrizeToJSON(value['prize']),
    };
}

