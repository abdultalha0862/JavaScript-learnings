let a=prompt("Enter first Num");
let b=prompt("Enter Second Num");



// if(isNaN(a)|| isNaN(b)){
//     throw new Error("Not a Valid Num")
// }
let sum=parseInt(a)+parseInt(b);
console.log(sum);

function main(){
    let c=1;
    try{
        console.log(sum*c);
        return true;
        
    }
    catch{
        console.log("Error Occured");
        return false;
        
    }
    
    finally{
        console.log("Code is Working Fine");
    }
}

main();

