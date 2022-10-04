const logsuc = () => {
    document.getElementById("space").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function getCookie(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos != -1) {

        cookie_pos = cookie_pos + cookie_name.length + 1;
        //计算取cookie值得结束索引
        var cookie_end = allcookies.indexOf(";", cookie_pos);


        if (cookie_end == -1) {
            cookie_end = allcookies.length;


        }
        //得到想要的cookie的值
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
}


window.onload = function(){
    var cookie = getCookie("Auth");
    if(cookie != null || cookie!=""){
        logsuc();
    }
};