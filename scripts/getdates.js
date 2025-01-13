// Dynamically populate the current year in the footer  
const currentYearSpan = document.getElementById("currentyear");  
const currentYear = new Date().getFullYear();  
currentYearSpan.textContent = currentYear;

// Dynamically populate the last modified date in the footer  
const lastModifiedParagraph = document.getElementById("lastModified");  
const lastModifiedDate = document.lastModified;  
lastModifiedParagraph.textContent = `Last Updated: ${lastModifiedDate}`; 