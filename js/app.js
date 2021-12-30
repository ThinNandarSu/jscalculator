let outputscreen = document.getElementById('output');

function display(num) {
    outputscreen.value += num;
}

function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch {
        alert("Input Number is Invalid !!!")
        outputscreen.value = '';
    }
}

function cl() {
    outputscreen.value = '';
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}