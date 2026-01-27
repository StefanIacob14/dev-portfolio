"use strict";

// Import images / icons from "src" folder
const icons = import.meta.glob(`/src/assets/icons/*.{svg, png, jpg, jpeg}`, {
  eager: true,
  import: `default`,
});

// VARIABLES & FUNCTIONS
// Variables
const menuMobile = document.getElementById(`mobile--menu`);
const menuBtn = document.getElementById(`menu--button`);
const menuLines = document.getElementById(`menu--icon`);
const menuCloseIcon = document.getElementById(`menu--close--icon`);
const menuCloseBtn = document.getElementById(`menu--close`);

const githubBtn = document.getElementById(`github--btn`);
const linkedinBtn = document.getElementById(`linkedin--btn`);

const menuArrowsRight = document.querySelectorAll(`.menu-arrow-right`);

const projectsBtn = document.getElementById(`projects--button`);

// Functions

// PORTFOLIO SITE
// Menu Smartphone button
menuLines.src = icons[`/src/assets/icons/menu-lines.svg`];

menuBtn.addEventListener(`click`, function () {
  menuMobile.classList.add(`scale-x-100`);
});

// Menu Close Button
menuCloseIcon.src = icons[`/src/assets/icons/close-fill.svg`];

menuCloseBtn.addEventListener(`click`, function () {
  menuMobile.classList.remove(`scale-x-100`);
});

// Menu Social Media Buttons
githubBtn.src = icons[`/src/assets/icons/github-icon.svg`];
linkedinBtn.src = icons[`/src/assets/icons/linkedin-icon.svg`];

for (let i = 0; i <= menuArrowsRight.length; i++) {
  menuArrowsRight[i].src = icons[`/src/assets/icons/arrow-right-line.svg`];
}

// "View My Work" button
projectsBtn.addEventListener(`click`, function () {});
