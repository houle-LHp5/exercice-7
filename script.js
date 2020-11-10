const pTextElement = document.getElementById("pText");
function upSize(){
    
    pTextElement.style.fontSize= "2rem";
}
pTextElement.onwheel = upSize;
//document.getElementById("pText").onclick = upSize;
//document.getElementById("pText").addEventListener("click",upSize);
//window.addEventListener("wheel",upSize);/