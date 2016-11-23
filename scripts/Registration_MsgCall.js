var registerURL = "/agentapi/register";

function buildRegisterMsg(apiKey,srNo,assetName,assetTypeCode){
    
	var registerMsg = {};
	if(apiKey == "")
		document.getElementById("alert2").innerHTML = "Provide Api Key";
	if(srNo == "")
	   document.getElementById("alert3").innerHTML = "Provide Serial Number";
	registerMsg.apiKey = apiKey;
	registerMsg.srNo=srNo;
	registerMsg.assetName=assetName;
    registerMsg.assetTypeCode=assetTypeCode;
	return registerMsg;
}

function saveAsFile()
{
	var txt = $("#agentResponse").val();
	var t = new Blob([txt],{type: 'text/plain'});
	
	var path = "response.txt";
	
	var dwnlink = document.createElement("a");
	dwnlink.download = path;
	//dwnlink.innerHTML = "save";
	
	window.URL = window.URL|| window.webkitURL;
	
	dwnlink.href = window.URL.createObjectURL(t);
	dwnlink.onclick = destroyClickedElement;
	dwnlink.style.display = "none";
	
	document.body.appendChild(dwnlink);
	dwnlink.click();
	
}
function destroyClickedElement(event) {
            // remove the link from the DOM
            document.body.removeChild(event.target);
        }
	
function goToURL()
{

	location.href = "http://jsfiddle.net/santhipriya/usxnqs67/";
}	
		
		