let UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
let inputStr = prompt("Input: ");
let arrResult = [];

for(let i = 0 ; i < inputStr.length ; i++) {
    arrResult.push(inputStr[i]);
}

//To la Nam

for(let i = 0 ; i < arrResult.length ; i++) {
    for(let j = 0 ; j < UPPER_CASE.length ; j++) {
        if(arrResult[i] === UPPER_CASE[j]) {
            arrResult[i] = arrResult[i].toLowerCase();
        } else if(arrResult[i] === LOWER_CASE[j]) {
            arrResult[i] = arrResult[i].toUpperCase();
        }
    }
}

console.log(arrResult.join(''));
