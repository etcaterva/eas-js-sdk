# EchaloasuerteJsSdk.SpinnerApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spinnerCreate**](SpinnerApi.md#spinnerCreate) | **POST** /spinner/ | 
[**spinnerRead**](SpinnerApi.md#spinnerRead) | **GET** /spinner/{id}/ | 
[**spinnerToss**](SpinnerApi.md#spinnerToss) | **POST** /spinner/{id}/toss/ | 


<a name="spinnerCreate"></a>
# **spinnerCreate**
> Spinner spinnerCreate(spinner)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.SpinnerApi();
var spinner = new EchaloasuerteJsSdk.Spinner(); // Spinner | 
apiInstance.spinnerCreate(spinner).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spinner** | [**Spinner**](Spinner.md)|  | 

### Return type

[**Spinner**](Spinner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spinnerRead"></a>
# **spinnerRead**
> Spinner spinnerRead(id)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.SpinnerApi();
var id = "id_example"; // String | 
apiInstance.spinnerRead(id).then(function(data) {
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

[**Spinner**](Spinner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spinnerToss"></a>
# **spinnerToss**
> SpinnerResult spinnerToss(id, drawTossPayload)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.SpinnerApi();
var id = "id_example"; // String | 
var drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.spinnerToss(id, drawTossPayload).then(function(data) {
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

[**SpinnerResult**](SpinnerResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

