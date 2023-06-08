const form = document.getElementById('form-numero');
const botao = document.getElementById("botao");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
let formEValido = true;

function validaNumero(numeroCompleto){
    const numeroComoArray = numeroValorDois.split(' ');
    return numeroComoArray.numeroValorDois > numeroValorUm  ;
}

    document.addEventListener('submit', function(e) {
        e.preventDefault();
        const campoA = document.getElementById("campoA");
        const campoB = document.getElementById("campoB");
        const mensagemSucesso = `Tudo ok! Número do Campo B é maior que do que número Campo A!` ;
        const mensagemErro = `Repita. Valor B precisa ser maior que valor A.`;
        
        formEValido = (campoB.value > campoA.value)
            if (formEValido) {
                const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
                containerMensagemSucesso.innerHTML = mensagemSucesso ;
                containerMensagemSucesso.style.display = `block`;

                campoA.value = '';
                campoB.value = '';
        
            } else {
                const containerMensagemErro = document.querySelector('.mensagem-erro');
                containerMensagemErro.innerHTML = mensagemErro ;
                containerMensagemErro.style.display = `block`;
                campoB.style.border = `1px solid red`;
            }
            });
        
        

