// Seleciona todos os botões de controle (setas) e armazena em uma NodeList
const controls = document.querySelectorAll(".control");
// Inicializa a variável para controlar qual item está visível atualmente
let currentItem = 0;
// Seleciona todos os itens (imagens) da galeria
const items = document.querySelectorAll(".item");
// Armazena o número total de itens
const maxItems = items.length;
// Seleciona o elemento da galeria onde os itens estão
const gallery = document.querySelector(".gallery");

// Para cada controle (seta), adiciona um evento de clique
controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    // Verifica se o botão clicado é a seta da esquerda
    const isLeft = e.target.classList.contains("arrow-left");

    // Se for a seta da esquerda, diminui o índice do item atual
    if (isLeft) {
      currentItem -= 1; 
    } else {
      // Caso contrário, aumenta o índice do item atual
      currentItem += 1; 
    }

    // Se o índice atual exceder o número máximo de itens, reinicia para o primeiro item
    if (currentItem >= maxItems) {
      currentItem = 0; // Reinicia para o começo se for o último
    }

    // Se o índice atual for menor que 0, volta para o último item
    if (currentItem < 0) {
      currentItem = maxItems - 1; // Volta para o último se for o primeiro
    }

    // Calcula o deslocamento horizontal necessário para o item atual
    // Multiplica o índice atual pela largura do item + qualquer espaçamento entre eles
    const offset = -currentItem * 265; // Largura do item + gap entre eles
    // Aplica a transformação para mover a galeria horizontalmente
    gallery.style.transform = `translateX(${offset}px)`;

    // Atualiza a opacidade do item atual
    // Remove a classe 'current-item' de todos os itens
    items.forEach((item) => item.classList.remove("current-item"));
    // Adiciona a classe 'current-item' apenas ao item atual
    items[currentItem].classList.add("current-item");
  });
});

// Função para animar o contador
function animateCounter(element, start, end, duration) {
    let current = start;
    const increment = end / (duration / 10); // Controla a velocidade do incremento
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end; // Define o número final
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 10); // Intervalo de 10ms para uma animação suave
}

// Observa se o elemento do contador está visível na tela
const contador = document.getElementById("contador");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(contador, 0, 1000, 2000); // Valor final: 1000, duração: 2000ms
            observer.unobserve(contador); // Remove o observador após a animação
        }
    });
});
observer.observe(contador);

window.addEventListener('load', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100); // 100 milissegundos
});
