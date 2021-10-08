# EchaloasuerteJsSdk.PaypalApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paypalCreate**](PaypalApi.md#paypalCreate) | **POST** /paypal/create/ | 



## paypalCreate

> PaypalResponse paypalCreate(paypalCreatePayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.PaypalApi();
let paypalCreatePayload = new EchaloasuerteJsSdk.PaypalCreatePayload(); // PaypalCreatePayload | 
apiInstance.paypalCreate(paypalCreatePayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paypalCreatePayload** | [**PaypalCreatePayload**](PaypalCreatePayload.md)|  | 

### Return type

[**PaypalResponse**](PaypalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

