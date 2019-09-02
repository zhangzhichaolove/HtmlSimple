var sdkInit
window.onload = function () {
    sdkInit = {
        "account": '',
        "appkey": '',
        "k7_vaildCode": ''
    }

    //在一个js文件中引入另一个js文件
    var new_element = document.createElement("script");
    new_element.setAttribute("type", "text/javascript");
    new_element.setAttribute("src", "http://renjian.163.com/special/000158D9/renjian_mobile_series.js");
    document.body.appendChild(new_element);
    ajaxPost("http://renjian.163.com/special/000158D9/renjian_mobile_series.js")
}


//ajax 对象
function ajaxObject() {
    let xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器不支持AJAX！");
                return false;
            }
        }
    }
    return xmlHttp;
}


// ajax post请求：
function ajaxPost(url) {
    const ajax = ajaxObject();
    ajax.open("get", url, true);
    //ajax.setRequestHeader("Content-Type", "application/x-javascript");
    ajax.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36");
    ajax.onreadystatechange = function () {
        console.log("返回的数据", ajax.status)
        if (ajax.readyState == 4) {
            //const response = JSON.parse(ajax.responseText);
            console.log("返回的数据", ajax)
        }
    }
    ajax.send(null);
}


function callback(json) {
    console.log(json)
}