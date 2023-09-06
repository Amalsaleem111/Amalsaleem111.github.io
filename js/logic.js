document.addEventListener('DOMContentLoaded', function () {
    const btnShorten = document.getElementById("shorten");
    const btnClear = document.getElementById("clear"); // New "Clear" button
    const inputLongURL = document.getElementById("longurl");
    const inputShortURL = document.getElementById("shorturl");
    const errorPopup = document.getElementById("errorPopup");

    btnShorten.addEventListener('click', async function () {
        const longURL = inputLongURL.value;

        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
            const data = await response.json();

            if (response.ok) {
                inputShortURL.value = data.result.short_link2;
                errorPopup.textContent = ''; // Clear any previous error message
            } else {
                // Handle the error and display a message
                errorPopup.textContent = "Error: Unable to shorten URL.";
            }
        } catch (error) {
            // Handle network or other errors
            errorPopup.textContent = "Error: Network error occurred.";
        }
    });

    // Add a click event listener to the "Clear" button
    btnClear.addEventListener('click', function () {
        inputLongURL.value = '';
        inputShortURL.value = '';
        errorPopup.textContent = ''; // Clear any error messages
    });
});
