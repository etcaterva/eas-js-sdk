/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DrawTossPayload from '../model/DrawTossPayload';
import Letter from '../model/Letter';
import LetterResult from '../model/LetterResult';

/**
* Letter service.
* @module api/LetterApi
* @version 0.0.10
*/
export default class LetterApi {

    /**
    * Constructs a new LetterApi. 
    * @alias module:api/LetterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/Letter} letter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    letterCreateWithHttpInfo(letter) {
      let postBody = letter;

      // verify the required parameter 'letter' is set
      if (letter === undefined || letter === null) {
        throw new Error("Missing the required parameter 'letter' when calling letterCreate");
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
      let returnType = Letter;

      return this.apiClient.callApi(
        '/letter/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/Letter} letter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    letterCreate(letter) {
      return this.letterCreateWithHttpInfo(letter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    letterReadWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling letterRead");
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
      let returnType = Letter;

      return this.apiClient.callApi(
        '/letter/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    letterRead(id) {
      return this.letterReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LetterResult} and HTTP response
     */
    letterTossWithHttpInfo(id, drawTossPayload) {
      let postBody = drawTossPayload;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling letterToss");
      }

      // verify the required parameter 'drawTossPayload' is set
      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling letterToss");
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
      let returnType = LetterResult;

      return this.apiClient.callApi(
        '/letter/{id}/toss/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LetterResult}
     */
    letterToss(id, drawTossPayload) {
      return this.letterTossWithHttpInfo(id, drawTossPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
