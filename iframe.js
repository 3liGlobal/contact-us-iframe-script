 document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Started...");
    
    var checkEmailInterval = setInterval(function () {
        var divElement = document.getElementById("swell-customer-identification");
        var email = divElement ? divElement.getAttribute("data-email") : null;
        const iframe = document.getElementById('iframeContactUsOOKAUAE');
        
        if (!iframe) {
            console.log("Iframe not found yet...");
        } else {
            console.log(divElement);
            if (email) { // If email is not null or empty and iframe exists
                console.log(email);
                iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
                clearInterval(checkEmailInterval); // Stop checking once the email is found and iframe is ready
            }else{
                 iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE`;
            }
        }
    }, 500); // Check every half second
});
