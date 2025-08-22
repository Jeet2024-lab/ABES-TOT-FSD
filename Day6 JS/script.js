// Asnchronous programming

// achieved using 
// 1)Callback


function register(cb){
    console.log("register user");
    setTimeout(()=>{console.log("register end");cb();},1000);
    // cb(login);
    
    
}
function sendEmail(cb){
    console.log("send user Email");
    setTimeout(()=>{console.log("Send user Email End");cb();},2000);
    // cb(getData);
    
}
function login(cb){
    console.log("login here");
    setTimeout(()=>{console.log("Login End");cb();},3000);
    // cb(displayData);
    
}
function getData(cb){
    console.log("getData");
    setTimeout(()=>{console.log("getData end ");cb();},4000);
    
}
function displayData(){
    console.log("display user Data");
    setTimeout(()=>{console.log("display user Data end ")},1000);
}

// register(sendEmail);
// function cb(){

// sendEmail();
// login();
// getData();
// displayData();
// }


register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            });
        });
    });
});

console.log("call other application");