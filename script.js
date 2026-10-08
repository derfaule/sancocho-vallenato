// Sancocho Vallenato - Main Script

// Story data (embedded for simplicity)
const stories = [
    {
        id: 1,
        title: "El Chicharrón Omar Geles",
        year: 1999,
        preview: "Una tonada nos regala la eterna metáfora continuada de un malherido amante.",
        content: "Esta personificación en la que se le atribuyen negativamente, a una ya bastante dañina, piel de porcino frita a altas y caldedas temperaturas las faenas y pormenores de una compleja y nociva relación, qué chicharrón diría.",
        image: 'imagenes-artistas-transparent/omargelesblanco2.png'
    },
    {
        id: 2,
        title: "La Mermelada",
        year: 2002,
        preview: "La 'mermelada' fue crucial para la escogencia del Presidente Juan Manuel Santos.",
        content: "La mermelada, ese grotesco pago de cuotas o favores políticos en forma de dineros público que untaban en los paneles de poder. Ese tan arraigado plato de fusión culinaria que mezcla cocidos típicos españoles con los ajíacos de nuestros colonizados indígenas.",
        image: 'imagenes-artistas-transparent/mermeladablanconegro2.png'
    },
    {
        id: 3,
        title: "La Yuca y La Hamaca",
        year: 1985,
        preview: "De autoría de Romualdo Brito, una inexplicable y tubercular tonada.",
        content: "Una bellísima composición sobre los frutos de la región que alimentan nuestro pueblo caribe. La yuca como símbolo de resistencia y la hamaca como descanso del trabajador.",
        image: 'imagenes-artistas-transparent/villalol.png'
    },
    {
        id: 4,
        title: "La Taja",
        year: 2014,
        preview: "Raúl Lallemand nos presenta esta tonada con un toque de sátira.",
        content: "Una composición que habla sobre la división de recursos y las desigualdades que caracterizan nuestra región.",
        image: 'imagenes-artistas-transparent/landerocolorblanco2.png'
    },
    {
        id: 5,
        title: "El Hambre del Liceo",
        year: 1992,
        preview: "Carlos Vives nos recuerda la realidad de la educación colombiana.",
        content: "Una canción sobre las carencias y luchas de los estudiantes en nuestro sistema educativo.",
        image: 'imagenes-artistas-transparent/alfredogutierrezblanco2.png'
    },
    {
        id: 6,
        title: "Agua Diente con Lechuga",
        year: 1992,
        preview: "Alfredo Gutiérrez nos presenta una receta de la región caribeña.",
        content: "Con la aguardiente como protagonista, esta canción celebra los elementos básicos de nuestra gastronomía, la comida simple pero sustancial que ha mantenido viva a la región.",
        image: 'imagenes-artistas-transparent/alfredogutierrezblanco2.png'
    },
    {
        id: 7,
        title: "Las Frutas del Amor",
        year: 1974,
        preview: "Los Corraleros de Majagual nos invitan a una celebración de abundancia.",
        content: "Un colorín digno de la región. Nos presentan una celebración de la sensualidad de los frutos de nuestra tierra caribeña.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png'
    },
    {
        id: 8,
        title: "Cumbia: Campeones de la Frase",
        year: 1978,
        preview: "La cumbia es el lenguaje del pueblo caribe, la expresión más pura.",
        content: "Ritmo ancestral que mezcla la herencia africana, española e indígena. La cumbia es la voz del pueblo, la música que resuena en las calles de Colombia.",
        image: 'imagenes-artistas-transparent/diomedesdosblanco.png'
    },
    {
        id: 9,
        title: "El Limoncito",
        year: 1979,
        preview: "Diomedes Díaz nos presenta una pieza satírica y humorística.",
        content: "Con su característico estilo satírico, Diomedes Díaz juega con los símbolos y metáforas de nuestra región, haciéndonos reír de nuestras propias realidades.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png'
    },
    {
        id: 10,
        title: "Empanada La Anita",
        year: 1981,
        preview: "Una celebración de la comida callejera y la gastronomía popular.",
        content: "La empanada como expresión de identidad y tradición. Un símbolo de la resistencia cultural de nuestro pueblo caribeño.",
        image: 'imagenes-artistas-transparent/calixto2.png'
    }
];

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    renderStories();
    setupNavigation();
    setupSmoothScroll();
});

// Render stories grid
function renderStories() {
    const grid = document.getElementById('storiesGrid');
    grid.innerHTML = '';

    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <h3 class="story-card-title">${story.title}</h3>
            <p class="story-card-year">${story.year}</p>
            <p class="story-card-preview">${story.preview}</p>
            <div class="story-card-cta">Leer más →</div>
        `;
        card.addEventListener('click', () => openStory(story));
        grid.appendChild(card);
    });
}

// Open story detail
function openStory(story) {
    const detail = document.getElementById('story-detail');
    document.getElementById('storyTitle').textContent = `${story.title} (${story.year})`;
    document.getElementById('storyContent').innerHTML = `<p>${story.content}</p>`;

    // Set background image or color
    const imageDiv = document.getElementById('storyImage');
    if (story.image) {
        imageDiv.innerHTML = `<img src="${story.image}" alt="${story.title}">`;
    } else {
        imageDiv.style.backgroundImage = 'linear-gradient(135deg, #e63946 0%, #d62828 100%)';
        imageDiv.innerHTML = `<h3 style="color: white; font-size: 2rem; text-align: center;">${story.year}</h3>`;
    }

    detail.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close story detail
function closeStory() {
    const detail = document.getElementById('story-detail');
    detail.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Setup navigation
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.remove('active');

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Scroll to section
            const section = link.getAttribute('data-section');
            scrollToSection(section);
        });
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup smooth scroll for CTA buttons
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Close story detail on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeStory();
    }
});
