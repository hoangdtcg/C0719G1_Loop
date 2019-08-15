function bangcuuchuong() {
    let tick = "<table width='100%' border='1px'>";
    for (let i = 1; i < 10; i++) {
        tick = tick +"<tr>";
        for (let j = 2; j < 10; j++) {
            tick =tick +"<td>" + j + " x " + i + "=" + i * j + "</td>";
        }
        tick = tick +"</tr>";
    }
    tick += "</table>";
    document.write(tick);
}