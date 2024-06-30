function calculateWindchill() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);

    if (temperature <= 50 && windSpeed > 3) {
        const windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        document.getElementById('windchill').textContent = `Windchill: ${windchill.toFixed(2)}°F`;
    } else {
        document.getElementById('windchill').textContent = 'Windchill: N/A';
    }
}

// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
