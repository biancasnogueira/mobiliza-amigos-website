// Seleciona os elementos das setas e dos cartões pelo ID
var setaDireita = document.getElementById("seta-direita");
var setaEsquerda = document.getElementById("seta-esquerda");
var divCards = document.getElementById("div-cards");
var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var bruna = document.getElementById("bruna");

// Define a quantidade de rolagem atual para o carrossel. Inicialmente, está em 0 (início do carrossel)
var scrollAmount = 0;
var scrollStep = 250; // Define o valor do passo da rolagem

// Função para exibir ou ocultar os cartões conforme o scroll
function atualizarCartoes() {
    if (scrollAmount >= scrollStep) {
        leonardo.style.display = "none";
        bruna.style.display = "flex";
    } else {
        leonardo.style.display = "flex";
        bruna.style.display = "none";
    }
}

// Função para rolar o carrossel para a direita
function RolarParaDireita() {
    scrollAmount += scrollStep;
    divCards.style.transform = `translateX(-${scrollAmount}px)`;
    atualizarCartoes();
    setaDireita.style.display = "none";
    setaEsquerda.style = "display: flex; margin-top: 55px";
}

// Função para rolar o carrossel para a esquerda
function RolarParaEsquerda() {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    divCards.style.transform = `translateX(-${scrollAmount}px)`;
    atualizarCartoes();
    setaDireita.style = "display: flex; margin-top: 55px";
    setaEsquerda.style.display = "none";
}

// Adiciona eventos de clique nas setas para chamar as funções correspondentes
setaDireita.addEventListener("click", RolarParaDireita);
setaEsquerda.addEventListener("click", RolarParaEsquerda);

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
