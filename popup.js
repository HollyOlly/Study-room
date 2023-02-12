let logLinkStyle= document.querySelector('.log-link-style');
let loginFrame = document.querySelector('.login-frame');

console.log(logLinkStyle);
console.log(loginFrame);

logLinkStyle.addEventListener('click', showPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginFrame.classList.toggle('popup-visible')
};

