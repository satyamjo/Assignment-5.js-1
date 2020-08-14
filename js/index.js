function color() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("change-color").style.backgroundColor = '#' + randomColor;
}