const arr=[1,2,3,4,5,6,7,8,9];
const s1=arr.filter((data)=>(data%2==0));
console.log(s1);

const s2=arr.map((data)=>(data*5));
console.log(s2);

const s3=arr.reduce((a,b)=>(a+b),0);
console.log(s3);