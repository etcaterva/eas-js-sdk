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
import SecretSanta from '../model/SecretSanta';
import SecretSantaResult from '../model/SecretSantaResult';

/**
* SecretSanta service.
* @module api/SecretSantaApi
* @version 0.0.1
*/
export default class SecretSantaApi {

    /**
    * Constructs a new SecretSantaApi. 
    * @alias module:api/SecretSantaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/SecretSanta} secretSanta 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    secretSantaCreateWithHttpInfo(secretSanta) {
      let postBody = secretSanta;
      // verify the required parameter 'secretSanta' is set
      if (secretSanta === undefined || secretSanta === null) {
        throw new Error("Missing the required parameter 'secretSanta' when calling secretSantaCreate");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/secret-santa/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/SecretSanta} secretSanta 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    secretSantaCreate(secretSanta) {
      return this.secretSantaCreateWithHttpInfo(secretSanta)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecretSantaResult} and HTTP response
     */
    secretSantaResultGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling secretSantaResultGet");
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
      let returnType = SecretSantaResult;
      return this.apiClient.callApi(
        '/secret-santa/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecretSantaResult}
     */
    secretSantaResultGet(id) {
      return this.secretSantaResultGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
