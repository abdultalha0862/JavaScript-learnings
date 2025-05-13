async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 10);
    });
}

async function main() {
    console.log("Sub Task 1");
    let data=await getData();

    console.log(data);
    
        
}



// data.then((a)=>{
//     console.log("Task 1");

//     console.log("Task 2");

//     console.log("Task 3");  
// })