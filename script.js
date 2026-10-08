// Sancocho Vallenato - Main Script

// Story data (embedded for simplicity)
const stories = [
    {
        id: 1,
        title: "El Chicharrón",
        artist: "Omar Geles",
        year: 1999,
        content: "Esta personificación en la que se le atribuyen negativamente, a una ya bastante dañina, piel de porcino frita a altas y caldedas temperaturas las faenas y pormenores de una compleja y nociva relación, qué chicharrón diría.",
        image: 'imagenes-artistas-transparent/omargelesblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=WQGhWODSV-Y'
    },
    {
        id: 2,
        title: "La Yuca y La Tajada",
        artist: "Ivan Villazon y Saul Lallemand",
        year: 2014,
        content: "De autoría de Romualdo Brito, esta inexplicable y tubercular tonada que canta al amor titulada como dos nuestros acompañamientos de almidón preferidos.",
        image: 'imagenes-artistas-transparent/villalol.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 3,
        title: "El Comelón",
        artist: "Diomedes Diaz",
        year: 1994,
        content: "Rotulado en Fiesta Vallenata Vol. 20, esta tonada nos regala la eterna metáfora continuada de un malherido amante amanerando a su musa con su suicidio de manera voraz.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 4,
        title: "Invitación Parrandera",
        artist: "Tomas Alfonso Zuleta & Nicolas Elias Mendoza",
        year: 1975,
        content: "Una invitación parrandera a celebrar con alegría los momentos de la vida caribeña.",
        image: 'imagenes-artistas-transparent/landerocolorblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 5,
        title: "El Hambre del Liceo",
        artist: "Carlos Vives",
        year: 1992,
        content: "En autoría del ya ido maestro Escalona nos refiere a los periplos y abyectos menesteres alimenticios a los cuales se carea un estudiante de internado de la época.",
        image: 'imagenes-artistas-transparent/alfredogutierrezblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 6,
        title: "Navidad",
        artist: "El Binomio de Oro",
        year: 1982,
        content: "De la apertura del lado B del rotulado 227 20928 del sello Costeño lo tenemos esta inolvidable oda de los contrastes navideños en nuestros albores de la mesa familiar, una tristeza que la desigualdad sea el pan diario de estas poesias.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 7,
        title: "Las Frutas del Amor",
        artist: "Los Corraleros de Majagual",
        year: 1974,
        content: "Tomado del LP de Fuentes titulado Volvimos, Los Corraleros nos invitan a llevar con ellos su carreta en la cuál estiban las famosas frutas del amor o de la pasión, un colorín digno de la región.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 8,
        title: "Cumbia Campesina",
        artist: "Andrés Landero",
        year: 1983,
        content: "Ritmo ancestral que mezcla la herencia africana, española e indígena. La cumbia es la voz del pueblo, la música que resuena en las calles de Colombia.",
        image: 'imagenes-artistas-transparent/diomedesdosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 9,
        title: "El Limoncito",
        artist: "Diomedes Díaz",
        year: 1979,
        content: "Con su característico estilo satírico, Diomedes Díaz juega con los símbolos y metáforas de nuestra región, haciéndonos reír de nuestras propias realidades.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
    },
    {
        id: 10,
        title: "La Empanadita",
        artist: "Calixto Ochoa",
        year: 1981,
        content: "La empanada como expresión de identidad y tradición. Un símbolo de la resistencia cultural de nuestro pueblo caribeño.",
        image: 'imagenes-artistas-transparent/calixto2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=INSERT_VIDEO_ID'
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
    if (!grid) {
        console.error('storiesGrid element not found');
        return;
    }
    grid.innerHTML = '';

    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.id = `story-${story.id}`;
        card.innerHTML = `
            <h3 class="story-card-title">${story.title}</h3>
            <p class="story-card-artist">${story.artist}</p>
            <p class="story-card-year">(<em>${story.year}</em>)</p>
            <div class="story-expanded-content" style="display: none; margin-top: 1rem;">
                <div class="story-image" style="margin-bottom: 1rem;"></div>
                <div class="story-text" style="margin-bottom: 1rem;"></div>
                <div class="spotify-embed"></div>
            </div>
        `;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            expandStory(card, story);
        });
        grid.appendChild(card);
    });
}

// Toggle story expansion
function expandStory(card, story) {
    const isExpanded = card.classList.contains('expanded');

    // Close all other expanded cards
    document.querySelectorAll('.story-card.expanded').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
            c.querySelector('.story-expanded-content').style.display = 'none';
        }
    });

    if (isExpanded) {
        card.classList.remove('expanded');
        card.querySelector('.story-expanded-content').style.display = 'none';
    } else {
        card.classList.add('expanded');
        const content = card.querySelector('.story-expanded-content');
        content.style.display = 'block';

        // Populate content
        const imageDiv = content.querySelector('.story-image');
        if (story.image) {
            imageDiv.innerHTML = `<img src="${story.image}" alt="${story.title}" loading="lazy" style="width: 100%; height: auto; display: block;">`;
        }

        const textDiv = content.querySelector('.story-text');
        textDiv.innerHTML = `<p>${story.content}</p>`;

        // Add YouTube embed
        const embedDiv = content.querySelector('.spotify-embed');
        if (story.youtubeUrl) {
            const videoId = extractYouTubeId(story.youtubeUrl);
            if (videoId) {
                embedDiv.innerHTML = `<iframe width="100%" height="250" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
        }

        // Scroll card into view
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}


// Extract YouTube video ID from URL
function extractYouTubeId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
    ];

    for (let pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
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

