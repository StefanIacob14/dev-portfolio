"use strict";

// Import images / icons from "src" folder
const icons = import.meta.glob(`/src/assets/icons/*.{svg, png, jpg, jpeg}`, {
  eager: true,
  import: `default`,
});

// VARIABLES & FUNCTIONS
// Variables
const menuBtn = document.getElementById(`menu--button`);
const menuLines = document.getElementById(`menu--icon`);

const projectsBtn = document.getElementById(`projects--button`);

// Functions

// PORTFOLIO SITE
// Menu Smartphone button
menuLines.src = icons[`/src/assets/icons/menu-lines.svg`];

menuBtn.addEventListener(`click`, function () {});

// "View My Work" button
projectsBtn.addEventListener(`click`, function () {});
