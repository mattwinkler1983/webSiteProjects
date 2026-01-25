const button = document.querySelector("#generateBtn");
const output = document.querySelector("#output");

button.addEventListener("click", function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = rgbColor;
    output.testConect = "Background Color: " + rgbColor;
});