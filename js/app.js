//Pegar o tipo de assento - ok
//Pegar o elemento do botão - ok
//Pegar a quantidade de ingressos - ok
//Ao clicar em comprar asubtriar a quantidade de ingressos digitada  do valor total - ok
//Exibir o valor total na tela - ok
//Fazer a validação para não permitir que o usuário compre mais ingressos do que o disponível - ok

function comprar(){
    //Tudo funciona com base no tipo de ingresso escolhido
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value; //Pego a quantidade de ingressos que o usuário quer
    //let quantidadeIngresssos = document.getElementById(`qtd-${tipoIngresso}`).textContent; //Pego a quantidade de acentos dispoiníveis
    limpar();
    //Utilizando o switch para verificar o tipo de ingresso e subtrair a quantidade do valor, do total de acentos
    
    switch (tipoIngresso) {
        case 'superior':
            calcularExibirValor(quantidade);
            break;
    
        case 'inferior':
            calcularExibirValor(quantidade);
            break;

        case 'pista':
            calcularExibirValor(quantidade);
            break;
    }
}

//Outras funções

function limpar(){
    //Limpar o campo de quantidade de ingressos
    let quantidade = document.getElementById('qtd').value = " ";
}

function calcularExibirValor(quantidade){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresssos = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    //Verificando se a quantidade de ingressos é maior que a quantidade disponível
    if (quantidade > quantidadeIngresssos) {
        alert('Quantidade de ingressos indisponível');        
        return;
    } else if (quantidade <= 0) {
        alert('Quantidade de ingressos inválida');
        return;
    }else if (confirm('Deseja realmente comprar?')) {
        document.getElementById(`qtd-${tipoIngresso}`).textContent = (parseInt(quantidadeIngresssos - quantidade));
    }    
}