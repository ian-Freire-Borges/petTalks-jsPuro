// funçao para renderizar os panos fiz como um card component
function renderPlanos() {
  const planos = [
    {
      nome: "PetTalk Mini",
      preco: "R$ 349,00/mês",
      descricao: "Plano básico com tradução dos sons e comportamentos do seu pet.",
      features: ["Tradução básica de sons", "Acesso mensal", "Suporte básico"],
    },
    {
      nome: "PetTalk Plus",
      preco: "R$ 499,00/mês",
      descricao: "Plano avançado com integração Alexa/Google Home e tradução avançada de sons.",
      features: ["Tradução avançada de sons", "Integração com Alexa/Google Home", "Acesso mensal", "Suporte premium"],
    },
  ];

  const container = document.querySelector("#Planos .container");
  container.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "text-center mb-5";
  title.textContent = "Escolha o Plano Ideal para Você e Seu Pet";
  container.appendChild(title);

  const row = document.createElement("div");
  row.className = "row";

  planos.forEach((plano) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-4 d-flex";

    const card = document.createElement("div");
    card.className = "card shadow-sm text-center d-flex flex-column flex-grow-1";
    card.style.minHeight = "400px";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    const nome = document.createElement("h3");
    nome.className = "card-title";
    nome.textContent = plano.nome;

    const preco = document.createElement("h5");
    preco.className = "card-subtitle mb-2 text-muted";
    preco.textContent = plano.preco;

    const descricao = document.createElement("p");
    descricao.className = "card-text";
    descricao.textContent = plano.descricao;

    const ul = document.createElement("ul");
    ul.className = "list-unstyled";
    plano.features.forEach((feature) => {
      const li = document.createElement("li");
      li.className = "d-flex align-items-center mb-2";
      li.innerHTML = `<i class="bi bi-check-circle text-success me-2" style="font-size:1.2rem;"></i> ${feature}`;
      ul.appendChild(li);
    });

 //button que leva para watts 
    const btn = document.createElement("button");
    btn.className = "btn btn-info mt-auto rounded-pill";
    btn.textContent = "Assinar Agora";
    btn.onclick = () => {
      const telefone = "5571999842598";
      const mensagem = `Olá, eu gostaria de saber mais sobre o plano ${plano.nome}`;
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    };

    cardBody.appendChild(nome);
    cardBody.appendChild(preco);
    cardBody.appendChild(descricao);
    cardBody.appendChild(ul);
    cardBody.appendChild(btn);

    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  container.appendChild(row);
}

let paginaAtual = "Inicio";

// funçao para normaliza o texto alem de determina a pagina
function normalizeText(text) {
  return text.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function setPagina(nome) {
  paginaAtual = nome;

  document.querySelectorAll(".pagina").forEach(div => div.classList.add("d-none"));
  document.getElementById(nome).classList.remove("d-none");

  const normalizedNome = normalizeText(nome);

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active-nav");

    const normalizedLinkText = normalizeText(link.textContent);

    if (normalizedLinkText === normalizedNome) {
      link.classList.add("active-nav");
    }
  });

  if (normalizedNome === "planos") {
    renderPlanos();
  } else if (normalizedNome === "depoimentos") {
    renderReviews();
  }else {
renderFuncionalidades() 

  }

 
}
 // slides da pagina de inicio
const slides = [
  {
    image: "assets/alvan-nee-1VgfQdCuX-4-unsplash.jpg",
    text: "Entenda o que seu pet sente de verdade"
  },
  {
    image: "assets/alvan-nee-ZCHj_2lJP00-unsplash.jpg",
    text: "A tecnologia que aproxima você do seu melhor amigo"
  },
  {
    image: "assets/flouffy-g2FtlFrc164-unsplash.jpg",
    text: "Descubra os sentimentos por trás de cada latido ou miado"
  },
  {
    image: "assets/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg",
    text: "Mais do que um dispositivo, uma ponte emocional"
  },
  {
    image: "assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg",
    text: "Transforme comportamento em conexão e cuidado"
  }
];

