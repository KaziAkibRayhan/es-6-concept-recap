const oddNumbers = [1, 3, 5, 7, 9];

let evennumbers = [];

for (let i = 0; i < oddNumbers.length; i++) {
    const element = oddNumbers[i];
    const even = element + 1;
    evennumbers.push(even);
}
console.log(evennumbers);

const evenNumbers = oddNumbers.map(oddNumber => oddNumber + 1);
console.log(evennumbers);