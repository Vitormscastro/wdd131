// Dynamic Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Mobile Navigation Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Championship Carousel Data
const championships = [
    {
        year: 1988,
        team: "McLaren-Honda",
        wins: 8,
        podiums: 11,
        image: "images/1988-win.webp",
        secondPlace: "Alain Prost",
        thirdPlace: "Gerhard Berger"
    },
    {
        year: 1990,
        team: "McLaren-Honda",
        wins: 6,
        podiums: 10,
        image: "images/1990-win.webp",
        secondPlace: "Alain Prost",
        thirdPlace: "Nelson Piquet"
    },
    {
        year: 1991,
        team: "McLaren-Honda",
        wins: 7,
        podiums: 12,
        image: "images/1991-win.webp",
        secondPlace: "Nigel Mansell",
        thirdPlace: "Riccardo Patrese"
    }
];

// Initialize Championship Carousel
const carouselContainer = document.querySelector('.championship-carousel');
let currentIndex = 0;

function createChampionshipCard(championship) {
    return `
        <div class="championship-card p-6 rounded-lg">
            <img src="${championship.image}" alt="${championship.year} Championship" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="font-racing text-2xl text-[#FFD700] mb-2">${championship.year} World Champion</h3>
            <p class="mb-2">Team: ${championship.team}</p>
            <p class="mb-2">Wins: ${championship.wins}</p>
            <p class="mb-2">Podiums: ${championship.podiums}</p>
            <p class="mb-1">2nd Place: ${championship.secondPlace}</p>
            <p>3rd Place: ${championship.thirdPlace}</p>
        </div>
    `;
}

function updateCarousel() {
    const cards = championships.map(createChampionshipCard).join('');
    carouselContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cards}
        </div>
    `;
}

// Initialize carousel
updateCarousel();

// Form Validation (for newsletter.html)
const newsletterForm = document.querySelector('#newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(newsletterForm);
        const data = Object.fromEntries(formData);
        
        // Store in localStorage
        localStorage.setItem('newsletterData', JSON.stringify(data));
        
        // Redirect to confirmation page
        window.location.href = 'form-confirmation.html';
    });
}