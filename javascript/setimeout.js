
function click(element){
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                
               resolve("Clicking on " +element);
        }, 5000)
    });
    return p1;
}

function enterData(element, data){
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("entering on " +element + " with data " + data);
        }, 2000);
    });
    return p1;
}

// promise - fulfilled(then), rejected(catch), pending 
// Promise

click("Login link").then((msg) => {
    console.log(msg);
    return enterData("username", "user1");
}).then((msg) => {
    console.log(msg);
    return enterData("password", "pass1");
}).then((msg) => {
    console.log(msg);
    return click("login button")
}).then((msg) => {
    console.log(msg);   
}).catch((msg) => {
    console.log("cant go further. because something wrong")
})


// await - i will wait for promise to complete . pause the thread


async function testcase(){
    try{
        console.log(await click("Login link"));
        console.log(await enterData("username", "user1"));
        console.log(await enterData("password", "pass1"));
        console.log(await click("login button"));
    }catch(error){
        console.log("error : "+error);   
    }
}
testcase();













;



// printJaved(); // api - 5 sec
// printVaibhav();

// javascript - webdesigning langugae 
// image, apis , js, 

// single threaded langauge
// async


// login Link
// enterusername
// enter password
// logn button click
// error msg

// promise
