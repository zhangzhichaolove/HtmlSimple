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
    //ajaxPost("http://renjian.163.com/special/000158D9/renjian_mobile_series.js")
}

function include_js(file) {
    var _doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', file);
    _doc.appendChild(js);
    //判断非IE浏览器（准确的说只能够判断到IE10）。
    if (!/*@cc_on!@*/0) { //if not IE
        js.onload = function () {
            console.log("文件加载完毕");
            var reader = new FileReader();
            reader.onload = function () {
                console.log("this.result", this.result);
            }
            reader.readAsText(file);
        }
    } else {
        js.onreadystatechange = function () {
            if (js.readyState == 'loaded' || js.readyState == 'complete') {
                console.log("文件加载完毕");
            }
        }
    }
    return false;
}

include_js('http://www.softwhy.com/mytest/jQuery/jquery-1.8.3.js');


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
    console.log("json", json)
}