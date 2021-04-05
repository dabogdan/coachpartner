let face = document.querySelectorAll('.team__social-fb');
let tw = document.querySelectorAll('.team__social-tw');
// let linkedin = document.getElementsByClassName('team__social-in');
// let unba = document.getElementsByClassName('team__social-unba');
// let twContacts = document.querySelector('.contacts__social-tw-icon');
// let telegaContacts = document.querySelector('.contacts__social-tele-icon');
let mailContacts = document.querySelector('.contacts__social-mail');
let menuBox = document.querySelector('.menu__box');
let menuToggle = document.querySelector('#menu__toggle');

const orderBtn = document.querySelectorAll('.orderBtn');
const overlay = document.getElementById('overlay');
const overlayCloseBtn = document.querySelector('.close-button');

const orderPackage = document.querySelectorAll('.order-package');
const overlayPackage = document.getElementById('overlay-package');
const overlayPackCloseBtn = document.querySelector('.close-button-packages');

const packagesList = document.querySelectorAll('.package-list')
const packages = document.getElementById('packages');

//
// twContacts.addEventListener('mouseover', () => {
//     twContacts.setAttribute('src', 'img/Twitter-orange.svg');
// })
//
// twContacts.addEventListener('mouseout', () => {
//     twContacts.setAttribute('src', 'img/Twitter-white.svg');
// })
//
// telegaContacts.addEventListener('mouseover', () => {
//     telegaContacts.setAttribute('src', 'img/Telegram-orange.svg');
// })
//
// telegaContacts.addEventListener('mouseout', () => {
//     telegaContacts.setAttribute('src', 'img/Telegram-white.svg');
// })

mailContacts.addEventListener('mouseover', () => {
    mailContacts.setAttribute('src', 'img/mail-orange.svg');
})

mailContacts.addEventListener('mouseout', () => {
    mailContacts.setAttribute('src', 'img/mail.svg');
})

menuBox.addEventListener('click', () => {
    menuToggle.checked = '';
})

// for (let i = 0; i < face.length; i++) {
//     face[i].addEventListener('mouseover', () => {
//         face[i].setAttribute('src', 'img/Facebook-orange.svg')
//     })
//     face[i].addEventListener('mouseout', () => {
//         face[i].setAttribute('src', 'img/Facebook.svg')
//     })
// }
//
// for (let i = 0; i < tw.length; i++) {
//     tw[i].addEventListener('mouseover', () => {
//         tw[i].setAttribute('src', 'img/Twitter-orange.svg')
//     })
//     tw[i].addEventListener('mouseout', () => {
//         tw[i].setAttribute('src', 'img/Twitter.svg')
//     })
// }
//
// for (let i = 0; i < linkedin.length; i++) {
//     linkedin[i].addEventListener('mouseover', () => {
//         linkedin[i].setAttribute('src', 'img/Linkedin-orange.svg')
//     })
//     linkedin[i].addEventListener('mouseout', () => {
//         linkedin[i].setAttribute('src', 'img/Linkedin.svg')
//     })
// }
//
// for (let i = 0; i < unba.length; i++) {
//     unba[i].addEventListener('mouseover', () => {
//         unba[i].setAttribute('src', 'img/erau-orange.svg')
//     })
//     unba[i].addEventListener('mouseout', () => {
//         unba[i].setAttribute('src', 'img/erau.svg')
//     })
// }

//order button overlay appear
orderBtn.forEach((e) => {
    e.addEventListener('click', () => {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'
    })
})

overlayCloseBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'
})

//same for overlay with packages
orderPackage.forEach((e, i) => {
    e.addEventListener('click', () => {
        overlayPackage.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log(i, packages.options[i]);
        packages.options.forEach((el) => {
            el.removeAttribute('selected');
        })

        packages.options[i].setAttribute('selected', '');

    })
})

overlayPackCloseBtn.addEventListener('click', () => {
    overlayPackage.style.display = 'none';
    document.body.style.overflow = 'auto'
})