// place.js

// Update footer year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind chill calculation function
function calculateWindChill(temp, speed) {
    // Using Celsius and km/h as Brazil uses metric system
    if (temp <= 10 && speed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }
    return "N/A";
}

// Get static temperature and wind speed values
const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

// Calculate and display wind chill
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = 
    windChill === "N/A" ? "N/A" : `${windChill.toFixed(1)}°C`;