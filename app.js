//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeEntrada = document.getElementById("amigo");
    if (nomeEntrada.value == ""){
        console.log(nomeEntrada);
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nomeEntrada.value);
        console.log(amigos);
        return nomeEntrada = "";
    }
}
