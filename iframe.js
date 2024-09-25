document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Started...");
    const iframe = document.getElementById('iframeContactUsOOKAUAE');
    iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE`;
    var email;
    var checkEmailInterval = setInterval(function () {
    var divElement = document.getElementById("swell-customer-identification");
     console.log(divElement);
     email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;
     
        console.log("Checking iframe and email...");

        if (!iframe) {
            console.log("Iframe not found yet...");
        } else {
            if (email) { 
                // If email is present and iframe exists
                console.log("Email found: " + email);
                 iframe.contentWindow.postMessage(email);
                iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`
                clearInterval(checkEmailInterval); // Stop checking once the email is found and iframe is ready
            } else {
                console.log("No email found, using default URL.");
                // iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE`;
                //clearInterval(checkEmailInterval); // Stop checking after setting default iframe src
            }
        }
    }, 500); // Check every half second
   
});
