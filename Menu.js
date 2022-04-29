function newgameoption() {
    const newgameselection = document.querySelectorAll("h3, .newgameoption, .continueoption, .returnmenu");
    for(let i = 0; i < newgameselection.length; i++) {
       newgameselection[i].style.display = "block";
    }

    let menulist = document.getElementById("menu_list");
    menulist.setAttribute('class', 'disable');
}

function newgameoption2() {

    const newgameselection2 = document.querySelectorAll("h3, .newgameoption2, .continueoption2, .returnmenu");
    for(let i = 0; i < newgameselection2.length; i++) {
       newgameselection2[i].style.display = "block";
    }

    let menulist = document.getElementById("menu_list");
    menulist.setAttribute('class', 'disable');
}

function aboutlevels() {

    const aboutlevels = document.querySelectorAll("h4, .aboutlevels, .returnmenu");
    for(let i = 0; i < aboutlevels.length; i++) {
       aboutlevels[i].style.display = "block";
    }

    let menulist = document.getElementById("menu_list");
    menulist.setAttribute('class', 'disable');
}

function options() {
    const elements = document.querySelectorAll("h5, .screenbrightness, .musiconoff, .returnmenu");
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }

    document.getElementById("menu_list").setAttribute('class', 'disable');
    document.getElementById("musiconoption").style.display = "block";
    document.getElementById("musicoffoption").style.display = "block";
    document.getElementById("screenslider").style.display = "block";
    document.querySelector('label[for = "musiconoption"]').style.display = "block";
    document.querySelector('label[for = "musicoffoption"]').style.display = "block";
}

function returnmenu() {
    const htags = document.querySelectorAll("h3, h4, h5");
    for(let i = 0; i < htags.length; i++) {
        htags[i].style.display = "none";
    }

    const newgame = document.querySelectorAll(".newgameoption, .continueoption, .newgameoption2, .continueoption2");
    for(let i = 0; i < newgame.length; i++) {
       newgame[i].style.display = "none";
    }

    const submenu = document.querySelectorAll(".aboutlevels, .screenbrightness, .musiconoff, .returnmenu");
    for(let i = 0; i < submenu.length; i++) {
        submenu[i].style.display = "none";
    }

    document.getElementById("musiconoption").style.display = "none";
    document.getElementById("musicoffoption").style.display = "none";
    document.getElementById("screenslider").style.display = "none";
    document.getElementById("menu_list").setAttribute('class', 'enable');
    document.querySelector('label[for = "musiconoption"]').style.display = "none";
    document.querySelector('label[for = "musicoffoption"]').style.display = "none";
}

/* Function to turn music on */
const on = document.getElementById("musiconoption");
const audioon = document.getElementById("audio");
function musicon() {
    audioon.play();
}
on.addEventListener('click', musicon);

/* Function to pause music */
const off = document.getElementById("musicoffoption");
const audiooff = document.getElementById("audio");
function musicoff() {
    audiooff.pause();
}
off.addEventListener('click', musicoff);

/* Function to adjust the screen slider */
const background = document.querySelector(".background2");
const rangeslide = document.getElementById("screenslider");
function brightnessLevel() {
    background.style.filter = "brightness(" + rangeslide.value + "%)";
}
rangeslide.addEventListener('click', brightnessLevel);

/* Function to blur sub menu to 15px */
const menu = document.querySelector(".background");
const submenu = document.getElementById("menu_list");
function blursubmenu() {
    menu.classList.remove("returnblur");
    menu.offsetWidth;
    menu.classList.add("subblur");
}
submenu.addEventListener('click', blursubmenu);

/* Function to blur back to 0px */
const backgnd = document.querySelector(".background");
const retn = document.querySelector(".returnmenu");
function blurmenu() {
    backgnd.classList.remove("returnblur");
    backgnd.offsetWidth;
    backgnd.classList.add("returnblur");
}
retn.addEventListener('click', blurmenu);