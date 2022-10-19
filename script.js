let outputScreen = document.getElementById('output');

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert('invalid')
    }
}

//Aquí especificamos el boton de borrar, para que cuando haga click comienze desde cero.
function Clear() {
    outputScreen.value = "";
}

//Y aquí especificamos el boton del para borrar digito por digito.
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}