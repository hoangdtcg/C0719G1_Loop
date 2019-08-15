let arr = [];

putElementToArray();
shuffleArray();
console.log(arr);
findV();


function putElementToArray() {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100);
        arr.push(number);
    }
}

function shuffleArray() {
    return arr.sort(() => Math.random() - 0.5);
}

function findV() {
    let vNumber = prompt("Input number: ");
    let isInArr = false;
    for (let i = 0; i < arr.length; i++) {
        if(vNumber == arr[i]) {
            isInArr = true;
        } else {
            isInArr = false;
        }
    }
    if(isInArr) {
        console.log("V is in the arr");
    } else {
        console.log("V is not in the arr");
    }
}