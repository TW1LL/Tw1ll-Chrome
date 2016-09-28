/**
 * Created by wwagner on 9/27/2016.
 */


var home_server = "http://127.0.0.1:8888";

function pingServer(){
    console.log("Pinging server", home_server);
    var get = new XMLHttpRequest();
    get.onreadystatechange = function () {
        if (get.readyState == 4 && get.status == 200) {
            console.log(get.responseText);
        }
    };

    get.open("GET", home_server);
    get.send(null);
}

pingServer();

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}