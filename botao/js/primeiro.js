var para;

function aoCarregarPagina (){
    
    para = document.querySelector('p')
    para.addEventListener('click', atualizarNome);
}

function atualizarNome(){
    var nome = prompt ('insira um novo nome');
    
    para.textContent = 'jogador 1: ' + nome;
}