/**
 * Created by wwagner on 9/27/2016.
 */

var bgPage = chrome.extension.getBackgroundPage();

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("GET").addEventListener("click", getHandler);
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("POST").addEventListener("click", postHandler);
});

function getHandler(){
    console.log("Click");
    var home_server = bgPage.pingServer();
    console.log("Passed through: ", home_server);
}


function postHandler(){
    console.log("Click");
    var home_server = bgPage.postServer();
    console.log("Passed through: ", home_server);
}