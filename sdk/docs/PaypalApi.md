# EchaloasuerteJsSdk.PaypalApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paypalCreate**](PaypalApi.md#paypalCreate) | **POST** /paypal/create/ | 
[**redeemPromoCode**](PaypalApi.md#redeemPromoCode) | **POST** /promo-code/redeem/ | 



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


## redeemPromoCode

> redeemPromoCode(redeemPromoCode)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.PaypalApi();
let redeemPromoCode = new EchaloasuerteJsSdk.RedeemPromoCode(); // RedeemPromoCode | 
apiInstance.redeemPromoCode(redeemPromoCode).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redeemPromoCode** | [**RedeemPromoCode**](RedeemPromoCode.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

