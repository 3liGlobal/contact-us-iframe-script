
// Function to reload the page and switch to Arabic
function switchToArabic() {
    // Reload the page
    window.location.reload();
}

// Attach click event listener to the language switcher button
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcherButton = document.querySelector('.language-switcher_button');

    if (languageSwitcherButton) {
        languageSwitcherButton.addEventListener('click', function () {
            switchToArabic();
        });
    }
});

// Initialize Arabic iframe script
function initializeArabicIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAE');
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
    // Check the document's language attribute
    const lang = document.documentElement.lang;

    if (lang === "ar") {
        initializeArabicIframe();
    } else {
        initializeEnglishIframe();
    }
});

