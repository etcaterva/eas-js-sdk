# EchaloasuerteJsSdk.Lottery

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
**participants** | [**[ParticipantField]**](ParticipantField.md) |  | 
**numberOfResults** | **Number** |  | [optional] [default to 1]
**results** | [**[LotteryResult]**](LotteryResult.md) |  | [readonly] 



## Enum: [PaymentsEnum]


* `CERTIFIED` (value: `"CERTIFIED"`)

* `ADFREE` (value: `"ADFREE"`)

* `SUPPORT` (value: `"SUPPORT"`)




