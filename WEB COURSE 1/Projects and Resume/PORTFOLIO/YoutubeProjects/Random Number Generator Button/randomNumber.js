const clicked = document.querySelector('.button1');
const output = document.getElementById('output');
clicked.addEventListener('click' , function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    output.textContent = randomNumber; }
);