// Update the footer with the last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Insert the current year into the footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Vitor Castro | São Paulo, Brasil`;

// Add a click event listener to the hamburger button  
hamburger.addEventListener('click', () => {  
    // Toggle the visibility of the navigation menu  
    if (menu.style.display === 'block') {  
      menu.style.display = 'none'; // Hide the menu  
      hamburger.textContent = '☰'; // Change the symbol back to the hamburger  
    } else {  
      menu.style.display = 'block'; // Show the menu  
      hamburger.textContent = '✖'; // Change the symbol to an "X"  
    }  
});  

