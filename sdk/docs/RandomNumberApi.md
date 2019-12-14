# EchaloasuerteJsSdk.RandomNumberApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**randomNumberCreate**](RandomNumberApi.md#randomNumberCreate) | **POST** /random_number/ | 
[**randomNumberRead**](RandomNumberApi.md#randomNumberRead) | **GET** /random_number/{id}/ | 
[**randomNumberToss**](RandomNumberApi.md#randomNumberToss) | **POST** /random_number/{id}/toss/ | 


<a name="randomNumberCreate"></a>
# **randomNumberCreate**
> RandomNumber randomNumberCreate(randomNumber)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.RandomNumberApi();
var randomNumber = new EchaloasuerteJsSdk.RandomNumber(); // RandomNumber | 
apiInstance.randomNumberCreate(randomNumber).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **randomNumber** | [**RandomNumber**](RandomNumber.md)|  | 

### Return type

[**RandomNumber**](RandomNumber.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="randomNumberRead"></a>
# **randomNumberRead**
> RandomNumber randomNumberRead(id)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.RandomNumberApi();
var id = "id_example"; // String | 
apiInstance.randomNumberRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**RandomNumber**](RandomNumber.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="randomNumberToss"></a>
# **randomNumberToss**
> RandomNumberResult randomNumberToss(id, drawTossPayload)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.RandomNumberApi();
var id = "id_example"; // String | 
var drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.randomNumberToss(id, drawTossPayload).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **drawTossPayload** | [**DrawTossPayload**](DrawTossPayload.md)|  | 

### Return type

[**RandomNumberResult**](RandomNumberResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

