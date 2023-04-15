var pontuacao = 0; // inicializa a pontuação como zero
      
      /* Define a função que é chamada quando um botão é clicado */
      function responder(button, resultado, idPergunta) {
        if (resultado === 'certo') {
          button.classList.add('certo'); // adiciona a classe 'certo' ao botão
          pontuacao += 1; // adiciona 1 ponto à pontuação se a resposta estiver correta
          document.getElementById('pontuacao').textContent = pontuacao; // atualiza a pontuação exibida na página HTML
        } else {
          button.classList.add('errado'); // adiciona a classe 'errado' ao botão
        }
        
    /* Desabilita todos os botões da pergunta atual após uma resposta ser escolhida */
    var botoes = document.getElementById(idPergunta).getElementsByTagName('button');
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].disabled = true;
    }
  }