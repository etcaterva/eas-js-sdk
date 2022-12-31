# EchaloasuerteJsSdk.SecretSantaApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretSantaCreate**](SecretSantaApi.md#secretSantaCreate) | **POST** /secret-santa/ | 
[**secretSantaResultAdminGet**](SecretSantaApi.md#secretSantaResultAdminGet) | **GET** /secret-santa-admin/{id}/ | 
[**secretSantaResultAdminPatch**](SecretSantaApi.md#secretSantaResultAdminPatch) | **PATCH** /secret-santa-admin/{draw_id}/{result_id}/ | 
[**secretSantaResultGet**](SecretSantaApi.md#secretSantaResultGet) | **GET** /secret-santa/{id}/ | 



## secretSantaCreate

> SecretSantaCreateResponse secretSantaCreate(secretSanta)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.SecretSantaApi();
let secretSanta = new EchaloasuerteJsSdk.SecretSanta(); // SecretSanta | 
apiInstance.secretSantaCreate(secretSanta).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secretSanta** | [**SecretSanta**](SecretSanta.md)|  | 

### Return type

[**SecretSantaCreateResponse**](SecretSantaCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secretSantaResultAdminGet

> SecretSantaAdminResponse secretSantaResultAdminGet(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.SecretSantaApi();
let id = "id_example"; // String | 
apiInstance.secretSantaResultAdminGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**SecretSantaAdminResponse**](SecretSantaAdminResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretSantaResultAdminPatch

> secretSantaResultAdminPatch(drawId, resultId, opts)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.SecretSantaApi();
let drawId = "drawId_example"; // String | 
let resultId = "resultId_example"; // String | 
let opts = {
  'secretSantaResendEmail': new EchaloasuerteJsSdk.SecretSantaResendEmail() // SecretSantaResendEmail | 
};
apiInstance.secretSantaResultAdminPatch(drawId, resultId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drawId** | **String**|  | 
 **resultId** | **String**|  | 
 **secretSantaResendEmail** | [**SecretSantaResendEmail**](SecretSantaResendEmail.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## secretSantaResultGet

> SecretSantaResult secretSantaResultGet(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.SecretSantaApi();
let id = "id_example"; // String | 
apiInstance.secretSantaResultGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**SecretSantaResult**](SecretSantaResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

