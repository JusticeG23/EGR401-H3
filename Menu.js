function newgameoption() {
    document.querySelector("h3").style.display = "block";
    document.getElementById("newgameoption").style.display = "block";
    document.getElementById("continueoption").style.display = "block";
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
}

function newgameoption2() {
    document.querySelector("h3").style.display = "block";
    document.getElementById("newgameoption2").style.display = "block";
    document.getElementById("continueoption2").style.display = "block";
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
}

function aboutlevels() {
    document.querySelector("h4").style.display ="block";
    document.getElementById("about").style.display = "block";
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
}

function options() {
    document.querySelector("h5").style.display ="block";
    document.getElementById("screenbrightness").style.display = "block";
    document.getElementById("musiconoff").style.display = "block";
    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("return").style.display = "block";
    document.getElementById("musiconoption").style.display = "block";
    document.getElementById("musicoffoption").style.display = "block";
    document.getElementById("screenslider").style.display = "block";
    document.querySelector('label[for = "musiconoption"]').style.display = "block";
    document.querySelector('label[for = "musicoffoption"]').style.display = "block";
}

function returnmenu() {
    document.querySelector("h3").style.display = "none";
    document.querySelector("h4").style.display ="none";
    document.querySelector("h5").style.display = "none";
    document.getElementById("newgameoption").style.display = "none";
    document.getElementById("continueoption").style.display = "none";
    document.getElementById("newgameoption2").style.display = "none";
    document.getElementById("continueoption2").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("screenbrightness").style.display = "none";
    document.getElementById("musiconoff").style.display = "none";
    document.getElementById("musiconoption").style.display = "none";
    document.getElementById("musicoffoption").style.display = "none";
    document.getElementById("screenslider").style.display = "none";
    document.getElementById("return").style.display = "none";
    document.getElementById("menu_list").setAttribute('class', 'enable');
    document.getElementById("menu").setAttribute('class', null);
    document.getElementById("menu").setAttribute('class', 'noblur');
    document.querySelector('label[for = "musiconoption"]').style.display = "none";
    document.querySelector('label[for = "musicoffoption"]').style.display = "none";
}

const on = document.getElementById("musiconoption");
const audioon = document.getElementById("audio");
function musicon() {
    audioon.play();
}
on.addEventListener('click', musicon);

const off = document.getElementById("musicoffoption");
const audiooff = document.getElementById("audio");
function musicoff() {
    audiooff.pause();
}
off.addEventListener('click', musicoff);

const background = document.querySelector(".background2");
const rangeslide = document.getElementById("screenslider");
function brightnessLevel() {
    background.style.filter = "brightness(" + rangeslide.value + "%)";
}
rangeslide.addEventListener('click', brightnessLevel);

const menu = document.querySelector(".background");
const submenu = document.getElementById("menu_list");
function blursubmenu() {
    menu.classList.remove("returnblur");
    menu.offsetWidth;
    menu.classList.add("subblur");
}
submenu.addEventListener('click', blursubmenu);

const backgnd = document.querySelector(".background");
const retn = document.getElementById("return");
function blurmenu() {
    backgnd.classList.remove("returnblur");
    backgnd.offsetWidth;
    backgnd.classList.add("returnblur");
}
retn.addEventListener('click', blurmenu);
