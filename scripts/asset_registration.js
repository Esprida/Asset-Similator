var registerURL = "/agentapi/registration";

function buildRegisterMsg(apiKey,srNo,assetName,assetTypeCode){
    var registerMsg = {};
    registerMsg.apiKey=apiKey;
	registerMsg.srNo=srNo;
	registerMsg.assetName=assetName;
    registerMsg.assetTypeCode=assetTypeCode;
	return registerMsg;
}