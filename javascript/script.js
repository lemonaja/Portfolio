class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
      this.navLinks.forEach((link, index) => {
          link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
  }

  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  }

  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
      if (this.mobileMenu) {
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();



function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=> {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 150*i)
    });
}

const navbar = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        navbar.classList.add('hidden');
    } else {
        
        navbar.classList.remove('hidden');
    }

    if (scrollTop > 100) { 
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }

    lastScrollTop = scrollTop;
});

// Projeto
const projetos = {
    "projetocasa": {
      titulo: "Casa na Praia",
      imagem: "imagens/projetocasaitanhaem.png",
      conteudo: `
        <p class="conteudo-projeto">Empatia: Entrevistas com usuários que buscavam alugar casas na praia.</p>
        <p class="conteudo-projeto">Definição: Interface simples, com destaque no botão do WhatsApp.</p>
        <p class="conteudo-projeto">Ideação: Layout leve, focado em imagens.</p>
        <p class="conteudo-projeto">Protótipos: Wireframes mobile-first criados no Figma.</p>
        <p class="conteudo-projeto">Testes: Feedback positivo com amigos e familiares.</p>
      `
    },
    "projetonlw": {
      titulo: "NLW eSports",
      imagem: "imagens/projetonlwesports.png",
      conteudo: `
        <p class="conteudo-projeto"><strong>Empatia:</strong> Público gamer, design vibrante e moderno.</p>
        <p class="conteudo-projeto"><strong>Definição:</strong> Layout chamativo com fontes grandes e botões claros.</p>
        <p class="conteudo-projeto"><strong>Ideação:</strong> Uso de cores neon e elementos modernos.</p>
        <p class="conteudo-projeto"><strong>Protótipos:</strong> Design feito no Figma.</p>
        <p class="conteudo-projeto"><strong>Testes:</strong> Avaliação com usuários da comunidade Dev.</p>
      `
    },
    "projetoportfolio": {
      titulo: "Meu Portfólio",
      imagem: "imagens/portfolio.png",
      conteudo: `
        <div class="projeto-case">
  <section class="projeto-section">
    <h2 class="titulo-case" id="vamoscomecar">Vamos começar</h2>
    <p>Este projeto representa o desenvolvimento do meu portfólio pessoal como UX/UI Designer. A ideia era criar uma experiência que refletisse minha identidade visual, comunicasse minhas habilidades e, ao mesmo tempo, proporcionasse uma navegação fluida, intuitiva e responsiva para diferentes perfis de visitantes.</p>
  </section>

  <section class="projeto-section">
    <h2 class="titulo-case">O Desafio</h2>
    <p>Criar um site autoral que reunisse minha trajetória profissional, organização de projetos, diferenciais e personalidade de forma atrativa e funcional. O desafio foi estruturar bem o conteúdo e criar um layout moderno e coerente com minhas preferências visuais, com foco em recrutadores e colegas da área.</p>
  </section>

  <section class="projeto-section">
    <h2 class="titulo-case">Arquitetura da Informação</h2>
    <p>Organizei o conteúdo com uma hierarquia clara: introdução, sobre mim, formação, experiências, habilidades (divididas em hard e soft skills), projetos e contatos. Isso facilita a leitura escaneável e ajuda o usuário a encontrar o que precisa com agilidade.</p>
  </section>

  <section class="projeto-section">
    <h2 class="titulo-case">Wireframe</h2>
    <div class="flex-responsive">
      <img src="imagens/WireFrame Portfolio.jpg" alt="Wireframe do projeto" class="imagem-case wireframe-img">
      <div>
        <p>Antes de partir para os protótipos visuais, comecei organizando toda a estrutura do conteúdo em um wireframe de baixa fidelidade. O foco aqui foi desenhar uma jornada clara e objetiva para o usuário, principalmente pensando nos diferentes perfis que acessariam o portfólio — recrutadores, designers e colegas da área.</p>
        <p>Cada seção foi cuidadosamente posicionada com base em critérios de usabilidade e escaneabilidade. As sessões iniciais como “Sobre mim”, “Formação” e “Experiências” foram pensadas para criar conexão emocional e gerar credibilidade logo de início. Já as habilidades foram divididas entre hard e soft skills, com um layout modular que permite leitura rápida. A área de projetos, que é o ponto de maior interesse, foi destacada visualmente com boxes interativos que simulam cards clicáveis, incentivando a navegação contínua.</p>
      </div>
    </div>
  </section>

  <section class="projeto-section">
    <h2 class="titulo-case">Prototipagem no Figma</h2>
    <img class="imagem-case" src="imagens/prototipoportfolio.png" alt="Protótipo Figma">
    <p>A etapa de prototipagem foi conduzida no Figma, utilizando os wireframes como base estrutural. Apliquei a identidade visual definida — com tons roxos, preto e branco, fontes modernas como Quicksand e DM Sans —, garantindo coesão estética e profissionalismo.</p>
    <p>Na prototipação, também levei em consideração o comportamento responsivo. Criei variações de telas para mobile e desktop, simulando o comportamento dos elementos em diferentes breakpoints. Isso me ajudou a prever ajustes e otimizar a experiência de navegação em dispositivos variados ainda antes do código.</p>
  </section>

  <section class="projeto-section">
    <h2 class="titulo-case">Implementação do Código e Publicação</h2>
    <p>Após a aprovação do protótipo, iniciei a codificação do site utilizando HTML, CSS e JavaScript puro. Mantive o foco na performance, sem frameworks pesados, garantindo leveza e agilidade no carregamento.</p>
    <p>Estruturei o conteúdo com semântica, estilizei com CSS moderno e adicionei interatividade via JavaScript, como os modais de visualização de projetos. Todo o código foi versionado via Git e publicado no GitHub, possibilitando controle de versões e fácil compartilhamento com recrutadores e colegas da área.</p>
    <p>Você pode acessar o repositório completo clicando 
      <a href="https://github.com/lemonaja/Portfolio" target="_blank">aqui</a>.
    </p>
  </section>
</div>
      `
    },
    "projetogoab": {
      titulo: "Goab",
      imagem: "imagens/goab.png",
      conteudo: `
        <p class="conteudo-projeto"><strong>Empatia:</strong> B2B SaaS com foco em conversão.</p>
        <p class="conteudo-projeto"><strong>Definição:</strong> Destaque para o CTA e explicação clara.</p>
        <p class="conteudo-projeto"><strong>Ideação:</strong> Estrutura com informações diretas.</p>
        <p class="conteudo-projeto"><strong>Protótipos:</strong> Figma com base em benchmarks de SaaS.</p>
        <p class="conteudo-projeto"><strong>Testes:</strong> Testes A/B reais para validar o layout.</p>
      `
    }
  };
  
  // Abrir modal com o conteúdo
  document.querySelectorAll('.projetocasa, .projetonlw, .projetoportfolio, .projetogoab').forEach(div => {
    div.addEventListener('click', () => {
      const id = div.classList[0];
      const projeto = projetos[id];
  
      if (projeto) {
        document.getElementById('modalTitulo').innerText = projeto.titulo;
        document.getElementById('modalConteudo').innerHTML = `
          <img src="${projeto.imagem}" alt="${projeto.titulo}">
          ${projeto.conteudo}
        `;
        document.getElementById('modalProjeto').style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Fechar modal
  document.querySelector('.fechar-modal').addEventListener('click', () => {
    document.getElementById('modalProjeto').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Clicar fora para fechar
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('modalProjeto');
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  