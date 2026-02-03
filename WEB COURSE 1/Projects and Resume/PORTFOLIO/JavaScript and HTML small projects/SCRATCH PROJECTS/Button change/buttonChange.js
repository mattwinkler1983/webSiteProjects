let newText = document.querySelector("#button1");
let newText1 = document.querySelector(".newTextStuff");
newText.addEventListener("click", function() { 
    if (newText.textContent === "This is new content"){
        newText.textContent = "This is text.";
        newText1.textContent = "Hello sir. I am writing this message."; 
    } else {
        newText.textContent = "This is new content";
        newText1.textContent = "Superman is awesome";
    }
})