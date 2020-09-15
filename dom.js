const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey, I\'m Red!';

const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = 'I\'m a blue h3!';

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const divHeading = document.createElement('h1');
divHeading.textContent = 'I\'m a div';

const divParagraph = document.createElement('p');
divParagraph.textContent = 'Me too';

div.appendChild(divHeading);
div.appendChild(divParagraph);

container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(div);