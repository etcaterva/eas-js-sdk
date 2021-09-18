"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawTossPayload = _interopRequireDefault(require("../model/DrawTossPayload"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

var _Raffle = _interopRequireDefault(require("../model/Raffle"));

var _RaffleResult = _interopRequireDefault(require("../model/RaffleResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Raffle service.
* @module api/RaffleApi
* @version 0.0.1
*/
var RaffleApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RaffleApi. 
  * @alias module:api/RaffleApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RaffleApi(apiClient) {
    _classCallCheck(this, RaffleApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Raffle} raffle 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Raffle} and HTTP response
   */


  _createClass(RaffleApi, [{
    key: "raffleCreateWithHttpInfo",
    value: function raffleCreateWithHttpInfo(raffle) {
      var postBody = raffle; // verify the required parameter 'raffle' is set

      if (raffle === undefined || raffle === null) {
        throw new Error("Missing the required parameter 'raffle' when calling raffleCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Raffle["default"];
      return this.apiClient.callApi('/raffle/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Raffle} raffle 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Raffle}
     */

  }, {
    key: "raffleCreate",
    value: function raffleCreate(raffle) {
      return this.raffleCreateWithHttpInfo(raffle).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "raffleParticipantsAddWithHttpInfo",
    value: function raffleParticipantsAddWithHttpInfo(id, participant) {
      var postBody = participant; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling raffleParticipantsAdd");
      } // verify the required parameter 'participant' is set


      if (participant === undefined || participant === null) {
        throw new Error("Missing the required parameter 'participant' when calling raffleParticipantsAdd");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/raffle/{id}/participants/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "raffleParticipantsAdd",
    value: function raffleParticipantsAdd(id, participant) {
      return this.raffleParticipantsAddWithHttpInfo(id, participant).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Raffle} and HTTP response
     */

  }, {
    key: "raffleReadWithHttpInfo",
    value: function raffleReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling raffleRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Raffle["default"];
      return this.apiClient.callApi('/raffle/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Raffle}
     */

  }, {
    key: "raffleRead",
    value: function raffleRead(id) {
      return this.raffleReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RaffleResult} and HTTP response
     */

  }, {
    key: "raffleTossWithHttpInfo",
    value: function raffleTossWithHttpInfo(id, drawTossPayload) {
      var postBody = drawTossPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling raffleToss");
      } // verify the required parameter 'drawTossPayload' is set


      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling raffleToss");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RaffleResult["default"];
      return this.apiClient.callApi('/raffle/{id}/toss/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RaffleResult}
     */

  }, {
    key: "raffleToss",
    value: function raffleToss(id, drawTossPayload) {
      return this.raffleTossWithHttpInfo(id, drawTossPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RaffleApi;
}();

exports["default"] = RaffleApi;