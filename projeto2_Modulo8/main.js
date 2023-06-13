const form = document.getElementById("form-atividade");
const imgAprovado = '<img src= "./images/aprovado.png" alt = "emoji celebrando"/>';
const imgReprovado = '<img src= "./images/reprovado.png" alt = "emoji triste"/>';
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('Nome-Atividade');
    const inputNotaAtividade = document.getElementById('Nota-Atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;
    
    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += [i];
    }

    const media = somaDasNotas / notas.length;

    console.log(media);
}

