# EchaloasuerteJsSdk.LetterApi

All URIs are relative to *http://127.0.0.1:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**letterCreate**](LetterApi.md#letterCreate) | **POST** /letter/ | 
[**letterRead**](LetterApi.md#letterRead) | **GET** /letter/{id}/ | 
[**letterToss**](LetterApi.md#letterToss) | **POST** /letter/{id}/toss/ | 


<a name="letterCreate"></a>
# **letterCreate**
> Letter letterCreate(letter)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LetterApi();
let letter = new EchaloasuerteJsSdk.Letter(); // Letter | 
apiInstance.letterCreate(letter).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **letter** | [**Letter**](Letter.md)|  | 

### Return type

[**Letter**](Letter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="letterRead"></a>
# **letterRead**
> Letter letterRead(id)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LetterApi();
let id = "id_example"; // String | 
apiInstance.letterRead(id).then((data) => {
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

[**Letter**](Letter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="letterToss"></a>
# **letterToss**
> LetterResult letterToss(id, drawTossPayload)



### Example
```javascript
import EchaloasuerteJsSdk from 'echaloasuerte-js-sdk';

let apiInstance = new EchaloasuerteJsSdk.LetterApi();
let id = "id_example"; // String | 
let drawTossPayload = new EchaloasuerteJsSdk.DrawTossPayload(); // DrawTossPayload | 
apiInstance.letterToss(id, drawTossPayload).then((data) => {
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

[**LetterResult**](LetterResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

