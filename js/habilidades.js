const elementos = {
  js: document.querySelector('.habilidades-js'),
  html: document.querySelector('.habilidades-html'),
  css: document.querySelector('.habilidades-css'),
  github: document.querySelector('.habilidades-github'),
  git: document.querySelector('.habilidades-git')
};

const texto = document.querySelector('.texto-js');

function actualizarTexto(lenguaje, descripcion) {
  lenguaje.addEventListener('mouseout', () => {
    texto.innerHTML = 'Passe mouse cima da linguegem';
  });

  lenguaje.addEventListener('mouseenter', () => {
    texto.innerHTML = descripcion;
  });
}

for (const lenguaje in elementos) {
  actualizarTexto(elementos[lenguaje], obtenerDescripcion(lenguaje));
}

function obtenerDescripcion(lenguaje) {
  const descripciones = {
    js: 'JavaScript é uma linguagem de programação usada no desenvolvimento web para tornar páginas da web interativas e dinâmicas. Ela é executada nos navegadores dos usuários e permite que os desenvolvedores adicionem funcionalidades, respostas a eventos e atualizações em tempo real no conteúdo web. JavaScript é altamente versátil, amplamente adotado e essencial para criar experiências interativas na web.',
    css: 'CSS é uma linguagem de estilo em resumo, o CSS permite que os desenvolvedores definam como os elementos HTML devem ser exibidos em uma página da web, personalizando propriedades como cores, fontes, tamanhos de texto e espaçamento. Isso resulta em designs atraentes e na formatação visual de páginas da web, melhorando a experiência do usuário.',
    html: 'HTML é uma linguagem de marcação usada para criar e estruturar documentos na web. Ela define a hierarquia e o conteúdo de uma página, permitindo a inclusão de links, imagens e multimídia. HTML é compatível com navegadores e serve como base para o desenvolvimento web, trabalhando junto com CSS para estilização e JavaScript para interatividade. É essencial para criar e apresentar conteúdo na internet.',
    github: 'O GitHub é uma plataforma de hospedagem e colaboração de código-fonte usada principalmente por desenvolvedores de software.',
    git: 'O Git é um sistema de controle de versão distribuído amplamente usado por desenvolvedores de software para rastrear e gerenciar alterações no código-fonte de projetos.'
  };
  return descripciones[lenguaje];
}