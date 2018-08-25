# EchaloasuerteJsSdk.CoinApi

All URIs are relative to *http://127.0.0.1:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coinCreate**](CoinApi.md#coinCreate) | **POST** /coin/ | 
[**coinRead**](CoinApi.md#coinRead) | **GET** /coin/{id}/ | 
[**coinToss**](CoinApi.md#coinToss) | **POST** /coin/{id}/toss/ | 


<a name="coinCreate"></a>
# **coinCreate**
> Coin coinCreate(coin)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.CoinApi();
let coin = new EchaloasuerteJsSdk.Coin(); // Coin | 
apiInstance.coinCreate(coin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | [**Coin**](Coin.md)|  | 

### Return type

[**Coin**](Coin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coinRead"></a>
# **coinRead**
> Coin coinRead(id)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.CoinApi();
let id = "id_example"; // String | 
apiInstance.coinRead(id).then((data) => {
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

[**Coin**](Coin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="coinToss"></a>
# **coinToss**
> CoinResult coinToss(id, drawTossPayload)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.CoinApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.coinToss(id, drawTossPayload).then((data) => {
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

[**CoinResult**](CoinResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

