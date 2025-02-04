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
        nomeEntrada.value = "";
        return atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    let listaAmigo = document.getElementById("listaAmigos");
    listaAmigo.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li");
        lista.innerHTML = amigos[i];
        listaAmigo.appendChild(lista);
        console.log(lista);
    }
}

function sortearAmigo() {
    if(amigos.length == 0){
        alert("Sorteio indisponivel, adicione participantes")
    } else {
        let numeroSorteado = parseInt(Math.floor(Math.random()*amigos.length))
        let ganhador = amigos[numeroSorteado];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O vencedor do sorteio foi: ${ganhador}`;
        }
}