let arr = [];

putElementToArray();
shuffleArray();
console.log(arr);
countNumberLessThan0();


function putElementToArray() {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100 - 50);
        arr.push(number);
    }
}

function shuffleArray() {
    return arr.sort(() => Math.random() - 0.5);
}

function countNumberLessThan0() {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            count++;
            console.log(arr[i]);
        }
    }
    console.log("We have " + count + " numbers less than 0. ");
}