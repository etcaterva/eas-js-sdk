# EchaloasuerteJsSdk.RaffleApi

All URIs are relative to *http://127.0.0.1:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**raffleCreate**](RaffleApi.md#raffleCreate) | **POST** /raffle/ | 
[**raffleParticipantsAdd**](RaffleApi.md#raffleParticipantsAdd) | **POST** /raffle/{id}/participants/ | 
[**raffleRead**](RaffleApi.md#raffleRead) | **GET** /raffle/{id}/ | 
[**raffleToss**](RaffleApi.md#raffleToss) | **POST** /raffle/{id}/toss/ | 


<a name="raffleCreate"></a>
# **raffleCreate**
> Raffle raffleCreate(raffle)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.RaffleApi();
let raffle = new EchaloasuerteJsSdk.Raffle(); // Raffle | 
apiInstance.raffleCreate(raffle).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raffle** | [**Raffle**](Raffle.md)|  | 

### Return type

[**Raffle**](Raffle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="raffleParticipantsAdd"></a>
# **raffleParticipantsAdd**
> raffleParticipantsAdd(id, participant)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.RaffleApi();
let id = "id_example"; // String | 
let participant = new EchaloasuerteJsSdk.Participant(); // Participant | 
apiInstance.raffleParticipantsAdd(id, participant).then(() => {
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

<a name="raffleRead"></a>
# **raffleRead**
> Raffle raffleRead(id)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.RaffleApi();
let id = "id_example"; // String | 
apiInstance.raffleRead(id).then((data) => {
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

[**Raffle**](Raffle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="raffleToss"></a>
# **raffleToss**
> RaffleResult raffleToss(id, drawTossPayload)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.RaffleApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.raffleToss(id, drawTossPayload).then((data) => {
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

[**RaffleResult**](RaffleResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

