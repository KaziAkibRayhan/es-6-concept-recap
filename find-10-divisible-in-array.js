const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10Numbers = numbers.find(divisibleBy10Number => divisibleBy10Number % 10 === 0);
console.log(divisibleBy10Numbers);