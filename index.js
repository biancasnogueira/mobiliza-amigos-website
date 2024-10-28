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
