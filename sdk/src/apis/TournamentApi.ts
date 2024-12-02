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
  CreateTournamentPayload,
  DrawTossPayload,
  Participant,
  Tournament,
  TournamentResult,
} from '../models/index';
import {
    CreateTournamentPayloadFromJSON,
    CreateTournamentPayloadToJSON,
    DrawTossPayloadFromJSON,
    DrawTossPayloadToJSON,
    ParticipantFromJSON,
    ParticipantToJSON,
    TournamentFromJSON,
    TournamentToJSON,
    TournamentResultFromJSON,
    TournamentResultToJSON,
} from '../models/index';

export interface TournamentCreateRequest {
    createTournamentPayload: CreateTournamentPayload;
}

export interface TournamentParticipantsAddRequest {
    id: string;
    participant: Participant;
}

export interface TournamentReadRequest {
    id: string;
}

export interface TournamentTossRequest {
    id: string;
    drawTossPayload: DrawTossPayload;
}

/**
 * TournamentApi - interface
 * 
 * @export
 * @interface TournamentApiInterface
 */
export interface TournamentApiInterface {
    /**
     * 
     * @param {CreateTournamentPayload} createTournamentPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentApiInterface
     */
    tournamentCreateRaw(requestParameters: TournamentCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tournament>>;

    /**
     */
    tournamentCreate(requestParameters: TournamentCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tournament>;

    /**
     * 
     * @param {string} id 
     * @param {Participant} participant 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentApiInterface
     */
    tournamentParticipantsAddRaw(requestParameters: TournamentParticipantsAddRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    tournamentParticipantsAdd(requestParameters: TournamentParticipantsAddRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentApiInterface
     */
    tournamentReadRaw(requestParameters: TournamentReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tournament>>;

    /**
     */
    tournamentRead(requestParameters: TournamentReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tournament>;

    /**
     * 
     * @param {string} id 
     * @param {DrawTossPayload} drawTossPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentApiInterface
     */
    tournamentTossRaw(requestParameters: TournamentTossRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TournamentResult>>;

    /**
     */
    tournamentToss(requestParameters: TournamentTossRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TournamentResult>;

}

/**
 * 
 */
export class TournamentApi extends runtime.BaseAPI implements TournamentApiInterface {

    /**
     */
    async tournamentCreateRaw(requestParameters: TournamentCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tournament>> {
        if (requestParameters['createTournamentPayload'] == null) {
            throw new runtime.RequiredError(
                'createTournamentPayload',
                'Required parameter "createTournamentPayload" was null or undefined when calling tournamentCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tournament/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTournamentPayloadToJSON(requestParameters['createTournamentPayload']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TournamentFromJSON(jsonValue));
    }

    /**
     */
    async tournamentCreate(requestParameters: TournamentCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tournament> {
        const response = await this.tournamentCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async tournamentParticipantsAddRaw(requestParameters: TournamentParticipantsAddRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tournamentParticipantsAdd().'
            );
        }

        if (requestParameters['participant'] == null) {
            throw new runtime.RequiredError(
                'participant',
                'Required parameter "participant" was null or undefined when calling tournamentParticipantsAdd().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tournament/{id}/participants/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ParticipantToJSON(requestParameters['participant']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async tournamentParticipantsAdd(requestParameters: TournamentParticipantsAddRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.tournamentParticipantsAddRaw(requestParameters, initOverrides);
    }

    /**
     */
    async tournamentReadRaw(requestParameters: TournamentReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tournament>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tournamentRead().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tournament/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TournamentFromJSON(jsonValue));
    }

    /**
     */
    async tournamentRead(requestParameters: TournamentReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tournament> {
        const response = await this.tournamentReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async tournamentTossRaw(requestParameters: TournamentTossRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TournamentResult>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tournamentToss().'
            );
        }

        if (requestParameters['drawTossPayload'] == null) {
            throw new runtime.RequiredError(
                'drawTossPayload',
                'Required parameter "drawTossPayload" was null or undefined when calling tournamentToss().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tournament/{id}/toss/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DrawTossPayloadToJSON(requestParameters['drawTossPayload']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TournamentResultFromJSON(jsonValue));
    }

    /**
     */
    async tournamentToss(requestParameters: TournamentTossRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TournamentResult> {
        const response = await this.tournamentTossRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
