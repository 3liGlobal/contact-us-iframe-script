console.log("This is English Script");


function initializeEnglishIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAE');
    if (!iframe) return;

    console.log("English frame Initiliazzed...");
    iframe.src = 'https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE';
    let email;

    const checkEmailInterval = setInterval(function () {
        const divElement = document.getElementById("swell-customer-identification");
        email = divElement.hasAttribute("data-email") ? divElement.getAttribute("data-email") : null;

        if (email) {
            console.log("Email found: " + email);
            // iframe.contentWindow.postMessage(email, "*");
            iframe.src = `https://3liglobal.github.io/Contact_Us-Form_OOKA_UAE?email=${encodeURIComponent(email)}`;
            clearInterval(checkEmailInterval);
        } else {
            console.log("No email found English, using default URL.");
        }
    }, 500);
}
function initializeArabicIframe() {
    const iframe = document.getElementById('iframeContactUsOOKAUAEArabic');
    if (!iframe) return;

    console.log("Arabic frame Initiliazzed...");
    iframe.src = 'https://3liglobal.github.io/Arabic_Contact_Us-Form_OOKA_UAE';
    let email;

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
        
        console.log("Clicked "+ language)
        if (language != 'English') {
            initializeArabicIframe();
        }
        else {
            initializeEnglishIframe();
        }
    });
});




// MutationObserver to detect changes when the button is clicked
// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         if (mutation.type === "childList") {
//             const newLanguageButton = document.querySelector('.language-switcher_button');
//             if (newLanguageButton) {
//                 var language = document.querySelector('.language-switcher_button').children[0].innerHTML;
//                 if (language == 'English') {
//                     newLanguageButton.addEventListener('click', initializeEnglishIframe);
//                 }
//                 //window.location.reload();
//                 else {
//                     newLanguageButton.addEventListener('click', initializeArabicIframe);
//                 }
//             }
//         }
//     });
// });

// observer.observe(document.body, { childList: true, subtree: true });
