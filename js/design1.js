var banner = document.getElementById("banner");
var up = document.getElementById("up");
var down = document.getElementById("down");

let y = 0;
up.onclick = function(){
    if(y > "-900"){
    y = y - 310;
    banner.style.top = y + "px";
}
}
down.onclick = function(){
    if(y < "0"){
    y = y + 310;
    banner.style.top = y + "px";
}
}
