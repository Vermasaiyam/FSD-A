console.log("start");
setTimeout(() => {
    console.log("first task");
    setTimeout(() => {
        console.log("2nd task");
        setTimeout(() => {
            console.log("3rd task");
        }, 3000);
    }, 2000);
}, 1000);
console.log("END");