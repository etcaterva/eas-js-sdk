# EchaloasuerteJsSdk.Lottery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**privateId** | **String** |  | [optional] [readonly] 
**metadata** | [**[DrawMetadata]**](DrawMetadata.md) |  | [optional] 
**payments** | **[String]** |  | [optional] 
**numberOfResults** | **Number** |  | [optional] [default to 1]
**participants** | [**[Participant]**](Participant.md) |  | 
**results** | [**[LotteryResult]**](LotteryResult.md) |  | [optional] [readonly] 



## Enum: [PaymentsEnum]


* `CERTIFIED` (value: `"CERTIFIED"`)

* `ADFREE` (value: `"ADFREE"`)

* `SUPPORT` (value: `"SUPPORT"`)




