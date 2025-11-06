// ============================================
// CONFIGURAÇÕES GERAIS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initParticles();
    initBackToTop();
    initProjectCards();
});

// ============================================
// NAVEGAÇÃO
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect na navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Atualiza link ativo baseado na seção visível
        updateActiveNavLink();
    });

    // Toggle menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Atualiza o link ativo na navegação
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// EFEITO DE DIGITAÇÃO
// ============================================

function initTypingEffect() {
    const typedTextElement = document.querySelector('.typed-text');
    
    if (!typedTextElement) return;
    
    const texts = [
        'Desenvolvedor de Sistemas',
        'Programador Full Stack',
        'Desenvolvedor Web',
        'Solucionador de Problemas'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            // Pausa no final do texto
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Inicia o efeito de digitação
    setTimeout(type, 1000);
}

// ============================================
// ANIMAÇÕES DE SCROLL
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                
                // Para cards de projeto, adiciona delay escalonado
                if (entry.target.classList.contains('projeto-card')) {
                    const cards = document.querySelectorAll('.projeto-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('appear');
                        }, index * 100);
                    });
                }
                
                // Para skills, adiciona delay escalonado
                if (entry.target.classList.contains('skill-card')) {
                    const skills = document.querySelectorAll('.skill-card');
                    skills.forEach((skill, index) => {
                        setTimeout(() => {
                            skill.classList.add('appear');
                        }, index * 50);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observa todos os elementos que devem ter animação
    const elementsToAnimate = document.querySelectorAll(
        '.projeto-card, .skill-card, .info-card, .contato-card, .sobre-text'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// ============================================
// PARTÍCULAS DE FUNDO
// ============================================

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    // Cria partículas
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Posição inicial aleatória
    const startX = Math.random() * window.innerWidth;
    particle.style.left = startX + 'px';
    
    // Tamanho aleatório
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Duração da animação aleatória
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = duration + 's';
    
    // Delay aleatório
    const delay = Math.random() * 5;
    particle.style.animationDelay = delay + 's';
    
    container.appendChild(particle);
    
    // Remove e recria a partícula quando a animação terminar
    particle.addEventListener('animationend', function() {
        particle.remove();
        createParticle(container);
    });
}

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================

function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    // Mostra/esconde o botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Scroll suave ao topo ao clicar
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// CARDS DE PROJETOS
// ============================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.projeto-card');
    
    projectCards.forEach(card => {
        // Adiciona efeito de hover suave
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ============================================
// EFEITOS ADICIONAIS
// ============================================

// Efeito parallax suave no scroll
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.home-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Adiciona classe ao carregar a página
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Previne comportamento padrão de arrastar imagens
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// ============================================
// ANIMAÇÕES DE HOVER NOS SOCIAL LINKS
// ============================================

document.querySelectorAll('.social-links a, .social-icons a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(360deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ============================================
// CONTADOR DE ESTATÍSTICAS (opcional)
// ============================================

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ============================================
// MENSAGENS DE CONSOLE (Easter Egg)
// ============================================

console.log('%c👋 Olá, Dev!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Portfólio desenvolvido por Victor Hugo', 'color: #8b5cf6; font-size: 14px;');
console.log('%c💼 Interessado em trabalhar comigo? Entre em contato!', 'color: #ec4899; font-size: 14px;');
console.log('%c📧 hugoaurelianovictor@gmail.com', 'color: #94a3b8; font-size: 12px;');

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce para otimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplica debounce aos eventos de scroll
const debouncedScroll = debounce(function() {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// ACESSIBILIDADE
// ============================================

// Adiciona foco visível ao navegar com teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// TRATAMENTO DE ERROS
// ============================================

window.addEventListener('error', function(e) {
    console.error('Erro detectado:', e.message);
});

// ============================================
// FIM DO SCRIPT
// ============================================

console.log('%c✅ Portfolio carregado com sucesso!', 'color: #10b981; font-size: 12px; font-weight: bold;');
