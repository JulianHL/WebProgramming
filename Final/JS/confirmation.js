function returnToLogin() {
    window.open("login.html");
    window.close(this);
}

function getCookies() {
    var arrCookies = document.cookie.split("|");

    for (var i = 0; i < arrCookies.length; i++) {
        var column = arrCookies[i].split("=");
        document.getElementById(column[0]).innerText = column[1];
        console.log(i);
    }
}
