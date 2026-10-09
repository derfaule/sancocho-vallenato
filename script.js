// Sancocho Vallenato - Main Script

// Story data (embedded for simplicity)
const stories = [
    {
        id: 1,
        title: "El Chicharrón",
        artist: "Omar Geles",
        content: "Esta personificación en la que se le atribuyen negativamente, a una ya bastante dañina, piel de porcino frita a altas y caldedas temperaturas las faenas y pormenores de una compleja y nociva relación, qué chicharrón diría.",
        image: 'imagenes-artistas-transparent/omargelesblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=dBA1hMNptjs?si=lm2G54arifkqK81Q'
    },
    {
        id: 2,
        title: "La Yuca y La Tajada",
        artist: "Ivan Villazon y Saul Lallemand",
        content: "De autoría de Romualdo Brito, esta inexplicable y tubercular tonada que canta al amor titulada como dos nuestros acompañamientos de almidón preferidos.",
        image: 'imagenes-artistas-transparent/villalol.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=ropdwqJtrQ4'
    },
    {
        id: 3,
        title: "El Comelón",
        artist: "Diomedes Diaz",
        content: "Rotulado en Fiesta Vallenata Vol. 20, esta tonada nos regala la eterna metáfora continuada de un malherido amante amanerando a su musa con su suicidio de manera voraz.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=GA2OYoq3gNo'
    },
    {
        id: 4,
        title: "Invitación Parrandera",
        artist: "Tomas Alfonso Zuleta & Nicolas Elias Mendoza",
        content: "Una invitación parrandera a celebrar con alegría los momentos de la vida caribeña.",
        image: 'imagenes-artistas-transparent/invitacion-parrandera.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=m4eJLjDMWe8'
    },
    {
        id: 5,
        title: "El Hambre del Liceo",
        artist: "Carlos Vives",
        content: "En autoría del ya ido maestro Escalona nos refiere a los periplos y abyectos menesteres alimenticios a los cuales se carea un estudiante de internado de la época.",
        image: 'imagenes-artistas-transparent/el-hambre-del-liceo.svg',
        youtubeUrl: 'https://www.youtube.com/watch?v=0XIqsybJg5o'
    },
    {
        id: 6,
        title: "Navidad",
        artist: "El Binomio de Oro",
        content: "De la apertura del lado B del rotulado 227 20928 del sello Costeño lo tenemos esta inolvidable oda de los contrastes navideños en nuestros albores de la mesa familiar, una tristeza que la desigualdad sea el pan diario de estas poesias.",
        image: 'imagenes-artistas-transparent/navidad.svg',
        youtubeUrl: 'https://www.youtube.com/watch?v=t0rTDZNWIyU'
    },
    {
        id: 7,
        title: "Las Frutas del Amor",
        artist: "Los Corraleros de Majagual",
        content: "Tomado del LP de Fuentes titulado Volvimos, Los Corraleros nos invitan a llevar con ellos su carreta en la cuál estiban las famosas frutas del amor o de la pasión, un colorín digno de la región.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=vvfI2gOqOLw'
    },
    {
        id: 8,
        title: "Cumbia Campesina",
        artist: "Andrés Landero",
        content: "Ritmo ancestral que mezcla la herencia africana, española e indígena. La cumbia es la voz del pueblo, la música que resuena en las calles de Colombia.",
        image: 'imagenes-artistas-transparent/landerocolorblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=GQ9Gje94tgQ'
    },
    {
        id: 9,
        title: "El Limoncito",
        artist: "Diomedes Díaz",
        content: "Con su característico estilo satírico, Diomedes Díaz juega con los símbolos y metáforas de nuestra región, haciéndonos reír de nuestras propias realidades.",
        image: 'imagenes-artistas-transparent/diomedesdosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=X3NS47rVvVE'
    },
    {
        id: 10,
        title: "La Empanadita",
        artist: "Calixto Ochoa",
        content: "La empanada como expresión de identidad y tradición. Un símbolo de la resistencia cultural de nuestro pueblo caribeño.",
        image: 'imagenes-artistas-transparent/calixto2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=50mDGC34g_M'
    }
];

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    renderStories();
    setupSmoothScroll();
    setupParallaxScroll();
});

// Parallax scroll effect for intro image - sticks to top, moves left to right
function setupParallaxScroll() {
    const parallaxImage = document.querySelector('.parallax-image img');
    if (!parallaxImage) return;

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / maxScroll) * 100;

        // Move image from left (-150px) to right (+150px) as you scroll
        const translateX = (scrollPercent / 100) * 300 - 150;
        parallaxImage.style.transform = `translateX(${translateX}px)`;
    });
}

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
            <div class="story-expanded-content" style="display: none; opacity: 0; margin-top: 1rem;">
                <div class="story-image" style="margin-bottom: 1rem;"></div>
                <div class="story-text" style="margin-bottom: 1rem;"></div>
                <div class="spotify-embed"></div>
            </div>
        `;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // Don't expand if clicking on the embed or play button
            if (e.target.closest('.spotify-embed') || e.target.closest('.youtube-play-btn')) {
                return;
            }
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
            const content = c.querySelector('.story-expanded-content');
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.display = 'none';
            }, 300);
            const img = c.querySelector('.story-image');
            if (img) img.classList.remove('animate');
        }
    });

    if (isExpanded) {
        card.classList.remove('expanded');
        const content = card.querySelector('.story-expanded-content');
        content.style.opacity = '0';
        const img = card.querySelector('.story-image');
        if (img) img.classList.remove('animate');
        setTimeout(() => {
            content.style.display = 'none';
        }, 300);
    } else {
        card.classList.add('expanded');
        const content = card.querySelector('.story-expanded-content');
        content.style.display = 'block';
        setTimeout(() => {
            content.style.opacity = '1';
        }, 10);

        // Populate content
        const imageDiv = content.querySelector('.story-image');
        if (story.image) {
            imageDiv.innerHTML = `<img src="${story.image}" alt="${story.title}" loading="lazy" style="width: 100%; height: auto; display: block;">`;
            imageDiv.classList.add('animate');
        }

        const textDiv = content.querySelector('.story-text');
        textDiv.innerHTML = `<p>${story.content}</p>`;

        // Add YouTube audio embed
        const embedDiv = content.querySelector('.spotify-embed');
        if (story.youtubeUrl) {
            const videoId = extractYouTubeId(story.youtubeUrl);
            if (videoId) {
                embedDiv.innerHTML = `<iframe width="100%" height="90" src="https://www.youtube.com/embed/${videoId}" title="YouTube audio player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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

