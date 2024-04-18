/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

      // Função para alternar entre inglês e português
      function alternarIdioma(idioma) {
          // Seleciona os elementos que contêm texto para traduzir
          var linkProjetos = document.getElementById('link-projetos');
          var linkIngles = document.getElementById('link-ingles');
          var linkPortugues = document.getElementById('link-portugues');
          var infoPortugues = document.getElementById('info-portugues');
          var tituloProjetos = document.querySelector('.projetos .titulo');
          var btnMostrar = document.getElementById('btnMostrar');
          

          // Verifica o idioma e atualiza o texto dos elementos correspondentes
          if (idioma === 'ingles') {
              linkProjetos.textContent = 'My projects';
              linkIngles.textContent = 'Inglês/';
              linkPortugues.textContent = 'Portuguese';
              infoPortugues.innerHTML = `
                <h1>Hello! I'm Cristiano Lá Féria</h1>
                <p>A recent Computer Programmer, graduated in Sound and Image and with previous experience in managing and leading teams.</p>
                <p>With a huge passion for solving problems, finding solutions, and helping others. So I'm always looking for something to satisfy this passion.</p>
                <p>In addition, photography, cinema, playing, and hanging out with friends are my favorite interests.</p>
                <p>I've had the opportunity to explore various areas of technology such as networks, systems and hardware, 
                  acquiring fundamental knowledge in languages such as:
                  C, C#, Java (Web / Android), Python, SQL, ASP.Net, PHP, and JavaScript
                   through the development of various practical projects</p>`;
                tituloProjetos.textContent = 'My projects';
                btnMostrar.textContent='Show more';
          } else if (idioma === 'portugues') {
              linkProjetos.textContent = 'Meus projetos';
              linkIngles.textContent = 'English/';
              linkPortugues.textContent = 'Português';
              infoPortugues.innerHTML = `
                <h1>Olá! Sou Cristiano Lá Féria</h1>
                <p>Um recém Programador Informático, licenciado em Som e Imagem e com experiência anterior em gerir e liderar equipas.</p>
                <p>Com uma enorme paixão em resolver problemas, arranjar soluções e ajudar os outros.
                Por isso estou sempre a procurar algo para saciar esta paixão.</p>
                <p>Além disso, fotografar, cinema, jogar e sair com amigos são os meus interesses favoritos.</p>
                <p>Já tive o contacto com diversas áreas da tecnologia como redes, sistemas, hardware, 
                  adquirindo conhecimentos fundamentais em linguagens como:
                  C, C#, Java (Web / Android), Python, SQL, ASP.Net, PHP, e JavaScript
                   através da elaboração de diversos projetos práticos</p>`;
            tituloProjetos.textContent = 'Meus projetos';
            btnMostrar.textContent='Mostrar mais';

          }
      }

      // Exemplo de uso da função para alternar idiomas ao clicar nos links
      document.getElementById('link-ingles').addEventListener('click', function(event) {
          event.preventDefault(); // Evita que o link seja seguido
          alternarIdioma('ingles');
      });

      document.getElementById('link-portugues').addEventListener('click', function(event) {
          event.preventDefault(); // Evita que o link seja seguido
          alternarIdioma('portugues');
      });
