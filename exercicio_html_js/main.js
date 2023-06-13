const form = document.getElementById('form-numero');
const botao = document.getElementById("botao");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.querySelector(".mensagem");
let formEValido = true;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const mensagemSucesso = `Tudo ok! Número do Campo B é maior que do que número Campo A!`;
    const mensagemErro = `Repita. Valor B precisa ser maior que valor A.`;

    formEValido = (campoB.value > campoA.value)
    if (formEValido) {
        mensagem.classList.add('mensagem-sucesso');
        mensagem.classList.remove('mensagem-erro');
        campoB.style.border = `1px solid black`;
        mensagem.innerHTML = mensagemSucesso;

        campoA.value = '';
        campoB.value = '';

    } else {
        mensagem.classList.add('mensagem-erro');
        mensagem.innerHTML = mensagemErro;
        campoB.style.border = `1px solid red`;
    }
});





