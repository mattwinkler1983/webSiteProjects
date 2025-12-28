const button11 = document.querySelector("#superman");
const paragraph = document.querySelector("p");

let isSuperman = true; 


window.onload = function(){
        button11.textContent = "Superman";
        paragraph.textContent = "Superman is great!";
        button11.style.backgroundColor = "yellow";
        button11.style.color = "red";
        button11.style.fontWeight = "bold";
        document.body.style.backgroundColor = "skyblue";
        isSuperman = true;
}
button11.addEventListener("click", function () { 
    if (isSuperman) {
        button11.textContent = "Batman";
        paragraph.textContent = "Batman is great!";
        button11.style.backgroundColor = "black";
        button11.style.color = "yellow";
        button11.style.fontWeight = "bold";
        document.body.style.backgroundColor = "grey"
        isSuperman = false;
    } else { 
        button11.textContent = "Superman";
        paragraph.textContent = "Superman is great!";
        button11.style.backgroundColor = "yellow";
        button11.style.color = "red";
        button11.style.fontWeight = "bold";
        document.body.style.backgroundColor = "skyblue";
        isSuperman = true;
    }
});
    