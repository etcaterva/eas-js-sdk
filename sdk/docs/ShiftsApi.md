# EchaloasuerteJsSdk.ShiftsApi

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shiftsCreate**](ShiftsApi.md#shiftsCreate) | **POST** /shifts/ | 
[**shiftsRead**](ShiftsApi.md#shiftsRead) | **GET** /shifts/{id}/ | 
[**shiftsToss**](ShiftsApi.md#shiftsToss) | **POST** /shifts/{id}/toss/ | 



## shiftsCreate

> Shifts shiftsCreate(shifts)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.ShiftsApi();
let shifts = new EchaloasuerteJsSdk.Shifts(); // Shifts | 
apiInstance.shiftsCreate(shifts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shifts** | [**Shifts**](Shifts.md)|  | 

### Return type

[**Shifts**](Shifts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## shiftsRead

> Shifts shiftsRead(id)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.ShiftsApi();
let id = "id_example"; // String | 
apiInstance.shiftsRead(id).then((data) => {
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

[**Shifts**](Shifts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shiftsToss

> ShiftsResult shiftsToss(id, drawTossPayload)



### Example

```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.ShiftsApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.shiftsToss(id, drawTossPayload).then((data) => {
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

[**ShiftsResult**](ShiftsResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

