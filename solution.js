//closures
let outerVar=10;
function innerFunc(){
    return outerVar;
}
//console.log(innerFunc());
//truthy values
if(true){
    //console.log("Truthy");
}
//spread operator(...)-converts array into elements
const numbers=[3,6,7,8];
//console.log(...numbers);

//rest parameter
function sum(...args){
 //   console.log(args);
}
sum(3,6,7,8);

//solution
const once=function(fn){
    let called=false;
    return function(...args){
        if(called){
            return undefined;
        }
        called=true;
        return fn(...args);
    };


};
//let fn = (a,b,c) => (a + b + c);
let  fn = (a,b,c) => (a * b * c)
let oncefn=once(fn);
//console.log(oncefn(1,2,3));
//console.log(oncefn(2,3,6));
console.log(oncefn(5,7,4));
console.log(oncefn(2,3,6));
console.log(oncefn(4,6,8));