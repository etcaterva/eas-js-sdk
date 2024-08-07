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
 * @interface RedeemPromoCode
 */
export interface RedeemPromoCode {
    /**
     * 
     * @type {string}
     * @memberof RedeemPromoCode
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof RedeemPromoCode
     */
    drawId: string;
}

/**
 * Check if a given object implements the RedeemPromoCode interface.
 */
export function instanceOfRedeemPromoCode(value: object): value is RedeemPromoCode {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('drawId' in value) || value['drawId'] === undefined) return false;
    return true;
}

export function RedeemPromoCodeFromJSON(json: any): RedeemPromoCode {
    return RedeemPromoCodeFromJSONTyped(json, false);
}

export function RedeemPromoCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedeemPromoCode {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'drawId': json['draw_id'],
    };
}

export function RedeemPromoCodeToJSON(value?: RedeemPromoCode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'draw_id': value['drawId'],
    };
}

