/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // on creer un tableau avec les element button
    let allButton = Array.from(document.querySelectorAll('button'));
    // on créer une event pour chaque button;
    allButton.forEach(element => { element.addEventListener("click", () => { changeValue(element); }) });
    // onchange la valeur
    function changeValue(targetButton) {
        let maxVal = targetButton.getAttribute("data-max");
        let minVal = targetButton.getAttribute("data-min");
        let currentVal = targetButton.textContent;
        currentVal++;
        if (currentVal > maxVal) currentVal = minVal;
        if (currentVal < 10) currentVal = "0" + currentVal;
        targetButton.textContent = currentVal;
        affValeurFinal();
    }


    // on afficher toute les valeurs associées
    function affValeurFinal() {
        let finalValue = "";
        for (value of allButton) {
            finalValue += value.textContent;
        }
        console.log(finalValue);
        document.getElementById("target").textContent = "+0" + finalValue;
    }
})();