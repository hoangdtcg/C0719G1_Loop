let inputNumber = prompt("Input number: ");
let strNumber = inputNumber.toString();
let result = [strNumber[0]];

for (let i = 1; i < strNumber.length; i++) {
    if (strNumber[i - 1] % 2 == 0 && strNumber[i] % 2 == 0) {
        result.push('-', strNumber[i]);
    } else {
        result.push(strNumber[i]);
    }
}

console.log(result.join(' '));