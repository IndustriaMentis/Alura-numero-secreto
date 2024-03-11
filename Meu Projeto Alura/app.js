 let listaDeNumerosSorteados = [];
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextonaTela( 'h1', 'Jogo do número secreto' ); 
    exibirTextonaTela( 'p' , 'Escolha um número entre 1 e 10' );
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextonaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 
        'tentativa';
        let mensagemenTentativas = `O número secreto foi descoberto 
        com ${tentativas} ${palavraTentativa}!`;
        exibirTextonaTela('p', mensagemenTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else {
        if  (chute >  numeroSecreto) {
            exibirTextonaTela('p', 'O número secreto é menor do que seu chute...');
        } else {
            exibirTextonaTela('p', "O número secreto é maior do que seu chute...");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 4 + 1);
    let quantidadeDeElementosNaLista =listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = []
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 
    true);
}
