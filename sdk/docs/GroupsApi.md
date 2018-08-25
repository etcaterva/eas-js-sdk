# EchaloasuerteJsSdk.GroupsApi

All URIs are relative to *http://127.0.0.1:8000/api*

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
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.GroupsApi();
let groups = new EchaloasuerteJsSdk.Groups(); // Groups | 
apiInstance.groupsCreate(groups).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.GroupsApi();
let id = "id_example"; // String | 
let participant = new EchaloasuerteJsSdk.Participant(); // Participant | 
apiInstance.groupsParticipantsAdd(id, participant).then(() => {
  console.log('API called successfully.');
}, (error) => {
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
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.GroupsApi();
let id = "id_example"; // String | 
apiInstance.groupsRead(id).then((data) => {
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
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.GroupsApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.groupsToss(id, drawTossPayload).then((data) => {
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

[**GroupsResult**](GroupsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

