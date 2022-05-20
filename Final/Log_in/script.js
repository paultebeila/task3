
let app;
if(localStorage.getItem("users") === null) {
    //create instance the app
    app = new LocalApp();
} else {
    //create instance the app
    app = new LocalApp();

    let strArray = localStorage.getItem("users");
    let users = JSON.parse(strArray);

    app.users = users;
}

if(localStorage.getItem("username") === null) {
    //store user identification
    localStorage.setItem("username", "");
}

//function to register
function registerUser() {
    let fullnames = document.querySelector("#names").value;
    let surname1 = document.querySelector("#surname").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;

    app.addUser(fullnames, surname1, email, phone, password, password2);
    localStorage.setItem("users", JSON.stringify(app.users));
}

//login process
function loginUser() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if(app.loginUser(username, password)) {
        let uidL = username;
        localStorage.setItem("username", uidL);
        location.href = "../Home_Page.html";
    }
    
}
