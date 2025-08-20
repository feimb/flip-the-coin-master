const img = document.getElementById("img-coin");
const sideName = document.getElementById("side-name");
const button = document.querySelector("button");

function flipCoin() {
    const result = Math.random() > 0.5 ? "heads": "tails";
    return result
}
function chageImgSideName(){
    const result = flipCoin();
    sideName.textContent = result;
    img.setAttribute("alt", result);
    img.setAttribute("src", `./resources/${result}.svg`);   
}
button.addEventListener("click", chageImgSideName)
window.addEventListener("load" ,chageImgSideName)