document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    console.log("Script Started...");
     var divElement = document.getElementById("swell-customer-identification");
     console.log(divElement);
     var email = divElement ? divElement.getAttribute("data-email") : null;
     const iframe = document.getElementById('iframeContactUsOOKAUAE');
     var checkEmailInterval = setInterval(function () {
       

        console.log("Checking iframe and email...");

        if (!iframe) {
            console.log("Iframe not found yet...");
        } else {
            if (email) { 
                // If email is present and iframe exists
                console.log("Email found: " + email);
                iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
                clearInterval(checkEmailInterval); // Stop checking once the email is found and iframe is ready
            } else {
                console.log("No email found, using default URL.");
                iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE`;
                clearInterval(checkEmailInterval); // Stop checking after setting default iframe src
            }
        }
    }, 500); // Check every half second
    iframe.contentWindow.postMessage(email);
});
