"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawTossPayload = _interopRequireDefault(require("../model/DrawTossPayload"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

var _Tournament = _interopRequireDefault(require("../model/Tournament"));

var _TournamentResult = _interopRequireDefault(require("../model/TournamentResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tournament service.
* @module api/TournamentApi
* @version 0.0.1
*/
var TournamentApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TournamentApi. 
  * @alias module:api/TournamentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TournamentApi(apiClient) {
    _classCallCheck(this, TournamentApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Tournament} tournament 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tournament} and HTTP response
   */


  _createClass(TournamentApi, [{
    key: "tournamentCreateWithHttpInfo",
    value: function tournamentCreateWithHttpInfo(tournament) {
      var postBody = tournament; // verify the required parameter 'tournament' is set

      if (tournament === undefined || tournament === null) {
        throw new Error("Missing the required parameter 'tournament' when calling tournamentCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Tournament["default"];
      return this.apiClient.callApi('/tournament/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Tournament} tournament 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tournament}
     */

  }, {
    key: "tournamentCreate",
    value: function tournamentCreate(tournament) {
      return this.tournamentCreateWithHttpInfo(tournament).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "tournamentParticipantsAddWithHttpInfo",
    value: function tournamentParticipantsAddWithHttpInfo(id, participant) {
      var postBody = participant; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentParticipantsAdd");
      } // verify the required parameter 'participant' is set


      if (participant === undefined || participant === null) {
        throw new Error("Missing the required parameter 'participant' when calling tournamentParticipantsAdd");
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
      return this.apiClient.callApi('/tournament/{id}/participants/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "tournamentParticipantsAdd",
    value: function tournamentParticipantsAdd(id, participant) {
      return this.tournamentParticipantsAddWithHttpInfo(id, participant).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tournament} and HTTP response
     */

  }, {
    key: "tournamentReadWithHttpInfo",
    value: function tournamentReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentRead");
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
      var returnType = _Tournament["default"];
      return this.apiClient.callApi('/tournament/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tournament}
     */

  }, {
    key: "tournamentRead",
    value: function tournamentRead(id) {
      return this.tournamentReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TournamentResult} and HTTP response
     */

  }, {
    key: "tournamentTossWithHttpInfo",
    value: function tournamentTossWithHttpInfo(id, drawTossPayload) {
      var postBody = drawTossPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentToss");
      } // verify the required parameter 'drawTossPayload' is set


      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling tournamentToss");
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
      var returnType = _TournamentResult["default"];
      return this.apiClient.callApi('/tournament/{id}/toss/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TournamentResult}
     */

  }, {
    key: "tournamentToss",
    value: function tournamentToss(id, drawTossPayload) {
      return this.tournamentTossWithHttpInfo(id, drawTossPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TournamentApi;
}();

exports["default"] = TournamentApi;