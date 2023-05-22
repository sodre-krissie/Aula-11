console.warn('Esse arquivo faz parte da "Aula 11 - Programando em Genially com JavaScript" elaborado pela TeleSapiens Ed Tech.');
console.log('Entre em contato pelo e-mail: k.sodre@telesapiens.com.br')


quantidadeCliques = 0
function contador(){
    quantidadeCliques++
    if(quantidadeCliques<2){
        alert('Você clicou '+quantidadeCliques +' vezes nesse botão')
    }else{
        alert('Acho que você tem que clicar em outro lugar. Você clicou '+quantidadeCliques +' vezes nesse botão')
    }
}

quantidadeAcertos = 0
function respostaCerta(){
    quantidadeAcertos++
    return quantidadeAcertos
}

quantidadeErros = 0
function respostaErrada(){
    quantidadeErros++
    return quantidadeErros
}

function resultadoFinal(){
    alert('Você clicou '+quantidadeAcertos+' vezes na resposta certa e '+quantidadeErros+' vezes na resposta errada')
}

console.log('Aplicação finalizada!')