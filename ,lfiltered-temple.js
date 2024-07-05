const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253000,
        imageUrl: "https://example.com/salt-lake-temple.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "1919-11-27",
        area: 10750,
        imageUrl: "https://example.com/laie-hawaii-temple.jpg"
    },
    // Add three or more additional temple objects
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 40000,
        imageUrl: "https://example.com/rome-italy-temple.jpg"
    },
    {
        name: "Provo City Center Temple",
        location: "Provo, Utah, USA",
        dedicated: "2016-03-20",
        area: 85000,
        imageUrl: "https://example.com/provo-city-center-temple.jpg"
    },
    {
        name: "Cedar City Utah Temple",
        location: "Cedar City, Utah, USA",
        dedicated: "2017-12-10",
        area: 42000,
        imageUrl: "https://example.com/cedar-city-utah-temple.jpg"
    }
];

const templesSection = document.getElementById('temples');
const currentYearElement = document.getElementById('current-year');
const lastModifiedElement = document.getElementById('last-modified');

function createTempleCard(temple) {
    const card = document.createElement('figure');

    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        <figcaption>
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
    `;
    return card;
}

function displayTemples(filteredTemples) {
    templesSection.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        templesSection.appendChild(card);
    });
}

function filterTemples(condition) {
    let filteredTemples = temples;
    switch (condition) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

document.getElementById('all').addEventListener('click', () => filterTemples('all'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

// Display all temples by default
filterTemples('all');

// Set current year and last modified date
currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;
