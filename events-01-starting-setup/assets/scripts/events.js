const button = document.querySelector('button');

const form = document.querySelector('form');

const div = document.querySelector('div');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

div.addEventListener('click', (event) => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('click', (event) => {
  console.log('CLICKED BUTTON');
  event.stopPropagation();
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', (event) => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', (event) => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  form.submit();
});
