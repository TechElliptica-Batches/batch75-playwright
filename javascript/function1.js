// Functions

// repeatitive code 
// services - 
// input
// performing action 
// output 

function add(a, b){
    let c = a + b
    return c
}

function substract(a,b){
    let c = a - b;
    return c;
}

function multiply(a, b){
    let c = a * b;
    return c;
}

function square(a){
    let c = multiply(a, a);
    return c;
}

// area of circle = pi r2

function areaOfCircle(radius){
    let area = multiply(3.14 , square(radius));
    return area;
}

let ar = areaOfCircle(2);
console.log(ar);


function getAgeGroup(age){
    if(age <= 18){
        return "Child";
    }else{
        return "Adult";
    }
}

let aGroup = getAgeGroup(12);
console.log(aGroup);


// sub
// multiply

// a, b = parameters
// c = return type
// 100, 10 - arguments


let d = add(100,10);
console.log(d);

let e = add(120,10);
console.log(e);
