export function scrollToNextSection() {
    let nextSection = getNextSection();
    if (nextSection != null) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

export function getNextSection(): HTMLElement | null {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight; // Posição atual de rolagem + altura da janela de visualização

    let proximaSecao = null;
    let menorDistancia = Infinity;

    sections.forEach(section => {
        const distancia = section.offsetTop - scrollPosition;

        if (distancia > 0 && distancia < menorDistancia) {
            menorDistancia = distancia;
            proximaSecao = section;
        }
    });

    return proximaSecao;
}