var metricUrl = "/agentapi/assetmetrics";

function addMetricValue(assetMetricMsgs,metCode,metVal,detectionTime){
	if(assetMetricMsgs == null)
		$.error("Provide non-null json object as assetMetricMsgs");
	var existingMetric = null;
	//Search for pre-existing metric using metric-code
	logMessage("INFO","Searching for pre-existing assetMetricMsg using metric-code " + metCode);
	for(i = 0 ; i < assetMetricMsgs.length ; i++){
		if(assetMetricMsgs[i].metricCode == metCode)
			existingMetric = assetMetricMsgs[i];
	}
	//If metric not found then create new
	if(existingMetric == null)
	{
		logMessage("INFO","Introducing new metric " + metCode + " assetMetricMsg");
		existingMetric = {};
		existingMetric.metricCode = metCode;
		assetMetricMsgs.push(existingMetric);
	}
	//If no values are found then create empty array
	if(existingMetric.values == null){
		existingMetric.values = [];
	}
	metricVal = {};
	metricVal.metricValue=metVal;
	if(detectionTime != null || detectionTime == "")
		metricVal.detectionTime=detectionTime;
	existingMetric.values.push(metricVal);
	
}

function validateMetricValue(metricCode,metricVal, detectionTime)
{
			if(metricCode == "")
					document.getElementById("alert6").innerHTML = "Please Provide Metric Code";

			if(metricVal == "")
					document.getElementById("alert7").innerHTML = "Please Provide Metric Value";
}
function goToURL1()
{
	location.href = "http://jsfiddle.net/santhipriya/s5ru32cu/";
}	