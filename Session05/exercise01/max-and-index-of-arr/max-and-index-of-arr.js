let arr = [];

putElementToArray();
shuffleArray();
findMax();

console.log(arr);


function putElementToArray() {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100);
        arr.push(number);
    }
}

function shuffleArray() {
    return arr.sort(() => Math.random() - 0.5);
}

function findMax() {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[0] > max) {
            max = arr[0];
        }
        if(arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    console.log("Max = " + max);
    console.log("Index = " + index);
}