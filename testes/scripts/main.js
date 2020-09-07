let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'imagens/logo.png') {
        minhaImagem.setAttribute('src', 'logo22.png');
    }else {
        minhaImagem.setAttribute('src', 'imagens/logo.png');
    }

}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, Digite seu nome.');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    }else {
        localStorage.setItem('nome', meuNome)
        meuCabecalho.textContent = 'A nossa logo! ' + meuNome;
    }
}

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
}else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'A nossa logo! ' + nomeGuardado
}

meuBotao.onclick = function() {defineNomeUsuario();
}