const form = document.getElementById('form-numero');
const botao = document.getElementById("botao");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
let formEValido = true;

function validaNumero(numeroCompleto){
    const numeroComoArray = numeroValorDois.split(' ');
    return numeroComoArray.numeroValorDois > numeroValorUm  ;
}

    document.addEventListener("DOMContentLoaded", function(e) {
        e.preventDefault();
        var campoA = document.getElementById("campoA");
        var campoB = document.getElementById("campoB");
        const mensagemDeSucesso = `Tudo ok! Número do Campo B é maior que do que número Campo A!` ;
        
        document.getElementById("botao").addEventListener("click", function() {
            if (campoB.value > campoA.value) {
                document.querySelector('.mensagem-sucesso').innerHTML = mensagemDeSucesso ;
            } else {
                alert("Repita. Valor B precisa ser maior que valor A");
            }
            });
        });
        
        campoA.value = '';
        campoB.value = '';

