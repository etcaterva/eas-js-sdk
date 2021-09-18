"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DrawTossPayload = _interopRequireDefault(require("../model/DrawTossPayload"));

var _Link = _interopRequireDefault(require("../model/Link"));

var _LinkResult = _interopRequireDefault(require("../model/LinkResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Link service.
* @module api/LinkApi
* @version 0.0.1
*/
var LinkApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LinkApi. 
  * @alias module:api/LinkApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LinkApi(apiClient) {
    _classCallCheck(this, LinkApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Link} link 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Link} and HTTP response
   */


  _createClass(LinkApi, [{
    key: "linkCreateWithHttpInfo",
    value: function linkCreateWithHttpInfo(link) {
      var postBody = link; // verify the required parameter 'link' is set

      if (link === undefined || link === null) {
        throw new Error("Missing the required parameter 'link' when calling linkCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Link["default"];
      return this.apiClient.callApi('/link/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Link} link 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Link}
     */

  }, {
    key: "linkCreate",
    value: function linkCreate(link) {
      return this.linkCreateWithHttpInfo(link).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Link} and HTTP response
     */

  }, {
    key: "linkReadWithHttpInfo",
    value: function linkReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling linkRead");
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
      var returnType = _Link["default"];
      return this.apiClient.callApi('/link/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Link}
     */

  }, {
    key: "linkRead",
    value: function linkRead(id) {
      return this.linkReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LinkResult} and HTTP response
     */

  }, {
    key: "linkTossWithHttpInfo",
    value: function linkTossWithHttpInfo(id, drawTossPayload) {
      var postBody = drawTossPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling linkToss");
      } // verify the required parameter 'drawTossPayload' is set


      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling linkToss");
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
      var returnType = _LinkResult["default"];
      return this.apiClient.callApi('/link/{id}/toss/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LinkResult}
     */

  }, {
    key: "linkToss",
    value: function linkToss(id, drawTossPayload) {
      return this.linkTossWithHttpInfo(id, drawTossPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LinkApi;
}();

exports["default"] = LinkApi;