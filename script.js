const loginBtn = document.getElementById("loginBtn");
const logInOut = document.getElementById("logInOut");

const user = [
    { userName: "janne", Password: "test"}
]

// kolla om någon är inloggad med en if
if (localStorage.getItem("user")) {
    printName();
} else {
    logIn();
     //Här skall inloggforumäret komma
}

// Om true visa välkomst sida för inloggad = printName och ta bort loggin formuläret - klar
// Om false visa inloggningformulär
/* loginBtn.addEventListener('click', () => {
  console.log('klick på knapp');
    console.log("userName", userName);
 if( user[0].Password === Password.value && user[0].userName === userName.value) {
    
    //Spara användare i localstorage
    //console.log("user i Event Listener", user);
    localStorage.setItem("user", user[0].userName);
    printName();
    } else {
        PrintUnknow(); 
    }
}); */ 

//Hämta namnet från Ls och skriv ut på sidan
function printName() {
    logInOut.innerHTML = "";
    let user = localStorage.getItem("user");

    //Skapa logga ut knapp
    let logOutBtn = document.createElement("button")
    logOutBtn.innerText = "Logga ut";
    logOutBtn.addEventListener('click', () => {
        localStorage.removeItem(user);
        //localStorage.clear();
        logIn();
    });

    logInOut.appendChild(logOutBtn);
    let userName =  localStorage.getItem("user");
    demo.innerText = "Välkommen " + userName;
    demo.innerHTML += '<div id="picture"></div>'
}

//Användaren finns inte
function PrintUnknow() {
    demo.innerText = "Fel användarnamn eller lösenord";
}


//Skapa function log in formulär
function logIn() {
    demo.innerHTML = "";
    logInOut.innerHTML = "";

    let loginBtn = document.createElement("button");
    loginBtn.innerText = "Logga in";
    loginBtn.addEventListener('click', () => {
       // console.log('klick på knapp');
        //console.log("userName", userName);
        const userName = document.getElementById("userName");
        const Password = document.getElementById("Password");
        console.log("Klick på knapp", Password.value, userName.value)
    if( user[0].Password === Password.value && user[0].userName === userName.value) {
        
        //Spara användare i localstorage
        console.log("user i Event Listener", user);
        localStorage.setItem("user", user[0].userName);
        printName();
        } else {
            PrintUnknow(); 
        }
    }); 
    
    // Input användarnamn och lösenord med logga in knapp
    let userName = document.createElement('input');
    userName.id = "userName";
    userName.type = "text";
  
    let Password = document.createElement('input');
    Password.id = "Password";
    Password.type = "password";
    
    logInOut.innerHTML += '<p>Användarnamn</p>';
    logInOut.appendChild(userName);
    logInOut.innerHTML += '<p>lösenord</p>';
    logInOut.appendChild(Password);
    logInOut.appendChild(loginBtn);
}

