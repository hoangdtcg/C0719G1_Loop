let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];



for (let i = 0; i < arr.length; i++) {
    console.log("Row: " + i);
    for (let j = 0; j < arr[i].length; j++) {
        console.log("Value: " + arr[i][j]);
    }
}