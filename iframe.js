function initializeEnglishIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAE');
    if (!iframe) return;

    console.log("Script Started...");
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
document.addEventListener("DOMContentLoaded", initializeEnglishIframe);

// MutationObserver to detect changes when the button is clicked
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            const newLanguageButton = document.querySelector('.language-switcher_button');
            if (newLanguageButton) {
                newLanguageButton.addEventListener('click', initializeEnglishIframe);
            }
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
