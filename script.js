var btnTranslate = document.querySelector("#btn-translate")

function clickEventHandler(){
    btnTranslate.innerHTML = "Clicked"
    btnTranslate.style.color = "red"
    
}

btnTranslate.addEventListener("click",  clickEventHandler)
