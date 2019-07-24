const person = {
    name: 'ola',
    surname: 'gardo'
  }

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
};


focusInput.addEventListener('keyup', (e) => {
  localStorage.setItem('focusInput', e.target.value);
});

// localStorage.removeItem('focusInput');