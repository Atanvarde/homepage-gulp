"use strict";

// service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
//       Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function (err) {
//       registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// place your code below


// const name = "Ola"
// const city = "Poznaniu";
// console.log(`Mam na imię ${name} i mieszkam w ${city}`);
// const about = document.querySelector ('.about__paragraph--js');
// console.log(about);
// console.log(about.innerHTML);

// about.innerHTML = 'Pozdrawiam !!!';

// let yourAge, yourName;

// function hello (yourName, yourAge) {
//     console.log(`Witaj ${yourName} ! Masz ${yourAge} lat`);

// };

// hello("Karolina", "30");

// const welcome = (yourName, yourAge) => {
//     console.log(`Witaj ${yourName}! Masz ${yourAge} lat!`);
// }

// welcome('Asia',15);

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
// console.log(navigationSwitcher);

const navigationList = document.querySelector('.navigation__list--js');
// console.log(navigationList);

navigationSwitcher.addEventListener('click', (e) => {
  navigationList.classList.toggle('navigation__list--visible');
  if (navigationList.classList.contains('navigation__list--visible')) {
    navigationSwitcher.innerHTML = '&#935;';
  } else {
    navigationSwitcher.innerHTML = '&#926;';
  }

});


// console.log(`Hello world!`);

// for ( let i = 0; i < 100; i++) {
//   console.log(`${i+1} powtórzenie`);
// }

// let a = 1;
// console.log(a++);
// console.log(a);

// let b = 2;
// console.log(b--);
// console.log(b);

// let c = 1;
// console.log(++c);
// console.log(c);

// let d = 1;
// console.log(--d);
// console.log(d);

// const faces = ['😏', '😎', '😠', 'text'];

// for (let i = 0; i < faces.length; i++) {
//   console.log(`i: ${i}`);
//   console.log(`element ${i + 1}: ${faces[i]}`);
// }

// for (let face of faces) {
//   console.log(face);
// }

// let a = 10;

// while (a > 0) {
//   console.log(a--);
// }

// let n = 3;
// while (n < 9) {
//   console.log(n);
//   n = n + 3;
// }
// console.log(n);

// let b = 4;

// do {
// b = b+3;
// console.log(b);
// } while (b <9) ;

const person = {
  name: 'ola',
  surname: 'gardo'
}

// for (let property in person) {
//   console.log(`${property}: ${person[property]}`);
// }

console.log(person);

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

localStorage.setItem('person', jsonPerson);

const personStringify = localStorage.getItem('person');

const newPerson = JSON.parse(personStringify);

console.log(newPerson);

// localStorage.removeItem('person');

const focusInput = document.querySelector('.focus--js');

if (localStorage.getItem('focusInput')) {
  focusInput.value = localStorage.getItem('focusInput');
}


focusInput.addEventListener('keyup', (e) => {
  localStorage.setItem('focusInput', e.target.value);
})
