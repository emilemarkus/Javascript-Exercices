/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let hoverLink = document.querySelector('img').getAttribute("data-hover");
    let outLink = document.querySelector('img').src;
    let targetImg = document.querySelector('img');
    targetImg.addEventListener("mouseover", () => {
        targetImg.src = hoverLink;
    })
    targetImg.addEventListener("mouseout", () => {
        targetImg.src = outLink;
    })

})();