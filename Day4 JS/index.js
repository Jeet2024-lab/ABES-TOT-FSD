// var a=12;
// console.log("hi="+a);



// var a = 12;
// console.log(typeof(a));
// var a = 12;
// var a= 12.5;
// console.log(a);

// const a=12;
// console.log(a);
// // a=30;
// console.log(a);
// let a=12;
// console.log(a);
// a=30;
// console.log(a);

// var a = 12;

// if(a>10)
// {
//     var a = 20;
// console.log(a);
// }
// console.log(a);

// let a = 12;

// if(a>10)
// {
//     let a = 20;
// console.log(a);
// }
// console.log(a);

// a = 12;

// if(a>10)
// {
//     a = 20;
// console.log(a);
// }
// console.log(a);

// let a = 12;
// let b = "12";
// if(a == b) {
//     console.log("Equal");
// }
// else {
//     console.log("Not Equal");
// }
// let a = 12;
// let b = "12";
// if(a === b) {
//     console.log("Equal");
// }
// else {
//     console.log("Not Equal");
// }

// 
// let val = sum();
// console.log("SUM="+val);

// function sum(){
//     return 10 + 20;
// }

//Function as an expression 

// const data=function(){
//     console.log("Hi how are you?");
// }

// data();

// Arrow function

// const data=()=>{
// return "Hi how are you?";
// }

// console.log(data());

// 


// const add=(a,b)=>a+b;

// console.log(add(10,20));

// (()=>{
//     console.log("I am an IIFE");})();

// (function(){
//     console.log("I am an IIFE");})();

// function greet(msg="Hello") {
//     console.log(msg);

// }
// greet("Hi");
// greet();

function selectLanguage(lang) {
    let data;
    
    function javaCompiler() {
        if (lang == "Java") {
            function javaCompiler() {
                console.log("Java Compiler is being executed");
            }
            data = javaCompiler();
        }
        else {
            if (lang == "c") {
                function cCompiler() {
                    console.log("C Compiler is being executed");
                }
                data = cCompiler();
            }
            else {
                console.log("Selected Language compiler is not found");
            }
        }
    }


}


selectLanguage("Java");