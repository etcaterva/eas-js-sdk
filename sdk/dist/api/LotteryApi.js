"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawTossPayload = _interopRequireDefault(require("../model/DrawTossPayload"));

var _Lottery = _interopRequireDefault(require("../model/Lottery"));

var _LotteryResult = _interopRequireDefault(require("../model/LotteryResult"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Lottery service.
* @module api/LotteryApi
* @version 0.0.1
*/
var LotteryApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LotteryApi. 
  * @alias module:api/LotteryApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LotteryApi(apiClient) {
    _classCallCheck(this, LotteryApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Lottery} lottery 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Lottery} and HTTP response
   */


  _createClass(LotteryApi, [{
    key: "lotteryCreateWithHttpInfo",
    value: function lotteryCreateWithHttpInfo(lottery) {
      var postBody = lottery; // verify the required parameter 'lottery' is set

      if (lottery === undefined || lottery === null) {
        throw new Error("Missing the required parameter 'lottery' when calling lotteryCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Lottery["default"];
      return this.apiClient.callApi('/lottery/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Lottery} lottery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Lottery}
     */

  }, {
    key: "lotteryCreate",
    value: function lotteryCreate(lottery) {
      return this.lotteryCreateWithHttpInfo(lottery).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "lotteryParticipantsAddWithHttpInfo",
    value: function lotteryParticipantsAddWithHttpInfo(id, participant) {
      var postBody = participant; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lotteryParticipantsAdd");
      } // verify the required parameter 'participant' is set


      if (participant === undefined || participant === null) {
        throw new Error("Missing the required parameter 'participant' when calling lotteryParticipantsAdd");
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
      return this.apiClient.callApi('/lottery/{id}/participants/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "lotteryParticipantsAdd",
    value: function lotteryParticipantsAdd(id, participant) {
      return this.lotteryParticipantsAddWithHttpInfo(id, participant).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Lottery} and HTTP response
     */

  }, {
    key: "lotteryReadWithHttpInfo",
    value: function lotteryReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lotteryRead");
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
      var returnType = _Lottery["default"];
      return this.apiClient.callApi('/lottery/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Lottery}
     */

  }, {
    key: "lotteryRead",
    value: function lotteryRead(id) {
      return this.lotteryReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LotteryResult} and HTTP response
     */

  }, {
    key: "lotteryTossWithHttpInfo",
    value: function lotteryTossWithHttpInfo(id, drawTossPayload) {
      var postBody = drawTossPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lotteryToss");
      } // verify the required parameter 'drawTossPayload' is set


      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling lotteryToss");
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
      var returnType = _LotteryResult["default"];
      return this.apiClient.callApi('/lottery/{id}/toss/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LotteryResult}
     */

  }, {
    key: "lotteryToss",
    value: function lotteryToss(id, drawTossPayload) {
      return this.lotteryTossWithHttpInfo(id, drawTossPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LotteryApi;
}();

exports["default"] = LotteryApi;