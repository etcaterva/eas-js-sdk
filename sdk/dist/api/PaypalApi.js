"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayPalCreate = _interopRequireDefault(require("../model/PayPalCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Paypal service.
* @module api/PaypalApi
* @version 0.0.1
*/
var PaypalApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaypalApi. 
  * @alias module:api/PaypalApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaypalApi(apiClient) {
    _classCallCheck(this, PaypalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PayPalCreate} and HTTP response
   */


  _createClass(PaypalApi, [{
    key: "paypalCreateWithHttpInfo",
    value: function paypalCreateWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayPalCreate["default"];
      return this.apiClient.callApi('/payment/create/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PayPalCreate}
     */

  }, {
    key: "paypalCreate",
    value: function paypalCreate() {
      return this.paypalCreateWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaypalApi;
}();

exports["default"] = PaypalApi;