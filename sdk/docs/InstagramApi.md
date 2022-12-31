# EchaloasuerteJsSdk.InstagramApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instagramCreate**](InstagramApi.md#instagramCreate) | **POST** /instagram/ | 
[**instagramRead**](InstagramApi.md#instagramRead) | **GET** /instagram/{id}/ | 
[**instagramRetoss**](InstagramApi.md#instagramRetoss) | **PATCH** /instagram/{id}/retoss/ | 
[**instagramToss**](InstagramApi.md#instagramToss) | **POST** /instagram/{id}/toss/ | 



## instagramCreate

> Instagram instagramCreate(instagram)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.InstagramApi();
let instagram = new EchaloasuerteJsSdk.Instagram(); // Instagram | 
apiInstance.instagramCreate(instagram).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instagram** | [**Instagram**](Instagram.md)|  | 

### Return type

[**Instagram**](Instagram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## instagramRead

> Instagram instagramRead(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.InstagramApi();
let id = "id_example"; // String | 
apiInstance.instagramRead(id).then((data) => {
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

[**Instagram**](Instagram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## instagramRetoss

> InstagramResult instagramRetoss(id, opts)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.InstagramApi();
let id = "id_example"; // String | 
let opts = {
  'instagramRetossRequest': new EchaloasuerteJsSdk.InstagramRetossRequest() // InstagramRetossRequest | 
};
apiInstance.instagramRetoss(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **instagramRetossRequest** | [**InstagramRetossRequest**](InstagramRetossRequest.md)|  | [optional] 

### Return type

[**InstagramResult**](InstagramResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## instagramToss

> InstagramResult instagramToss(id, drawTossPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.InstagramApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.instagramToss(id, drawTossPayload).then((data) => {
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

[**InstagramResult**](InstagramResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

