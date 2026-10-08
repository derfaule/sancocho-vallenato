// Sancocho Vallenato - Main Script

// Story data (embedded for simplicity)
const stories = [
    {
        id: 1,
        title: "El Chicharrón",
        artist: "Omar Geles",
        year: 1999,
        preview: "Una tonada nos regala la eterna metáfora continuada de un malherido amante.",
        content: "Esta personificación en la que se le atribuyen negativamente, a una ya bastante dañina, piel de porcino frita a altas y caldedas temperaturas las faenas y pormenores de una compleja y nociva relación, qué chicharrón diría.",
        image: 'imagenes-artistas-transparent/omargelesblanco2.png',
        spotifyUrl: 'https://open.spotify.com/track/5nglqtzVpQqcQrxSy99z2b?si=0eede413b3d449e5'
    },
    {
        id: 2,
        title: "La Yuca y La Tajada",
        artist: "Ivan Villazon y Saul Lallemand",
        year: 2014,
        preview: "De autoría de Romualdo Brito, una inexplicable y tubercular tonada.",
        content: "De autoría de Romualdo Brito, esta inexplicable y tubercular tonada que canta al amor titulada como dos nuestros acompañamientos de almidón preferidos.",
        image: 'imagenes-artistas-transparent/villalol.png',
        spotifyUrl: 'https://open.spotify.com/track/6g8dDMax9zbrTPh5Uh2ZDP?si=8a1a29acc9ce4f5c'
    },
    {
        id: 3,
        title: "El Comelón",
        artist: "Diomedes Diaz",
        year: 1994,
        preview: "Una eterna metáfora continuada de un malherido amante.",
        content: "Rotulado en Fiesta Vallenata Vol. 20, esta tonada nos regala la eterna metáfora continuada de un malherido amante amanerando a su musa con su suicidio de manera voraz.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png',
        spotifyUrl: 'https://open.spotify.com/track/0SztmpJGHpl4ys9Ev5vNVP?si=c5c4b9f9d59240eb'
    },
    {
        id: 4,
        title: "Invitación Parrandera",
        artist: "Tomas Alfonso Zuleta & Nicolas Elias Mendoza",
        year: 1975,
        preview: "Una invitación a la celebración de la vida caribeña.",
        content: "Una invitación parrandera a celebrar con alegría los momentos de la vida caribeña.",
        image: 'imagenes-artistas-transparent/landerocolorblanco2.png',
        spotifyUrl: 'https://open.spotify.com/track/7bawpvwUsHiUud17sThx9x?si=b65115a8f02e4263'
    },
    {
        id: 5,
        title: "El Hambre del Liceo",
        artist: "Carlos Vives",
        year: 1992,
        preview: "La realidad de la educación colombiana.",
        content: "En autoría del ya ido maestro Escalona nos refiere a los periplos y abyectos menesteres alimenticios a los cuales se carea un estudiante de internado de la época.",
        image: 'imagenes-artistas-transparent/alfredogutierrezblanco2.png',
        spotifyUrl: 'https://open.spotify.com/track/5a4ieyuPzAAb6uwSi4loi7?si=8baa80fd07734fb2'
    },
    {
        id: 6,
        title: "Navidad",
        artist: "El Binomio de Oro",
        year: 1982,
        preview: "Una oda de los contrastes navideños.",
        content: "De la apertura del lado B del rotulado 227 20928 del sello Costeño lo tenemos esta inolvidable oda de los contrastes navideños en nuestros albores de la mesa familiar, una tristeza que la desigualdad sea el pan diario de estas poesias.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png',
        spotifyUrl: 'https://open.spotify.com/track/7JIHN2bhJhHe9YlFueQoEk?si=96ba9dcca7584ead'
    },
    {
        id: 7,
        title: "Las Frutas del Amor",
        artist: "Los Corraleros de Majagual",
        year: 1974,
        preview: "Una celebración de la sensualidad de los frutos caribeños.",
        content: "Tomado del LP de Fuentes titulado Volvimos, Los Corraleros nos invitan a llevar con ellos su carreta en la cuál estiban las famosas frutas del amor o de la pasión, un colorín digno de la región.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png',
        spotifyUrl: 'https://open.spotify.com/track/3Db8G3cud19j03DPLZ3uKs?si=f9d0699610694eb6'
    },
    {
        id: 8,
        title: "Cumbia Campesina",
        artist: "Andrés Landero",
        year: 1983,
        preview: "Ritmo ancestral que mezcla herencias africana, española e indígena.",
        content: "Ritmo ancestral que mezcla la herencia africana, española e indígena. La cumbia es la voz del pueblo, la música que resuena en las calles de Colombia.",
        image: 'imagenes-artistas-transparent/diomedesdosblanco.png',
        spotifyUrl: 'https://open.spotify.com/track/1caksBdmOPYNjs5DgfqP9G?si=3cae519acde345c6'
    },
    {
        id: 9,
        title: "El Limoncito",
        artist: "Diomedes Díaz",
        year: 1979,
        preview: "Una pieza satírica y humorística.",
        content: "Con su característico estilo satírico, Diomedes Díaz juega con los símbolos y metáforas de nuestra región, haciéndonos reír de nuestras propias realidades.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png',
        spotifyUrl: 'https://open.spotify.com/track/43M61bg2SH4H5KHGsjzrR7?si=98e7b685386a4de5'
    },
    {
        id: 10,
        title: "La Empanadita",
        artist: "Calixto Ochoa",
        year: 1981,
        preview: "Una celebración de la comida callejera y la gastronomía popular.",
        content: "La empanada como expresión de identidad y tradición. Un símbolo de la resistencia cultural de nuestro pueblo caribeño.",
        image: 'imagenes-artistas-transparent/calixto2.png',
        spotifyUrl: 'https://open.spotify.com/track/5E69ZoNVNfcsCKMC0jeqGH?si=625a0de407e1492b'
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
    const drawer = document.getElementById('story-drawer');
    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('storyArtist').textContent = story.artist || '';
    document.getElementById('storyYear').textContent = story.year;
    document.getElementById('storyContent').innerHTML = `<p>${story.content}</p>`;

    // Set image
    const imageDiv = document.getElementById('storyImage');
    if (story.image) {
        imageDiv.innerHTML = `<img src="${story.image}" alt="${story.title}">`;
    } else {
        imageDiv.innerHTML = '';
    }

    // Set Spotify link
    const spotifyLink = document.getElementById('spotifyLink');
    if (story.spotifyUrl) {
        spotifyLink.href = story.spotifyUrl;
        spotifyLink.style.display = 'inline-block';
    } else {
        spotifyLink.style.display = 'none';
    }

    drawer.classList.remove('hidden');
    document.querySelector('.stories-section').classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
}

// Close story detail
function closeStory() {
    const drawer = document.getElementById('story-drawer');
    drawer.classList.add('hidden');
    document.querySelector('.stories-section').classList.remove('drawer-open');
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
