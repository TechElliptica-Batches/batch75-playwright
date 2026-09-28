
// Array 

// vaibhav
// art, math, science 

// push = add value in last
// pop = remove last value
// unshift = add value in start
// shift = remove first value
// splice = add and delete 

// splice (index , deleteCount, valuestoAdd)

// let vaibhav_marks = [78, 100, 70];
// vaibhav_marks.splice(1 ,1, 56,10,20,30,40);
// console.log(vaibhav_marks);

// let ar = [10];
// ar.push(20);  // [10,20]
// ar.unshift(20); // 20 10 20
// ar.pop(); // 20 10
// ar.push(20);  // 20 10 20
// ar.unshift(67); // 67 20 10 20
// ar.shift(); // 20 10 20
// ar.splice(2,1,34); // 20 10 34

// console.log(ar);

// vaibhav_marks[10] = 100;
// console.table(vaibhav_marks.length)
// console.log(vaibhav_marks[6]);


//let ar = [10,40, 101,56,201,21];
// 10, 21,40, 56, 101, 201

//console.log(ar.sort((k1,k2) => (k1-k2)));


let vaibhav_marks = [78, 100, 70];

let vaibhav_all_marks = {
    "math" : 78,
    "science" : 100,
    "arts" : 70
}

console.log(vaibhav_all_marks["arts"])

// Json = object - {keym value} , array - []
let vaibhav_resume = {
    "name": {
        "firstName" : "Vaibhav",
        "lastName" : "Singh"
    },
    "city" : "Pune",
    "contacts": [
        {
            "type" : "Home",
            "detail" : "020-112124323"
        },
        {
            "type" : "Office",
            "detail" : "9764326834"
        }
    ]
}





