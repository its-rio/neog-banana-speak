var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector("#output")

outputDiv.innerText = "Hello hiiii"

function clickEventHandler(){
    outputDiv.innerText = "adkjsnkjand" + txtInput.value
    
}

btnTranslate.addEventListener("click",  clickEventHandler)
