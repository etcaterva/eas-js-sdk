"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawTossPayload = _interopRequireDefault(require("../model/DrawTossPayload"));

var _Spinner = _interopRequireDefault(require("../model/Spinner"));

var _SpinnerResult = _interopRequireDefault(require("../model/SpinnerResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Spinner service.
* @module api/SpinnerApi
* @version 0.0.1
*/
var SpinnerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SpinnerApi. 
  * @alias module:api/SpinnerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SpinnerApi(apiClient) {
    _classCallCheck(this, SpinnerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Spinner} spinner 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Spinner} and HTTP response
   */


  _createClass(SpinnerApi, [{
    key: "spinnerCreateWithHttpInfo",
    value: function spinnerCreateWithHttpInfo(spinner) {
      var postBody = spinner; // verify the required parameter 'spinner' is set

      if (spinner === undefined || spinner === null) {
        throw new Error("Missing the required parameter 'spinner' when calling spinnerCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Spinner["default"];
      return this.apiClient.callApi('/spinner/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Spinner} spinner 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spinner}
     */

  }, {
    key: "spinnerCreate",
    value: function spinnerCreate(spinner) {
      return this.spinnerCreateWithHttpInfo(spinner).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Spinner} and HTTP response
     */

  }, {
    key: "spinnerReadWithHttpInfo",
    value: function spinnerReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling spinnerRead");
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
      var returnType = _Spinner["default"];
      return this.apiClient.callApi('/spinner/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spinner}
     */

  }, {
    key: "spinnerRead",
    value: function spinnerRead(id) {
      return this.spinnerReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SpinnerResult} and HTTP response
     */

  }, {
    key: "spinnerTossWithHttpInfo",
    value: function spinnerTossWithHttpInfo(id, drawTossPayload) {
      var postBody = drawTossPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling spinnerToss");
      } // verify the required parameter 'drawTossPayload' is set


      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling spinnerToss");
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
      var returnType = _SpinnerResult["default"];
      return this.apiClient.callApi('/spinner/{id}/toss/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpinnerResult}
     */

  }, {
    key: "spinnerToss",
    value: function spinnerToss(id, drawTossPayload) {
      return this.spinnerTossWithHttpInfo(id, drawTossPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SpinnerApi;
}();

exports["default"] = SpinnerApi;