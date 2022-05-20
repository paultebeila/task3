//function to display user
function displayUser() {
    
    username = localStorage.getItem("username");
    
    for (let i = 0; i < app.users.length; i++) {
        if (username === app.users[i].email || username === app.users[i].phone) {
            user = app.users[i];
            break;
        }
    }

    let screen = document.querySelector("#display");
    //let text = "Welcome " + user.fullnames + " your email is " + user.email + " your phone is " + user.phone;
    //screen.innerHTML = text;

    let h1 = document.createElement("h4");
    let h1Text = document.createTextNode(user.fullnames + " " + user.surname);
    h1.appendChild(h1Text);

    let h2 = document.createElement("h5");
    let h2Text = document.createTextNode(user.email);
    h2.appendChild(h2Text);

    let h3 = document.createElement("h6");
    let h3Text = document.createTextNode(user.phone);
    h3.appendChild(h3Text);

    screen.appendChild(h1);
    screen.appendChild(h2);
    screen.appendChild(h3);
}
let user;
let username = localStorage.getItem("user");
displayUser();