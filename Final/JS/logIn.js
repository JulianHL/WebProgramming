function checkStuff() {
    var userId = document.getElementById("userId_input").value;
    var password = document.getElementById("password_input").value;
    if (userId.toLocaleLowerCase() == "julian" && password == "2305009") {
        window.open("register.html");
        window.close(this);
    } else {
        alert("Please enter the right UserId or Password");
    }
}
