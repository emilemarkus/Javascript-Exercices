/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("pass-one").addEventListener("keyup", () => {
        let currenNumber = 0;
        let minLetter = 8;
        let inputValue = document.getElementById("pass-one").value;
        for (let i = 0; i <= inputValue.length; i++) {
            if (Number(inputValue[i])) {
                currenNumber++;
            }
            if ((inputValue.length >= minLetter) && (currenNumber >= 2)) {
                document.getElementById("validity").innerHTML = "ok";
            } else {
                document.getElementById("validity").innerHTML = "pas ok";

            }

        }
    });
})();