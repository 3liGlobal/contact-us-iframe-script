// Function to set up the iframe based on the current language
function setupIframe() {
    const language = document.documentElement.lang; // Get the current language from the HTML tag
    const divElement = document.getElementById("swell-customer-identification");
    const email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

    let iframeId, defaultUrl;

    if (language === 'ar') {
        // Arabic version
        iframeId = 'iframeContactUsOOKAUAEArabic';
        defaultUrl = 'https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE';
    } else {
        // English version
        iframeId = 'iframeContactUsOOKAUAE';
        defaultUrl = 'https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE';
    }

    console.log("Setting up iframe for " + iframeId + "...");
    
    const iframe = document.getElementById(iframeId);
    iframe.src = defaultUrl;

    var checkEmailInterval = setInterval(function () {
        if (!iframe) {
            console.log("Iframe not found yet...");
        } else {
            if (email) { 
                // If email is present and iframe exists
                console.log("Email found: " + email);
                iframe.contentWindow.postMessage(email);
                iframe.src = `${defaultUrl}?email=${encodeURIComponent(email)}`;
                clearInterval(checkEmailInterval); // Stop checking once the email is found and iframe is ready
            } else {
                console.log("No email found, using default URL.");
            }
        }
    }, 500); // Check every half second
}

// Initial setup
document.addEventListener("DOMContentLoaded", setupIframe);

// Monitor for changes in the language
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'lang') {
            console.log("Language changed, reloading iframe...");
            setupIframe(); // Reload the iframe on language change
        }
    });
});

// Start observing changes to the <html> element's attributes
observer.observe(document.documentElement, { attributes: true });
