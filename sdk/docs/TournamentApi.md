# EchaloasuerteJsSdk.TournamentApi

All URIs are relative to *http://localhost/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tournamentCreate**](TournamentApi.md#tournamentCreate) | **POST** /tournament/ | 
[**tournamentParticipantsAdd**](TournamentApi.md#tournamentParticipantsAdd) | **POST** /tournament/{id}/participants/ | 
[**tournamentRead**](TournamentApi.md#tournamentRead) | **GET** /tournament/{id}/ | 
[**tournamentToss**](TournamentApi.md#tournamentToss) | **POST** /tournament/{id}/toss/ | 



## tournamentCreate

> Tournament tournamentCreate(createTournamentPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TournamentApi();
let createTournamentPayload = new EchaloasuerteJsSdk.CreateTournamentPayload(); // CreateTournamentPayload | 
apiInstance.tournamentCreate(createTournamentPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTournamentPayload** | [**CreateTournamentPayload**](CreateTournamentPayload.md)|  | 

### Return type

[**Tournament**](Tournament.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tournamentParticipantsAdd

> tournamentParticipantsAdd(id, participant)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TournamentApi();
let id = "id_example"; // String | 
let participant = new EchaloasuerteJsSdk.Participant(); // Participant | 
apiInstance.tournamentParticipantsAdd(id, participant).then(() => {
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


## tournamentRead

> Tournament tournamentRead(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TournamentApi();
let id = "id_example"; // String | 
apiInstance.tournamentRead(id).then((data) => {
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

[**Tournament**](Tournament.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tournamentToss

> TournamentResult tournamentToss(id, drawTossPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.TournamentApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.tournamentToss(id, drawTossPayload).then((data) => {
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

[**TournamentResult**](TournamentResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

