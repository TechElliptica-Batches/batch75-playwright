
// while - first condition check and then execution
// do while - first execution and then condition check 


// let a = 21;
// while(a < 10){
//     console.log("hello" +a);
//     a = a + 1;
// }


// let a = 21;
// do{
//     console.log("hello" +a);
//     a = a + 1;
// }while(a < 10)


    // folder ki polling 
    // 


// do{
//     // get new file in folder
//     // delete fole
//     // do we have another file is_file_Available = true
// }while(is_file_Available)


// for loop
// for(let i = 1; i < 10 ; i++){
//     console.log("Hello" + i)
// }
//9,8,7,6,5,


for (let i = 1; i < 10; i++){ // i = 9
    let line = "";
    for(let j = i; j < 10 ; j++){ // j = 1, 1 < 2 
        line = line + j +" ";
    }
    console.log(line);
}




