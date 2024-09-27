// Function to reload the page and switch to Arabic
function switchToEnglish() {
    // Reload the page
    window.location.reload();
}

// Attach click event listener to the language switcher button
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcherButton = document.querySelector('.language-switcher_button');

    if (languageSwitcherButton) {
        languageSwitcherButton.addEventListener('click', function () {
            switchToEnglish();
        });
    }
});

// Initialize Arabic iframe script
function initializeEnglishIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAEArabic');
    if (!iframe) return;

    console.log("Arabic Script Loaded");
    iframe.src = 'https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE';
    let email;

    const checkEmailInterval = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

        if (email) {
            console.log("Email found: " + email);
            iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval);
        } else {
            console.log("No email found, using default URL.");
        }
    }, 500);
}

// Run on initial load
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes('/en/content/contact-us')) {
        initializeArabicIframe();
    } else if (document.getElementById('iframeContactUsOOKAUAEArabic')) {
        initializeArabicIframe();
    }
});
