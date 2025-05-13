let prmo1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.4){
        reject("No Random Number is found");
    }
    else{
        setTimeout(()=>{
            console.log("This is done");
            resolve("King");

            
        },3000)
    }
})

prmo1.then((a)=>{
    console.log("Print");
    
})

prmo1.catch((a)=>{
    console.log("Not Found");    
})