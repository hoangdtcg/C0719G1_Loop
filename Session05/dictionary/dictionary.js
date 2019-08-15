function showResult() {
    let txtFrom = document.getElementById("txtFrom");
    let txtTo = document.getElementById("txtTo");
    let arrEng = ["Hello", "Mouse", "Keyboard", "Screen", "Smartphone", "Earphone"];
    let arrVne = ["Xin chào", "Chuột", "Bàn phím", "Màn hình", "Điện thoại thông minh", "Tai nghe"];
    console.log(txtFrom.value == arrEng[0]);

    for (let i = 0; i < arrEng.length; i++) {
        if (txtFrom.value == arrEng[i]) {
            txtTo.value = arrVne[i];
        }
    }
}