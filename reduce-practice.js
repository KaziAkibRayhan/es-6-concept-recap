/* You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

const array = [1, 9, 17, 22];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
}
console.log(sum);

// using reduce

const sumOfArray = array.reduce((previous, current) => {
    return previous + current;
}, 0);
console.log(sumOfArray);