# EchaloasuerteJsSdk.Letter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**title** | **String** |  | 
**description** | **String** |  | 
**metadata** | [**[DrawMetadata]**](DrawMetadata.md) |  | [optional] 
**payments** | **[String]** |  | 
**updatedAt** | **Date** |  | [optional] [readonly] 
**privateId** | **String** |  | [optional] [readonly] 
**numberOfResults** | **Number** |  | [default to 1]
**allowRepeatedResults** | **Boolean** |  | [default to true]
**results** | [**[LetterResult]**](LetterResult.md) |  | [readonly] 



## Enum: [PaymentsEnum]


* `CERTIFIED` (value: `"CERTIFIED"`)

* `ADFREE` (value: `"ADFREE"`)

* `SUPPORT` (value: `"SUPPORT"`)




