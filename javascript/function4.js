// actual function
// closures
function multipliar(multiplyValue){
    let m = function multiply(value) {
        let c = value * multiplyValue;
        return c;
    }
    return m;
}

let double = multipliar(2);
let triple = multipliar(3);
let fourth = multipliar(4);

let value = double(10);
console.log(value);

