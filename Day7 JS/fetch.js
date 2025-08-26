const username="jeet2024-lab"
const data=fetch(`https:/api.github.com/users/${username}`);
data.then(res=>res.json()).then((da)=>{console.log(da);}).catch((err)=>{
    console.log("Error"+err)
})