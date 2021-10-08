# EchaloasuerteJsSdk.PaypalApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paypalCreate**](PaypalApi.md#paypalCreate) | **POST** /payment/create/ | 



## paypalCreate

> PayPalCreate paypalCreate()



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.PaypalApi();
apiInstance.paypalCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PayPalCreate**](PayPalCreate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

