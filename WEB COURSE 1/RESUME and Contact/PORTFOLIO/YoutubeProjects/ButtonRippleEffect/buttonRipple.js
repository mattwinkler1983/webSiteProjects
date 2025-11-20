const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px") 
    btnEl.style.setProperty("--yPos", y+ "px")
});

// note:  A mistake I made was to have     btnEl.style.setProperty("--yPos", y+ "py") and it was supposed to be "px"