let arr=[45,34,12,56,34];

// arr.forEach((a,arr)=>{
//     console.log(a,arr);
    
// });


// for (const key in arr) {
//     if (Object.prototype.hasOwnProperty.call(arr, key)) {
//         console.log(arr[key]);       
        
//     }
// }


// for (const i of arr) {
//     console.log(i);
// }

let newArr=arr.map((e)=>{
    return e**2;
});

console.log(newArr);





