// const username="jeet2024-lab"
// const data=fetch(`https:/api.github.com/users/${username}`);
// data.then(res=>res.json()).then((da)=>{
//     console.log(da);
//     const table=document.querySelector("table");
//     const row=table.insertRow();
//     row.insertCell(0).innerText=da.login;
//     row.insertCell(1).innerText=da.id;
//     row.insertCell(2).innerText=da.url;
//     row.insertCell(3).innerText=da.public_repos;


// }).catch((err)=>{
//     console.log("Error"+err)
// })

// DESTRUCTURING

// const obj={
//     id:1,
//     userName:"Jitendra Kumar Chaunan",
//     Dept:"CSE-DS"
// }

// const  {userName,id,Dept}=obj;
// console.log(userName,id,Dept);

// REST and SPREAD

function sum(...arr){
    const s1= arr.reduce((a,b)=>(a+b),0);
    return s1;
}
// console.log(sum(10,20));

const arr=[10,20,30,40,50,60];
console.log(sum(arr));