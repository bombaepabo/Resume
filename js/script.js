/**
 * @copyright Phakkapon 
 * @author Bombae <phakkhapon@gmail.com>
 */

"use strict";


const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");

}
else{
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
    console.log("click");
}
$themeBtn.addEventListener("click", changeTheme);

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let lastActiveTab = document.querySelector("[data-tab-content]");
let lastActiveTabBtn = $tabBtn[0];

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        // Remove the 'active' class from the last active tab and button
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");
        
        // Determine which tab content to show based on the clicked button
        const targetTabContentSelector = `[data-tab-content="${this.dataset.tabBtn}"]`;
        const targetTabContent = document.querySelector(targetTabContentSelector);
        
        if (targetTabContent) {
            targetTabContent.classList.add("active");
        }

        // Add the 'active' class to the clicked button
        this.classList.add("active");
        
        // Update the references to the currently active tab and button
        lastActiveTab = targetTabContent;
        lastActiveTabBtn = this;
    });
});