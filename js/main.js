


var x = 16;
function decreaseFontSize(){

    x--;
    document.querySelector("div").style.fontSize = x + 'px';
    

}
function increaseFontSize(){

    x++;
    document.querySelector("div").style.fontSize = x + 'px';

}
document.querySelector(".plus").onclick = increaseFontSize;
document.querySelector(".minus").onclick = decreaseFontSize;
