const urlMappings = {};

function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;

    // Check if the URL is already shortened
    if (urlMappings[originalUrl]) {
        displayShortenedUrl(urlMappings[originalUrl]);
    } else {
        // Generate a random short code
        const shortCode = generateShortCode();
        const shortenedUrl = window.location.href + shortCode;

        // Store the mapping
        urlMappings[originalUrl] = shortenedUrl;

        displayShortenedUrl(shortenedUrl);
    }
}

function generateShortCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for (let i = 0; i < 6; i++) {
        shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortCode;
}

function displayShortenedUrl(shortenedUrl) {
    document.getElementById('shortenedUrl').innerHTML = `
        <p>Your short URL is: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a></p>
    `;
}
