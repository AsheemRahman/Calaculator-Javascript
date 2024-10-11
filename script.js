
function buttonclick(val) {
    document.getElementById("screen").value += val
}

function clearscreen() {
    document.getElementById("screen").value = ""
}

function del() {
    var input = document.getElementById("screen");
    input.value = input.value.substring(0, input.value.length - 1)
}

function equal() {
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}