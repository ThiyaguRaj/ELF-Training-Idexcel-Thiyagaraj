// // let var = new Promise();
// let name = "tyagu";
// let mob = 1231231221;

// document.getElementById('ab').innerHTML=name+"<br><br><br><br>"+mob;


// function pro(resolve,reject){
// let b = 1+1+1;
// if(b==3)
// {
//     resolve("the value is resolved");
// }
// else{
//     reject("The value is rejected");
// }}
// let a = new Promise(pro);

// a.then((message)=>{
//     console.log("This is in the then method "+message);
// }).catch((message)=>{
//     console.log("This is in the catch method "+message);
// })

let failed = true;
// let complete = true;
let pro = new Promise((resolve,reject)=>{
    if(failed==true){
        reject("Download Failed");
    }
    else{
        resolve("Download Completed");
    }
});

pro.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})

