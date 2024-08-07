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


import * as runtime from '../runtime';
import type {
  PaypalCreatePayload,
  PaypalResponse,
  RedeemPromoCode,
} from '../models/index';
import {
    PaypalCreatePayloadFromJSON,
    PaypalCreatePayloadToJSON,
    PaypalResponseFromJSON,
    PaypalResponseToJSON,
    RedeemPromoCodeFromJSON,
    RedeemPromoCodeToJSON,
} from '../models/index';

export interface PaypalCreateRequest {
    paypalCreatePayload: PaypalCreatePayload;
}

export interface RedeemPromoCodeRequest {
    redeemPromoCode: RedeemPromoCode;
}

/**
 * PaypalApi - interface
 * 
 * @export
 * @interface PaypalApiInterface
 */
export interface PaypalApiInterface {
    /**
     * 
     * @param {PaypalCreatePayload} paypalCreatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaypalApiInterface
     */
    paypalCreateRaw(requestParameters: PaypalCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaypalResponse>>;

    /**
     */
    paypalCreate(requestParameters: PaypalCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaypalResponse>;

    /**
     * 
     * @param {RedeemPromoCode} redeemPromoCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaypalApiInterface
     */
    redeemPromoCodeRaw(requestParameters: RedeemPromoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    redeemPromoCode(requestParameters: RedeemPromoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class PaypalApi extends runtime.BaseAPI implements PaypalApiInterface {

    /**
     */
    async paypalCreateRaw(requestParameters: PaypalCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaypalResponse>> {
        if (requestParameters['paypalCreatePayload'] == null) {
            throw new runtime.RequiredError(
                'paypalCreatePayload',
                'Required parameter "paypalCreatePayload" was null or undefined when calling paypalCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/paypal/create/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaypalCreatePayloadToJSON(requestParameters['paypalCreatePayload']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaypalResponseFromJSON(jsonValue));
    }

    /**
     */
    async paypalCreate(requestParameters: PaypalCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaypalResponse> {
        const response = await this.paypalCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async redeemPromoCodeRaw(requestParameters: RedeemPromoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['redeemPromoCode'] == null) {
            throw new runtime.RequiredError(
                'redeemPromoCode',
                'Required parameter "redeemPromoCode" was null or undefined when calling redeemPromoCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/promo-code/redeem/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RedeemPromoCodeToJSON(requestParameters['redeemPromoCode']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async redeemPromoCode(requestParameters: RedeemPromoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.redeemPromoCodeRaw(requestParameters, initOverrides);
    }

}
