let valueIsUndefined;
console.log(valueIsUndefined)
console.log(globalVariable)

let letVariable="Let Value";

console.log("Start   "+letVariable);

/* Refrence error will come*/
//console.log("Before function call"+functionBlockVariable);

function checkLetBlock(){
    globalVariable="Variable without let";
    let functionBlockVariable=true;
    console.log(functionBlockVariable);
}




checkLetBlock();
/* Refrence error will come*/
//console.log("After function call"+functionBlockVariable);
letVariable=123;

console.log("End   "+letVariable)

if(true){
    let ifValueBlock="If block code";
    console.log("If block code "+ifValueBlock);
}
/* Refrence error will come*/
//console.log("If block code "+ifValueBlock);

console.log(globalVariable);