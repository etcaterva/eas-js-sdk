"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecretSanta = _interopRequireDefault(require("../model/SecretSanta"));

var _SecretSantaResult = _interopRequireDefault(require("../model/SecretSantaResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SecretSanta service.
* @module api/SecretSantaApi
* @version 0.0.1
*/
var SecretSantaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SecretSantaApi. 
  * @alias module:api/SecretSantaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SecretSantaApi(apiClient) {
    _classCallCheck(this, SecretSantaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/SecretSanta} secretSanta 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(SecretSantaApi, [{
    key: "secretSantaCreateWithHttpInfo",
    value: function secretSantaCreateWithHttpInfo(secretSanta) {
      var postBody = secretSanta; // verify the required parameter 'secretSanta' is set

      if (secretSanta === undefined || secretSanta === null) {
        throw new Error("Missing the required parameter 'secretSanta' when calling secretSantaCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/secret-santa/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/SecretSanta} secretSanta 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "secretSantaCreate",
    value: function secretSantaCreate(secretSanta) {
      return this.secretSantaCreateWithHttpInfo(secretSanta).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecretSantaResult} and HTTP response
     */

  }, {
    key: "secretSantaResultGetWithHttpInfo",
    value: function secretSantaResultGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling secretSantaResultGet");
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
      var returnType = _SecretSantaResult["default"];
      return this.apiClient.callApi('/secret-santa/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecretSantaResult}
     */

  }, {
    key: "secretSantaResultGet",
    value: function secretSantaResultGet(id) {
      return this.secretSantaResultGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SecretSantaApi;
}();

exports["default"] = SecretSantaApi;