let arr = [];

putElementToArray();
shuffleArray();
showElementGreaterThan10();

console.log(arr);


function putElementToArray() {
    for(let i = 0 ; i < 10 ; i++) {
        let number = Math.floor(Math.random()*100);
        arr.push(number);
    }
}

function shuffleArray() {
    return arr.sort(() => Math.random() - 0.5);
}

function showElementGreaterThan10() {
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}
