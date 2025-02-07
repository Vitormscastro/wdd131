// Product data array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate product select options
function populateProducts() {
    const selectElement = document.getElementById('product');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        selectElement.appendChild(option);
    });
}

// Update footer information
function updateFooter() {
    // Update current year
    const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Update last modification date
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    const formattedTime = lastModified.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    lastModifiedElement.textContent = `${formattedDate} ${formattedTime}`;
}

// Initialize the form
document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    updateFooter();
});

// For review.html - Increment review counter
if (document.location.pathname.includes('review.html')) {
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the count
    const countDisplay = document.createElement('p');
    countDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
    document.body.appendChild(countDisplay);
}