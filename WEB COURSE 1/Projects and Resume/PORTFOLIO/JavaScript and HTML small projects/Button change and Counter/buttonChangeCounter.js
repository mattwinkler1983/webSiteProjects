let count = 0;
const myButton = document.querySelector("#counterButton");
const displayClick = document.querySelector("#clickCount");
const resetButton = document.querySelector("#resetButton1");

myButton.addEventListener("click", function(){
 count++;
 displayClick.innerText = count; 
 displayClick.style.color = "red";
 displayClick.style.fontWeight = "bold";

})


resetButton.addEventListener("click", function() {
    count = 0;
    displayClick.innerText = count;
})