let button=document.getElementById("btn");

// console.log(button);


// button.addEventListener("click",()=>{
//     alert("Button is Clicked");
// })


// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML="You are Awesome";
// })

// button.addEventListener("click",(e)=>{
//     console.log(e);
// })


document.querySelector(".child").addEventListener("click",(e)=>{
    // e.stopPropagation();
    alert("Child was Clicked");
})

document.querySelector(".childContainer").addEventListener("click",(e)=>{
    // e.stopPropagation();
    alert("Child Container was clicked");
})

document.querySelector(".container").addEventListener("click",(e)=>{
    // e.stopPropagation();
    alert("Conatainer was clicked");
})


// setInterval(()=>{
//     document.querySelector(".child").style.background="red"
// },2000)


// setTimeout(()=>{
//     document.querySelector(".child").style.background="red"
// },2000)