let arr = [];

putElementToArray();
console.log(arr);
sortDecrease();
console.log(arr);

function putElementToArray() {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100);
        arr.push(number);
    }
}

function sortDecrease() {
    return arr.sort(function (a, b) {
        return b - a;
    });
}