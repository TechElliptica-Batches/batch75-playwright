// function is variable in javascript

import { h1, h2 ,percentFormat} from "./function-lib.js";

let a = 10;
let b = a;

export let h1 = (content) => {
    console.log("********************")
    console.log(content)
    console.log("*******************")

}

export let h2 = (content) => {
    console.log("####################")
    console.log(content)
    console.log("####################")
}


export let percentFormat = (content) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%")
    console.log(content)
    console.log("%%%%%%%%%%%%%%%%%%%%%")
}

//console.log(b);
// arrow functions


function printMyName(yourName, func){
    func(yourName);    
}

printMyName("Vaibhav", percentFormat)
printMyName("Sonali",  h2)
