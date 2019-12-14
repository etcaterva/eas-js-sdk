/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DrawTossPayload', 'model/Groups', 'model/GroupsResult', 'model/Participant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DrawTossPayload'), require('../model/Groups'), require('../model/GroupsResult'), require('../model/Participant'));
  } else {
    // Browser globals (root is window)
    if (!root.EchaloasuerteJsSdk) {
      root.EchaloasuerteJsSdk = {};
    }
    root.EchaloasuerteJsSdk.GroupsApi = factory(root.EchaloasuerteJsSdk.ApiClient, root.EchaloasuerteJsSdk.DrawTossPayload, root.EchaloasuerteJsSdk.Groups, root.EchaloasuerteJsSdk.GroupsResult, root.EchaloasuerteJsSdk.Participant);
  }
}(this, function(ApiClient, DrawTossPayload, Groups, GroupsResult, Participant) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Groups} groups 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Groups} and HTTP response
     */
    this.groupsCreateWithHttpInfo = function(groups) {
      var postBody = groups;

      // verify the required parameter 'groups' is set
      if (groups === undefined || groups === null) {
        throw new Error("Missing the required parameter 'groups' when calling groupsCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Groups;

      return this.apiClient.callApi(
        '/groups/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/Groups} groups 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Groups}
     */
    this.groupsCreate = function(groups) {
      return this.groupsCreateWithHttpInfo(groups)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.groupsParticipantsAddWithHttpInfo = function(id, participant) {
      var postBody = participant;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsParticipantsAdd");
      }

      // verify the required parameter 'participant' is set
      if (participant === undefined || participant === null) {
        throw new Error("Missing the required parameter 'participant' when calling groupsParticipantsAdd");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{id}/participants/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.groupsParticipantsAdd = function(id, participant) {
      return this.groupsParticipantsAddWithHttpInfo(id, participant)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Groups} and HTTP response
     */
    this.groupsReadWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Groups;

      return this.apiClient.callApi(
        '/groups/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Groups}
     */
    this.groupsRead = function(id) {
      return this.groupsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupsResult} and HTTP response
     */
    this.groupsTossWithHttpInfo = function(id, drawTossPayload) {
      var postBody = drawTossPayload;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsToss");
      }

      // verify the required parameter 'drawTossPayload' is set
      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling groupsToss");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupsResult;

      return this.apiClient.callApi(
        '/groups/{id}/toss/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupsResult}
     */
    this.groupsToss = function(id, drawTossPayload) {
      return this.groupsTossWithHttpInfo(id, drawTossPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