let slideIndex = 0;

function proximoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  document.getElementById("imgPet").src = slides[slideIndex].image;
  document.getElementById("slideText").textContent = slides[slideIndex].text;
}

document.addEventListener("DOMContentLoaded", () => {
  setPagina("Inicio");
});

// funçao para renderizar os review fiz como om componente de card
function renderReviews() {
  const comments = [
    {
      nome: "Ana Souza",
      comentario: "O PetTalk foi uma surpresa maravilhosa! Agora entendo muito melhor as necessidades do meu cachorro. As traduções são precisas e ajudam muito no dia a dia.",
      stars: 5
    },
    {
      nome: "Carlos Mendes",
      comentario: "A proposta é ótima e o app cumpre o que promete. Às vezes a tradução parece genérica, mas no geral é bem útil. Usamos todos os dias aqui em casa.",
      stars: 4
    },
    {
      nome: "Juliana Lima",
      comentario: "Fiquei impressionada com a tecnologia! O app realmente identifica comportamentos do meu gato e me ajuda a entender o que ele quer.",
      stars: 5
    },
    {
      nome: "Rafael Costa",
      comentario: "Funciona muito bem com a Alexa e a integração facilita o uso. Achei que poderia ter mais personalizações para tipos de pet.",
      stars: 4
    },
    {
      nome: "Fernanda Rocha",
      comentario: "No começo fiquei cética, mas o PetTalk me surpreendeu. Consigo identificar sinais de estresse ou fome do meu cachorro com muito mais clareza agora.",
      stars: 5
    },
    {
      nome: "Lucas Ferreira",
      comentario: "O atendimento ao cliente foi excelente quando precisei tirar dúvidas. O produto é inovador e ajuda muito no relacionamento com meu pet.",
      stars: 5
    },
    {
      nome: "Camila Martins",
      comentario: "Gostei bastante, mas acho que poderiam melhorar a interface do app. Fora isso, tem sido bem útil pra entender os miados do meu gato.",
      stars: 3
    },
    {
      nome: "Bruno Almeida",
      comentario: "Minha esposa e eu usamos todos os dias com nosso golden retriever. A tradução dos latidos parece certeira e ele até responde diferente agora.",
      stars: 5
    },
    {
      nome: "Mariana Nunes",
      comentario: "Super interessante! A proposta é muito boa, principalmente para quem tem mais de um pet. Facilitou minha vida!",
      stars: 4
    },
    {
      nome: "João Silva",
      comentario: "A tecnologia é nova, então tem espaço para evoluir. Mas no geral cumpre bem a proposta e eu indicaria para amigos com pets.",
      stars: 4
    },
    {
      nome: "Patrícia Dias",
      comentario: "Achei o preço um pouco salgado, mas como o produto é único no mercado, valeu o investimento. Estou usando há 3 meses.",
      stars: 3
    },
    {
      nome: "Felipe Gomes",
      comentario: "Funciona muito bem e me deu mais segurança para deixar meu cão sozinho em casa. Recebo alertas úteis com base nos sons dele.",
      stars: 5
    },
    {
      nome: "Larissa Ramos",
      comentario: "Adorei a ideia e o app é bem intuitivo. Meu gato é muito expressivo e agora consigo compreender melhor seus miados e comportamentos.",
      stars: 4
    },
    {
      nome: "Eduardo Lopes",
      comentario: "Acho que poderiam incluir mais raças no banco de dados. Meu cão é mestiço e algumas traduções parecem não se aplicar.",
      stars: 2
    },
    {
      nome: "Aline Barros",
      comentario: "Super recomendo para qualquer tutor de pet! Ajudou bastante no adestramento e me deixou mais tranquila em saber como ele está.",
      stars: 5
    },
    {
      nome: "Diego Rocha",
      comentario: "Tecnologia promissora. Ainda tem ajustes a fazer, mas estou gostando bastante da experiência até agora.",
      stars: 4
    },
    {
      nome: "Natália Pires",
      comentario: "A interface com Google Home foi muito fácil de configurar. Uso todos os dias e virou parte da nossa rotina.",
      stars: 5
    },
    {
      nome: "Vinícius Cruz",
      comentario: "O app reconhece os sons rapidamente e dá sugestões práticas. Meu cachorro late muito e agora entendo o motivo!",
      stars: 5
    },
    {
      nome: "Tatiane Moreira",
      comentario: "Vale cada centavo! Senti que fiquei mais próxima do meu gato depois que comecei a usar o PetTalk.",
      stars: 5
    },
    {
      nome: "André Lima",
      comentario: "Funciona, mas em alguns momentos parece genérico. Estou aguardando atualizações com mais precisão.",
      stars: 3
    }
  ];

  let visiveis = 8;
  const container = document.getElementById('depoimentos-row');
  const btnMostrarMais = document.getElementById('mostrarMaisBtn');

  function criarCard(comment) {
    const col = document.createElement('div');
    col.className = "col-md-4 mb-4 d-flex justify-content-center";

    const card = document.createElement('div');
    card.className = "card text-center shadow-sm mx-auto";
    card.style.minHeight = '200px';
    card.style.width = '300px';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const titulo = document.createElement('h3');
    titulo.textContent = comment.nome;
    titulo.className = 'card-title';

    const comentario = document.createElement('p');
    comentario.textContent = comment.comentario;
    comentario.className = 'card-subtitle mb-2 text-muted';

    const stars = document.createElement('div');
    for (let i = 0; i < comment.stars; i++) {
      const star = document.createElement('i');
      star.className = "bi bi-star-fill text-warning me-1";
      stars.appendChild(star);
    }

    cardBody.appendChild(titulo);
    cardBody.appendChild(stars);
    cardBody.appendChild(comentario);

    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
  }

  function render() {
    container.innerHTML = '';

    comments.slice(0, visiveis).forEach(comment => {
      container.appendChild(criarCard(comment));
    });

    if (visiveis >= comments.length) {
      btnMostrarMais.style.display = 'none';
    } else {
      btnMostrarMais.style.display = 'inline-block';
    }
  }

  btnMostrarMais.onclick = function() {
    visiveis += 8;
    render();
  };

  render();
}

