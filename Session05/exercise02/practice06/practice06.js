let inputStr = prompt("Input string: ");
let arrStr = [];
for(let i = 0 ; i < inputStr.length ; i++) {
    arrStr[i] = inputStr[i];
    if(inputStr[i] == "-") {
        arrStr[i] = "_";
    }
}
console.log(arrStr.join(''));
