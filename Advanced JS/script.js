async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(85);
        }, 1000);
    });
}

// let a = await sleep();
// let b = await sleep();

(async function main() {
    // let a = await sleep();
    // console.log(a);

    // let b = await sleep();
    // console.log(b);


    // let [x,y]=[2,4];
    // console.log(x,y);

    // let [x,y, ...rest]=[1,2,3,4,5,56];
    // console.log(x,y,rest);


    let arr=[1,2,4,5,6,77,8];

    

})();