

// fulfilled = then
// reject = catch


let p1 = new Promise((a, b) => {
    a("hello");
})


p1.then( (msg)=> {
    console.log("then - " + msg)
}).catch( (msg)=> {
        console.log("catch - " + msg)
})



// fullfilled 
// rejected 