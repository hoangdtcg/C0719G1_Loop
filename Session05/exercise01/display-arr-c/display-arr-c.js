let arrA = new Array(10);
let arrB = new Array(10);
let arrC = [];

putElementToArray(arrA);
putElementToArray(arrB);
shuffleArray(arrA);
shuffleArray(arrB);
console.log(arrA);
console.log(arrB);
flowToArrC();

function putElementToArray(array) {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100);
        array[i] = number;
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function flowToArrC() {
    arrC = arrA.concat(arrB);
    console.log(arrC);
}