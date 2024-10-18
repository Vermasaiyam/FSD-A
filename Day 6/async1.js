// console.log("start");
// setTimeout(() => {
//     console.log("first task");
//     setTimeout(() => {
//         console.log("2nd task");
//         setTimeout(() => {
//             console.log("3rd task");
//         }, 3000);
//     }, 2000);
// }, 1000);
// console.log("END");


const myPromise = new Promise((resolve, reject)=>{
    let success = true;
    if (success) {
        resolve("data send success");
    }
    else{
        reject("data failed to success");
    }
});

// myPromise.then((msg)=> console.log(msg)).catch((error)=>console.log(error));

function task(msg, delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(msg);
            resolve()
        }, delay);
    })
}

task("1st", 1000).then(()=>task("2nd", 2000)).catch(()=> task("3rd", 3000));