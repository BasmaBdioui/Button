const btnElm = document.querySelector(".btn");

btnElm.addEventListener("mouseover",(event) =>{

    const y = event.pageY - btnElm.offsetTop;
    const x = event.pageX - btnElm.offsetLeft;

    btnElm.style.setProprety("--posX",x + "px");
    btnElm.style.setProprety("--posY",y + "px");

});
