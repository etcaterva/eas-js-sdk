# EchaloasuerteJsSdk.LotteryApi

All URIs are relative to *http://127.0.0.1:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lotteryCreate**](LotteryApi.md#lotteryCreate) | **POST** /lottery/ | 
[**lotteryParticipantsAdd**](LotteryApi.md#lotteryParticipantsAdd) | **POST** /lottery/{id}/participants/ | 
[**lotteryRead**](LotteryApi.md#lotteryRead) | **GET** /lottery/{id}/ | 
[**lotteryToss**](LotteryApi.md#lotteryToss) | **POST** /lottery/{id}/toss/ | 


<a name="lotteryCreate"></a>
# **lotteryCreate**
> Lottery lotteryCreate(lottery)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LotteryApi();
let lottery = new EchaloasuerteJsSdk.Lottery(); // Lottery | 
apiInstance.lotteryCreate(lottery).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery** | [**Lottery**](Lottery.md)|  | 

### Return type

[**Lottery**](Lottery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lotteryParticipantsAdd"></a>
# **lotteryParticipantsAdd**
> lotteryParticipantsAdd(id, participant)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LotteryApi();
let id = "id_example"; // String | 
let participant = new EchaloasuerteJsSdk.Participant(); // Participant | 
apiInstance.lotteryParticipantsAdd(id, participant).then(() => {
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

<a name="lotteryRead"></a>
# **lotteryRead**
> Lottery lotteryRead(id)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LotteryApi();
let id = "id_example"; // String | 
apiInstance.lotteryRead(id).then((data) => {
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

[**Lottery**](Lottery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lotteryToss"></a>
# **lotteryToss**
> LotteryResult lotteryToss(id, drawTossPayload)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LotteryApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.lotteryToss(id, drawTossPayload).then((data) => {
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

[**LotteryResult**](LotteryResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

