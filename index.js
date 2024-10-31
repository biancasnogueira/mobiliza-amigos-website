


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