//fiz a funçao de render de funcionalidade com innnerHtml para mostra outros metodos de js e html
function renderFuncionalidades() {
  const container = document.querySelector("#Funcionalidades .container");
  container.innerHTML = `
    <h2 class="text-center mb-5">Funcionalidades do PetTalk</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="feature-card d-flex flex-column align-items-center justify-content-between p-4" style="height: 100%">
          <i class="bi bi-translate" style="font-size: 3rem; color: #007bff"></i>
          <h3 class="mt-3">Tradução de Sons</h3>
          <p class="text-center">
            Entenda o que seu pet está tentando comunicar com a tradução precisa dos seus sons, seja um latido, miado, rosnado ou outros.
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="feature-card d-flex flex-column align-items-center justify-content-between p-4" style="height: 100%">
          <i class="bi bi-gear" style="font-size: 3rem; color: #007bff"></i>
          <h3 class="mt-3">Integração com Dispositivos Inteligentes</h3>
          <p class="text-center">
            Conecte o PetTalk ao seu dispositivo Alexa ou Google Home para interagir de forma ainda mais inteligente com seu pet.
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="feature-card d-flex flex-column align-items-center justify-content-between p-4" style="height: 100%">
          <i class="bi bi-chat-dots" style="font-size: 3rem; color: #007bff"></i>
          <h3 class="mt-3">Comunique-se com seu Pet</h3>
          <p class="text-center">
            Comunique-se de maneira mais eficiente, sabendo exatamente o que seu pet precisa ou está tentando expressar.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button id="btnPlanos" class="btn btn-primary rounded-pill cta-btn">Para Planos</button>
    </div>
  `;

  // Adiciona o evento de clique ao botão para ir ate planos
  document.getElementById('btnPlanos').addEventListener('click', function() {
    setPagina('Planos'); 
  });
}