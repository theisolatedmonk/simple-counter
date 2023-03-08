const output = document.getElementById("output");
const pluseBtn = document.getElementById("pluse");
const resetBtn = document.getElementById("reset");
const minusBtn = document.getElementById("minus");

let value = 0

function increment() {
    output.innerHTML = value++;
}

function decriment() {
    output.innerHTML = value--;
}

function reset() {
    output.innerHTML = value = 0
}