// Asnchronous programming

// achieved using 
// 1)Callback


function register(){
    setTimeout(()=>{console.log("register end")});
    console.log("register user");
}
function sendEmail(){
    console.log("send user Email");
    setTimeout(()=>{console.log("Send user Email End")});
}
function login(){
    console.log("login here");
    setTimeout(()=>{console.log("Login End")});
}
function getData(){
    console.log("getData");
    setTimeout(()=>{console.log("getData end ")});
}
function displayData(){
    console.log("display user Data");
    setTimeout(()=>{console.log("display user Data end ")});
}

register();

sendEmail();
login();
getData();
displayData();
console.log("call other application");