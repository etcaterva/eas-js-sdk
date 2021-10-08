"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawTossPayload = _interopRequireDefault(require("../model/DrawTossPayload"));

var _RandomNumber = _interopRequireDefault(require("../model/RandomNumber"));

var _RandomNumberResult = _interopRequireDefault(require("../model/RandomNumberResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RandomNumber service.
* @module api/RandomNumberApi
* @version 0.0.1
*/
var RandomNumberApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RandomNumberApi. 
  * @alias module:api/RandomNumberApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RandomNumberApi(apiClient) {
    _classCallCheck(this, RandomNumberApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/RandomNumber} randomNumber 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RandomNumber} and HTTP response
   */


  _createClass(RandomNumberApi, [{
    key: "randomNumberCreateWithHttpInfo",
    value: function randomNumberCreateWithHttpInfo(randomNumber) {
      var postBody = randomNumber; // verify the required parameter 'randomNumber' is set

      if (randomNumber === undefined || randomNumber === null) {
        throw new Error("Missing the required parameter 'randomNumber' when calling randomNumberCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RandomNumber["default"];
      return this.apiClient.callApi('/random_number/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/RandomNumber} randomNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RandomNumber}
     */

  }, {
    key: "randomNumberCreate",
    value: function randomNumberCreate(randomNumber) {
      return this.randomNumberCreateWithHttpInfo(randomNumber).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RandomNumber} and HTTP response
     */

  }, {
    key: "randomNumberReadWithHttpInfo",
    value: function randomNumberReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling randomNumberRead");
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
      var returnType = _RandomNumber["default"];
      return this.apiClient.callApi('/random_number/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RandomNumber}
     */

  }, {
    key: "randomNumberRead",
    value: function randomNumberRead(id) {
      return this.randomNumberReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RandomNumberResult} and HTTP response
     */

  }, {
    key: "randomNumberTossWithHttpInfo",
    value: function randomNumberTossWithHttpInfo(id, drawTossPayload) {
      var postBody = drawTossPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling randomNumberToss");
      } // verify the required parameter 'drawTossPayload' is set


      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling randomNumberToss");
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
      var returnType = _RandomNumberResult["default"];
      return this.apiClient.callApi('/random_number/{id}/toss/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RandomNumberResult}
     */

  }, {
    key: "randomNumberToss",
    value: function randomNumberToss(id, drawTossPayload) {
      return this.randomNumberTossWithHttpInfo(id, drawTossPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RandomNumberApi;
}();

exports["default"] = RandomNumberApi;