// let obj={
//     a:"King",
//     b:"Name"
// }

// console.log(obj);



// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };

// console.log(animal);

// console.log(rabbit);


class Animal{
    constructor(name1,name2){
        this.name1=name1;
        this.name2=name2;
        console.log("Constrictor is being Created"+name1+" "+name2);
        
    }

    eats(){
        console.log("He is eating");
        
    }
    jumps(){
        console.log("He is Jumping");
        
    }


}

let a=new Animal("Abdul","Talha");
console.log(a);

a.eats();
a.jumps();


class Tiger extends Animal{
    attack(){
        console.log("Tiger is Attacking");        
    }
}

let tiger=new Tiger();

console.log(tiger);

tiger instanceof Tiger


