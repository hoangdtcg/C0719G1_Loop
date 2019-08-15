let arr = [];

putElementToArray();
shuffleArray();
console.log(arr);

findAndDeleteV();
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

function findAndDeleteV() {
    let vNumber = parseInt(prompt("Input V: "));
    // for (let i = 0; i < arr.length - 1; i++) {
    //     if (vNumber === parseInt(arr[i])) {
    //         isInArr = true;
    //         // arr[i] = arr[i + 1];
    //         // arr[length - 1] = 0;
    //         for (let j = i; j < arr.length - 1 - i; j++) {
    //             arr[j] = arr[j + 1];
    //             arr[length - 1] = 0;
    //         }
    //     }
    // }

    let index = arr.indexOf(vNumber);
    if (index == -1) {
        console.log("V is not in arr.");
    } else {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = 0;
        console.log("V is in arr");
    }

}