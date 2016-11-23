/**
Gateway script initializes AJAX request logic based on LiveControl REST API.
**/

$(document).ready(function () {
    $.ajaxSetup({
        timeout: 5000,
        contentType: "application/json",
        accept:"application/json",
        success:function(responseJSON,status,jqxhr){
            logMessage(status,responseJSON.message);
        },
        error:function(jqxhr,status,error){
            logMessage(status,error);
            try{
                var responseJSON = JSON.parse(jqxhr.responseText);
                logMessage(status, "API-Response Status:" + responseJSON.status + ", Message: " + responseJSON.message);
            }
            catch(err){
                logMessage("error","ResponseText: " + jqxhr.responseText);
                logMessage("error","ResponseText is not a valid API-Response");
            }
        }
    });
});

/**
Logging to console
**/
function logMessage(severity,message){
    var now = new Date();
    var dateText = now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear() + " " + now.getHours()+ ":" + now.getMinutes()+ ":" + now.getSeconds();
    console.log(dateText + " [" + severity + "] " + message);
}