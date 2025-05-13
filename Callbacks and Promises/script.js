// console.log("You are Awesome");
// console.log("Again You are Awesome");


// setTimeout(()=>{
//     console.log("You are inside set Timeout Function");    
// },3000)

// setTimeout(()=>{
//     console.log("You are inside set timeout Function 2");
    
// },1000)

const callback=(arg)=>{
    console.log(arg);
    
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("King");
    document.head.append(sc);
}

loadScript("https://www.bloomberg.com/quote/FB:US",callback)