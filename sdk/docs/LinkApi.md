# EchaloasuerteJsSdk.LinkApi

All URIs are relative to *http://localhost/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkCreate**](LinkApi.md#linkCreate) | **POST** /link/ | 
[**linkRead**](LinkApi.md#linkRead) | **GET** /link/{id}/ | 
[**linkToss**](LinkApi.md#linkToss) | **POST** /link/{id}/toss/ | 



## linkCreate

> Link linkCreate(createLinkPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LinkApi();
let createLinkPayload = new EchaloasuerteJsSdk.CreateLinkPayload(); // CreateLinkPayload | 
apiInstance.linkCreate(createLinkPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLinkPayload** | [**CreateLinkPayload**](CreateLinkPayload.md)|  | 

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## linkRead

> Link linkRead(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LinkApi();
let id = "id_example"; // String | 
apiInstance.linkRead(id).then((data) => {
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

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkToss

> LinkResult linkToss(id, drawTossPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LinkApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.linkToss(id, drawTossPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **drawTossPayload** | [**DrawTossPayload**](DrawTossPayload.md)|  | 

### Return type

[**LinkResult**](LinkResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

