/* Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */


const people = [
    { name: 'Meena', age: 20 },
    { name: 'Jack', age: 15 },
    { name: 'Robert', age: 22 }
];

let sumOfAges = 0;
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    const { age } = element;
    sumOfAges += age;
}
console.log(sumOfAges);

// using reduce 

const peopleByMap = people.map(people => people.age);
console.log(peopleByMap);

// using reduceRight
const sumOfAgesByReduce = peopleByMap.reduce((previous, current) => {
    return previous + current;
}, 0);
console.log(sumOfAgesByReduce);