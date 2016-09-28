/**
 * Created by wwagner on 9/27/2016.
 */

window.addEventListener("load", function() {
    pingServer();
});

var home_server = "http://127.0.0.1:8888/";

function pingServer(){
    console.log("Pinging server", home_server);
    var get = new XMLHttpRequest();

    get.onreadystatechange = function () {
        if (get.readyState == 4 && get.status == 200) {
            console.log(get.responseText);
        }
    };

    get.open("GET", home_server);
    get.send();
    return home_server;
}

function postServer(){
    console.log("Pinging server", home_server);
    var post = new XMLHttpRequest();

    post.onreadystatechange = function () {
        if (post.readyState == 4 && post.status == 200) {
            console.log(post.responseText);
        }
    };

    post.open("GET", home_server);

    var post_data = document.getElementById("input");

    post.send(null);
    return home_server;
}