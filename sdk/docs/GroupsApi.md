# EchaloasuerteJsSdk.GroupsApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsCreate**](GroupsApi.md#groupsCreate) | **POST** /groups/ | 
[**groupsParticipantsAdd**](GroupsApi.md#groupsParticipantsAdd) | **POST** /groups/{id}/participants/ | 
[**groupsRead**](GroupsApi.md#groupsRead) | **GET** /groups/{id}/ | 
[**groupsToss**](GroupsApi.md#groupsToss) | **POST** /groups/{id}/toss/ | 


<a name="groupsCreate"></a>
# **groupsCreate**
> Groups groupsCreate(groups)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.GroupsApi();
var groups = new EchaloasuerteJsSdk.Groups(); // Groups | 
apiInstance.groupsCreate(groups).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groups** | [**Groups**](Groups.md)|  | 

### Return type

[**Groups**](Groups.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsParticipantsAdd"></a>
# **groupsParticipantsAdd**
> groupsParticipantsAdd(id, participant)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.GroupsApi();
var id = "id_example"; // String | 
var participant = new EchaloasuerteJsSdk.Participant(); // Participant | 
apiInstance.groupsParticipantsAdd(id, participant).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **participant** | [**Participant**](Participant.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="groupsRead"></a>
# **groupsRead**
> Groups groupsRead(id)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.GroupsApi();
var id = "id_example"; // String | 
apiInstance.groupsRead(id).then(function(data) {
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

[**Groups**](Groups.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsToss"></a>
# **groupsToss**
> GroupsResult groupsToss(id, drawTossPayload)



### Example
```javascript
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');

var apiInstance = new EchaloasuerteJsSdk.GroupsApi();
var id = "id_example"; // String | 
var drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.groupsToss(id, drawTossPayload).then(function(data) {
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

[**GroupsResult**](GroupsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

