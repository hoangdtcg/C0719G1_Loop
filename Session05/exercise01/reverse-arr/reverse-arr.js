let arr = [];

putElementToArray();
shuffleArray();
console.log(arr);

reverseArr();




function putElementToArray() {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100);
        arr.push(number);
    }
}

function shuffleArray() {
    return arr.sort(() => Math.random() - 0.5);
}

function reverseArr() {
    arr.reverse();

    console.log(arr);
}