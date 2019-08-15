let inputStr = prompt("Input string: ");
let inputArr = [];
for (let i = 0; i < inputStr.length; i++) {
    inputArr[i] = inputStr[i];
}
console.log(inputArr.join(''));
inputArr.reverse();
console.log(inputArr.join(''));
