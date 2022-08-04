
/*Missing initializer in const declaration */
// const valueIsUndefined;
// console.log(valueIsUndefined)

const name="Shakeel Ahmed";

console.log(name);


//We can't initilize contatnt value again
// name="Ali Raza";
// console.log(name);

function functionBlock(){
    const constVariable=12;
    console.log(constVariable);

    if(false){
       console.log(constVariable); 
    }
    else{
        console.log(name);
        console.log(constVariable);
    }
}

functionBlock();
/**Function level or block level constant variable can't used outside */
//console.log("Out side"+constVariable);



/*Objects*/
const x={firstname:"Shakeel", lastName:"Ahmed"};
console.log(x.firstname+x.lastName);
x.firstname="Sameer";
x.lastName="Raza"
/*Type error will gets by user*/
// x={firstname:"Sajad",lastName:"Ali"};
console.log(x.firstname+x.lastName);


/*Arrays*/
const cars=["saab","Volvo","BMW"];
cars.push("Suzuki");

console.log(cars);
cars.pop();
console.log(cars);




