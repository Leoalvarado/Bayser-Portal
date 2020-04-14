document.addEventListener('DOMContentLoaded',page_init);

var btn_hamburger = null;
var ul = null;
function page_init(e){
    btn_hamburger = document.getElementsByClassName("btn_hamburger")[0];
    ul = document.querySelector("header nav ul");
    btn_hamburger.addEventListener("click",btn_hamburger_onclic);
    console.log('ya entro')
}

function btn_hamburger_onclic(e){
    e.preventDefault();
    e.stopPropagation();
    ul.className = (ul.className=="hidden")? "" : "hidden";
}