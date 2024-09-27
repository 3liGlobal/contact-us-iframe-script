function setupIframe(iframeId, defaultUrl) {
    console.log("Script Started for " + iframeId + "...");
    const iframe = document.getElementById(iframeId);
    iframe.src = defaultUrl;
    var email;
    var checkEmailInterval = setInterval(function () {
        var divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

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

// First iframe script
document.addEventListener("DOMContentLoaded", function () {
    setupIframe('iframeContactUsOOKAUAE', 'https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE');
});

// Second iframe script
document.addEventListener("DOMContentLoaded", function () {
    setupIframe('iframeContactUsOOKAUAEArabic', 'https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE');
});

