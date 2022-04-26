function newgameoption() {
    document.querySelector("h3").style.display = "block";
    document.getElementById("newgameoption").style.display = "block";
    document.getElementById("continueoption").style.display = "block";
    document.getElementById("menu").setAttribute('class', 'blur');
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
}

function leveldifficulty() {
    document.querySelector("h3").style.display ="none";
    document.querySelector("h4").style.display ="block";
    document.getElementById("difficulty_item1").style.display = "block";
    document.getElementById("difficulty_item2").style.display = "block";
    document.getElementById("difficulty_item3").style.display = "block";
    document.getElementById("newgameoption").style.display = "none";
    document.getElementById("continueoption").style.display = "none";
    document.getElementById("return").style.display = "block";
}

function aboutlevels() {
    document.querySelector("h5").style.display ="block";
    document.getElementById("about").style.display = "block";
    document.getElementById("menu").setAttribute('class', 'blur');
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
}

function options() {
    document.querySelector("h6").style.display ="block";
    document.getElementById("screenbrightness").style.display = "block";
    document.getElementById("musiconoff").style.display = "block";
    document.getElementById("menu").setAttribute('class', 'blur');
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
    document.getElementById("musiconoption").style.display = "block";
    document.getElementById("musicoffoption").style.display = "block";
    document.getElementById("screenslider").style.display = "block";
    document.querySelector('label[for = "musiconoption"]').style.display = "block";
    document.querySelector('label[for = "musicoffoption"]').style.display = "block";
}

const background = document.getElementById("background");
const rangeslide = document.getElementById("screenslider");
function brightnessLevel() {
    background.style.filter = "brightness(" + rangeslide.value + "%)";
}
rangeslide.addEventListener('click', brightnessLevel);

function returnmenu() {
    document.querySelector("h3, h4").style.display = "none";
    document.querySelector("h4").style.display ="none";
    document.querySelector("h5").style.display = "none";
    document.querySelector("h6").style.display = "none";
    document.getElementById("newgameoption").style.display = "none";
    document.getElementById("continueoption").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("screenbrightness").style.display = "none";
    document.getElementById("musiconoff").style.display = "none";
    document.getElementById("musiconoption").style.display = "none";
    document.getElementById("musicoffoption").style.display = "none";
    document.getElementById("screenslider").style.display = "none";
    document.getElementById("difficulty_item1").style.display = "none";
    document.getElementById("difficulty_item2").style.display = "none";
    document.getElementById("difficulty_item3").style.display = "none";
    document.getElementById("return").style.display = "none";
    document.getElementById("menu_list").setAttribute('class', 'enable');
    document.getElementById("menu").setAttribute('class', null);
    document.querySelector('label[for = "musiconoption"]').style.display = "none";
    document.querySelector('label[for = "musicoffoption"]').style.display = "none";
}

const move = document.getElementById("menu");
const ret = document.getElementById("return");
function blurmenu() {
    move.style.animation = "fade 0.3s linear";
}
ret.addEventListener('click', blurmenu);