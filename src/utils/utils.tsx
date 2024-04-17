import { useMediaQuery, Theme } from "@mui/material";

export function ScrollToNextSection() {
    let nextSection = GetNextSection();
    if (nextSection != null) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

export function GetNextSection(): HTMLElement | null {
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

export function GetBreakpoint(theme: Theme): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

    if (isXs){
        return 'xs'
    }

    if (isSm){
        return 'sm'
    }

    if (isMd){
        return 'md'
    }

    if (isLg){
        return 'lg'
    }

    return 'xl'
}