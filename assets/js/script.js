const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

var body = document.getElementById("body");

if (hr >= 6 && hr < 12) {
    body.classList.add("dia");
    body.style.background = "linear-gradient(120deg, #ffe4c4, #ffd700)";
    exibirMensagem("Bom Dia");
    var relogioDivs = document.querySelectorAll('.relogio div');
    relogioDivs.forEach(function(elemento) {
    elemento.style.backgroundColor = "rgb(241, 253, 169)";
    elemento.style.color = "#595959";
    });

} 

if (hr >= 12 && hr < 18) {
    body.classList.add("tarde");
    body.style.background = "linear-gradient(120deg, #dbead5, #008000)";
    exibirMensagem("Boa Trade");
    var relogioDivs = document.querySelectorAll('.relogio div');
    relogioDivs.forEach(function(elemento) {
    elemento.style.backgroundColor = "rgb(63, 196, 114)";
    });


} 

if ((hr >= 18 && hr < 24) || (hr >= 0 && hr < 6)) {
    body.classList.add("noite");
    body.style.background = "linear-gradient(120deg, #ffe53bd8, #ff2525da)";
    exibirMensagem("Boa Noite");
    var relogioDivs = document.querySelectorAll('.relogio div');
    relogioDivs.forEach(function(elemento) {
    elemento.style.backgroundColor = "gray";
    elemento.style.color = "#454141";
    });
    

} 
})

function exibirMensagem(saudacao) {
    var mensagem2 = document.getElementById("mensagem");
    mensagem2.style.display = "block";
    mensagem2.style.color = "#fdfdfdce";
    mensagem2.innerHTML = saudacao + "!";
}
