// global scope
// block scope
// local scope

// const a = 39;
// console.log(a); // global scope

// {
//     const b = 23;
//     console.log('block scope ',b); // block scope
// }
// console.log(b) ; // block not available

function add() {
    var result = 6 + 7; // local scope
    console.log('inside function', result);
}
add();

console.log(result);