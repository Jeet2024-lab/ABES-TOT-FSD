// Asnchronous programming

// achieved using 
// 1)Callback


function register(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        console.log("register end"); return reject("error produced");},1000);

    })
    console.log("register user");
    
    // cb(login);
    
    
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
console.log("send user Email");
    setTimeout(()=>{console.log("Send user Email End");resolve();},2000);
    })
    
    // cb(getData);
    
}
function login(){
     
    return new Promise((resolve,reject)=>{
console.log("login here");
    setTimeout(()=>{console.log("Login End");resolve();},3000);
    })
    
    // cb(displayData);
    
}
function getData(){
    return new Promise((resolve,reject)=>{
    console.log("getData");
    setTimeout(()=>{console.log("getData end ");resolve();},4000);
    })
    
    
}
function displayData(){
    return new Promise((resolve,reject)=>{
    console.log("display user Data");
    setTimeout(()=>{console.log("display user Data end ")},1000);
    })
    
}

// register(sendEmail);
// function cb(){

// sendEmail();
// login();
// getData();
// displayData();
// }


// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getData(()=>{
//                 displayData();
//             });
//         });
//     });
// });

register().then(sendEmail).then(login).then(getData).then(displayData).catch((err)=>console.log("error received is " +err));



console.log("call other application");