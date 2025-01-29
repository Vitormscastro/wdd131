// Temple array data
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
  {
      templeName: "São Paulo Brasil",
      location: "São Paulo, Brasil",
      dedicated: "1978, October, 30",
      area: 59246,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
  {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 53997,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
      templeName: "Rio de Janeiro Brasil",
      location: "Rio de Janeiro, Brasil",
      dedicated: "2022, March, 26",
      area: 29966,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
  }
];

// Mobile menu toggle functionality
const hamburgerButton = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Handle menu visibility on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
      menu.classList.remove('show');
  }
});

// Create temple card
function createTempleCard(temple) {
  const article = document.createElement('article');
  article.classList.add('temple-card');

  article.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p class="location">Location: ${temple.location}</p>
      <p class="dedicated">Dedicated: ${temple.dedicated}</p>
      <p class="size">Size: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
  `;

  return article;
}

// Display temples in the gallery
function displayTemples(templesArray) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  templesArray.forEach(temple => {
      const templeCard = createTempleCard(temple);
      gallery.appendChild(templeCard);
  });
}

// Filter temples based on criteria
function filterTemples(filter) {
  let filteredTemples;
  const currentYear = new Date().getFullYear();

  switch(filter) {
      case 'old':
          // Temples built before 1900
          filteredTemples = temples.filter(temple => {
              const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
              return dedicatedYear < 1900;
          });
          break;
      case 'new':
          // Temples built after 2000
          filteredTemples = temples.filter(temple => {
              const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
              return dedicatedYear > 2000;
          });
          break;
      case 'large':
          // Temples larger than 90000 square feet
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          // Temples smaller than 10000 square feet
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
      default:
          // Home - display all temples
          filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

// Add event listeners to navigation links
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.textContent.toLowerCase();
      filterTemples(filter);
  });
});

// Initialize the gallery with all temples
filterTemples('home');

// Update last modified date
document.getElementById('lastModified').textContent = document.lastModified;
