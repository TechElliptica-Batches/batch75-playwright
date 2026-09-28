
// if else 

    // 0-18 = Child
    // 19-30 = Adult
    // 31-45 = mature
    // > 45 = old
let age = 29;

if (age <= 18){
    console.log("Child");
}else if(age > 18 && age <= 34){
    console.log("Adult")
}else if(age > 26 && age <= 45){
    console.log("Mature")
}else{
    console.log("Old");
}
// else if 
// response code
// success code 200 , 201 , 204
// redirectional - 300
// client error - 400, 401, 403, 404, 405
// server error- 500, 501 , 503


let errorcode = 400

let category = ""

if(errorcode == 200 || errorcode == 201 || errorcode == 204){
    category = "success code"
}


