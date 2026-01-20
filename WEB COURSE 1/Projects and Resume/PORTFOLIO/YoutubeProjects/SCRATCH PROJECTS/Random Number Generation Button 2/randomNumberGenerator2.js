const pushed = document.querySelector('#button1');
const show = document.getElementById('number');
pushed.addEventListener('click', function () { const randomNumber = Math.floor(Math.random() * 100) + 1; 
show.textContent = randomNumber;
} );