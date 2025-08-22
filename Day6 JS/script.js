// Asnchronous programming

// achieved using 
// 1)Callback


function register(cb){
    console.log("register user");
    setTimeout(()=>{console.log("register end")},1000);
    cb(login);
    
}
function sendEmail(cb){
    console.log("send user Email");
    setTimeout(()=>{console.log("Send user Email End")},2000);
    cb(getData);
}
function login(cb){
    console.log("login here");
    setTimeout(()=>{console.log("Login End")},3000);
    cb(displayData)
}
function getData(cb){
    console.log("getData");
    setTimeout(()=>{console.log("getData end ")},4000);
    cb();
}
function displayData(){
    console.log("display user Data");
    setTimeout(()=>{console.log("display user Data end ")},1000);
}

register(sendEmail);
// function cb(){

// sendEmail();
// login();
// getData();
// displayData();
// }
console.log("call other application");