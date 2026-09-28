
// console.log(a);
// let a = 10;



// a = 10; // implicit global variable
// var b = 20; // var variable (function scope)
// let c = 30; // let variable (blocked scope)
// const d = 40; // constant variable (blocked scopr. value reassign)


//let a = 5;

// mode strict mode 
// hoisting in javascript
var b = 5;
{
    {
        {
          console.log(b);   // 5
          let b = 10;
          console.log(b);  // 10
        }
        {
            let b = 20;
        }
    }
}

// script level langauge
// 
