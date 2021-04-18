const mailContacts = document.querySelector('.contacts__social-mail');
const menuBox = document.querySelector('.menu__box');
const menuToggle = document.querySelector('#menu__toggle');

const orderBtn = document.querySelectorAll('.orderBtn');
const overlay = document.getElementById('overlay');
const overlayCloseBtn = document.querySelector('.close-button');

const orderPackage = document.querySelectorAll('.order-package');
const overlayPackage = document.getElementById('overlay-package');
const overlayPackCloseBtn = document.querySelector('.close-button-packages');

const packages = document.getElementById('packages');

mailContacts.addEventListener('mouseover', () => {
    mailContacts.setAttribute('src', 'img/mail-orange.svg');
})

mailContacts.addEventListener('mouseout', () => {
    mailContacts.setAttribute('src', 'img/mail.svg');
})

menuBox.addEventListener('click', () => {
    menuToggle.checked = '';
})

//order button overlay appear
orderBtn.forEach((e) => {
    e.addEventListener('click', () => {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'
    })
})

const closingOverlayArray = [
    overlay,
    overlayPackage,
    overlayPackCloseBtn,
    overlayCloseBtn,
]

const closeOverlay = () => {
    overlay.style.display = 'none';
    overlayPackage.style.display = 'none';
    document.body.style.overflow = 'auto'
}

//same for overlay with packages
orderPackage.forEach((e, i) => {
    e.addEventListener('click', () => {
        overlayPackage.style.display = 'block';
        document.body.style.overflow = 'hidden';
        packages.options.forEach((el) => {
            el.removeAttribute('selected');
        })
        packages.options[i].setAttribute('selected', '');
    })
})

closingOverlayArray.forEach((e) => {
    e.addEventListener('click', (event) => {
        if (event.target === e || event.target.className === 'overlay-content'){
            closeOverlay();
        }
    });
})