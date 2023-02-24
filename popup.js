const logLinkStyle= document.querySelector('.log-link-style');
const loginFrame = document.querySelector('.login-frame');
const popupClose = document.querySelector('.popup-close');

console.log(logLinkStyle);
console.log(loginFrame);

logLinkStyle.addEventListener('click', showPopUp);
popupClose.addEventListener('click', close);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginFrame.classList.toggle('popup-visible')
};

function close() {
    loginFrame.classList.remove('popup-visible')
}

loginFrame.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-visible')) {
        close();
    }
})
