/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DrawTossPayload from '../model/DrawTossPayload';
import Instagram from '../model/Instagram';
import InstagramResult from '../model/InstagramResult';

/**
* Instagram service.
* @module api/InstagramApi
* @version 0.0.1
*/
export default class InstagramApi {

    /**
    * Constructs a new InstagramApi. 
    * @alias module:api/InstagramApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/Instagram} instagram 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Instagram} and HTTP response
     */
    instagramCreateWithHttpInfo(instagram) {
      let postBody = instagram;
      // verify the required parameter 'instagram' is set
      if (instagram === undefined || instagram === null) {
        throw new Error("Missing the required parameter 'instagram' when calling instagramCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Instagram;
      return this.apiClient.callApi(
        '/instagram/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Instagram} instagram 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Instagram}
     */
    instagramCreate(instagram) {
      return this.instagramCreateWithHttpInfo(instagram)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Instagram} and HTTP response
     */
    instagramReadWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling instagramRead");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Instagram;
      return this.apiClient.callApi(
        '/instagram/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Instagram}
     */
    instagramRead(id) {
      return this.instagramReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstagramResult} and HTTP response
     */
    instagramTossWithHttpInfo(id, drawTossPayload) {
      let postBody = drawTossPayload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling instagramToss");
      }
      // verify the required parameter 'drawTossPayload' is set
      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling instagramToss");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InstagramResult;
      return this.apiClient.callApi(
        '/instagram/{id}/toss/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstagramResult}
     */
    instagramToss(id, drawTossPayload) {
      return this.instagramTossWithHttpInfo(id, drawTossPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
