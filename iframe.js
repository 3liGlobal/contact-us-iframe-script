appendLoader();
console.log("This is English Script");
function appendLoader() {
    const existingLoader = document.getElementById('iframe-loader');
    if (existingLoader) return; // If loader already exists, don't create another one

    const loaderDiv = document.createElement('div');
    loaderDiv.id = 'iframe-loader';
    loaderDiv.style.display = 'none'; // Hidden by default
    loaderDiv.style.textAlign = 'center';
    loaderDiv.style.position = 'fixed';
    loaderDiv.style.top = '50%';
    loaderDiv.style.left = '50%';
    loaderDiv.style.transform = 'translate(-50%, -50%)';
    loaderDiv.style.zIndex = '9999'; // Ensure it appears above other elements

    // Set the loader's inner HTML to include the spinner image
    loaderDiv.innerHTML = '<img src="https://3liglobal.github.io/contact-us-iframe-script/spinner.gif" alt="Loading...">';

    // Append the loader to the body or any other container
    document.body.appendChild(loaderDiv);
}

function showLoader() {
    const loader = document.getElementById('iframe-loader');
    if (loader) {
        loader.style.display = 'block'; // Show the loader
    }
}

function hideLoader() {
    const loader = document.getElementById('iframe-loader');
    if (loader) {
        loader.style.display = 'none'; // Hide the loader
    }
}

function initializeEnglishIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAE');
    if (!iframe) return;

    console.log("English frame Initiliazzed...");
    showLoader();
    iframe.src = 'https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE';
    let email;
    iframe.onload = () => {
        hideLoader();
        console.log("Iframe has loaded.");
    };
    const checkEmailInterval = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

        if (email) {
            console.log("Email found: " + email);
            // iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval);
        } else {
            // console.log("No email found English, using default URL.");
        }
    }, 500);
}
function initializeArabicIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAEArabic');
    console.log(iframe);
    if (!iframe) return;
    showLoader();

    console.log("Arabic frame Initiliazzed...");
    iframe.src = 'https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE';
    let email;
    iframe.onload = () => {
        hideLoader();
        console.log("Iframe has loaded.");
    };
    const checkEmailInterval2 = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

        if (email) {
            console.log("Email found: " + email);
            //iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval2);
        } else {
            console.log("No email found arabic, using default URL.");
        }
    }, 500);
}

// Run on initial load
var language = document.querySelector('.language-switcher_button').children[0].innerHTML;
console.log(language);
if (language == 'English') {
    document.addEventListener("DOMContentLoaded", initializeArabicIframe());
}
else {
    document.addEventListener("DOMContentLoaded", initializeEnglishIframe());
}

document.addEventListener("DOMContentLoaded", function () {
    var targetElement = document.querySelector('.language-switcher_button');
    targetElement.addEventListener("click", function () {
        var language = document.querySelector('.language-switcher_button').children[0].innerHTML;
        console.log("Clicked " + language)
        setTimeout((language) => {
            console.log("Run")
            if (language != 'English') {
                initializeArabicIframe();
            }
            else {
                initializeEnglishIframe();
            }
        }, 5000);
    });
});




//MutationObserver to detect changes when the button is clicked
//MutationObserver to detect changes when the button is clicked
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            const newLanguageButton = document.querySelector('.language-switcher_button');
            if (newLanguageButton) {
                var language = document.querySelector('.language-switcher_button').children[0].innerHTML;
                if (language == 'English') {
                    newLanguageButton.addEventListener('click', initializeEnglishIframe);
                }
                //window.location.reload();
                else {
                    newLanguageButton.addEventListener('click', initializeArabicIframe);
                }
            }
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
