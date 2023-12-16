const elementos = {
  js: document.querySelector(".habilidades-js"),
  react: document.querySelector(".habilidades-react"),
  html: document.querySelector(".habilidades-html"),
  css: document.querySelector(".habilidades-css"),
  tailwind: document.querySelector(".habilidades-tailwind"),
  node: document.querySelector(".habilidades-node"),
  github: document.querySelector(".habilidades-github"),
  git: document.querySelector(".habilidades-git"),
  typescript: document.querySelector(".habilidades-typescript"),
};

const texto = document.querySelector(".texto-js");

function actualizarTexto(lenguaje, descripcion) {
  lenguaje.addEventListener("mouseout", () => {
    texto.innerHTML = "Passe mouse cima da linguegem";
  });

  lenguaje.addEventListener("mouseenter", () => {
    texto.innerHTML = descripcion;
  });
}

for (const lenguaje in elementos) {
  actualizarTexto(elementos[lenguaje], obtenerDescripcion(lenguaje));
}

function obtenerDescripcion(lenguaje) {
  const descripciones = {
    js: "JavaScript é uma linguagem de programação usada no desenvolvimento web para tornar páginas da web interativas e dinâmicas. Ela é executada nos navegadores dos usuários e permite que os desenvolvedores adicionem funcionalidades, respostas a eventos e atualizações em tempo real no conteúdo web. JavaScript é altamente versátil, amplamente adotado e essencial para criar experiências interativas na web.",
    react:
      "React é uma biblioteca JavaScript amplamente utilizada para o desenvolvimento de interfaces de usuário interativas e reativas em aplicações web. Criada e mantida pelo Facebook, o React permite que os desenvolvedores construam componentes reutilizáveis que representam partes específicas da interface do usuário. Esses componentes podem ser atualizados de forma eficiente quando os dados ou o estado da aplicação mudam, sem a necessidade de recarregar a página inteira.",
    css: "CSS é uma linguagem de estilo em resumo, o CSS permite que os desenvolvedores definam como os elementos HTML devem ser exibidos em uma página da web, personalizando propriedades como cores, fontes, tamanhos de texto e espaçamento. Isso resulta em designs atraentes e na formatação visual de páginas da web, melhorando a experiência do usuário.",
    html: "HTML é uma linguagem de marcação usada para criar e estruturar documentos na web. Ela define a hierarquia e o conteúdo de uma página, permitindo a inclusão de links, imagens e multimídia. HTML é compatível com navegadores e serve como base para o desenvolvimento web, trabalhando junto com CSS para estilização e JavaScript para interatividade. É essencial para criar e apresentar conteúdo na internet.",
    tailwind:
      "Tailwind CSS é um framework de estilo para desenvolvimento web que utiliza uma abordagem de utilitários para construir interfaces de usuário. Em vez de fornecer componentes predefinidos, como alguns outros frameworks CSS, o Tailwind oferece uma variedade extensa de classes utilitárias que podem ser aplicadas diretamente no HTML para estilizar elementos.",
    node: "Em resumo, Node.js é uma plataforma de tempo de execução JavaScript que permite aos desenvolvedores criar aplicativos de servidor escaláveis e eficientes, bem como ferramentas de linha de comando. Sua natureza assíncrona e não-bloqueante é especialmente adequada para lidar com várias conexões simultâneas, tornando-o uma escolha popular para aplicativos em tempo real e de alto desempenho na web.",
    github:
      "O GitHub é uma plataforma de hospedagem e colaboração de código-fonte usada principalmente por desenvolvedores de software.",
    git: "O Git é um sistema de controle de versão distribuído amplamente usado por desenvolvedores de software para rastrear e gerenciar alterações no código-fonte de projetos.",
    typescript:
      "O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que estende o JavaScript, adicionando tipagem estática ao código. Ele permite aos desenvolvedores especificar tipos para variáveis, funções e objetos, tornando o código mais seguro e legível. Esses tipos são verificados em tempo de compilação, ajudando a detectar erros de tipo antes da execução do programa. TypeScript também oferece recursos como interfaces, herança de tipos, suporte a ES6, integração com bibliotecas JavaScript e ferramentas de desenvolvimento avançadas. É amplamente usado para melhorar a qualidade e a manutenibilidade do código JavaScript, especialmente em projetos complexos.",
  };
  return descripciones[lenguaje];
}
