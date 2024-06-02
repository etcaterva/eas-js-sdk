# EchaloasuerteJsSdk.TiktokApi

All URIs are relative to *http://localhost/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tiktokCreate**](TiktokApi.md#tiktokCreate) | **POST** /tiktok/ | 
[**tiktokRead**](TiktokApi.md#tiktokRead) | **GET** /tiktok/{id}/ | 
[**tiktokRetoss**](TiktokApi.md#tiktokRetoss) | **PATCH** /tiktok/{id}/retoss/ | 
[**tiktokToss**](TiktokApi.md#tiktokToss) | **POST** /tiktok/{id}/toss/ | 



## tiktokCreate

> Tiktok tiktokCreate(tiktok)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TiktokApi();
let tiktok = new EchaloasuerteJsSdk.Tiktok(); // Tiktok | 
apiInstance.tiktokCreate(tiktok).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tiktok** | [**Tiktok**](Tiktok.md)|  | 

### Return type

[**Tiktok**](Tiktok.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tiktokRead

> Tiktok tiktokRead(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TiktokApi();
let id = "id_example"; // String | 
apiInstance.tiktokRead(id).then((data) => {
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

[**Tiktok**](Tiktok.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tiktokRetoss

> TiktokResult tiktokRetoss(id, opts)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TiktokApi();
let id = "id_example"; // String | 
let opts = {
  'drawReTossPayload': new EchaloasuerteJsSdk.DrawReTossPayload() // DrawReTossPayload | 
};
apiInstance.tiktokRetoss(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **drawReTossPayload** | [**DrawReTossPayload**](DrawReTossPayload.md)|  | [optional] 

### Return type

[**TiktokResult**](TiktokResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tiktokToss

> TiktokResult tiktokToss(id, drawTossPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TiktokApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.tiktokToss(id, drawTossPayload).then((data) => {
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

[**TiktokResult**](TiktokResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

