/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let passOne = document.getElementById("pass-one").value;
        let passTwo = document.getElementById("pass-two").value;
        if ((passOne) && (passTwo)) {
            if (passOne == passTwo) {
                var allInput = document.querySelectorAll('input');
                allInput.forEach(element => {
                    element.style.borderColor = "green";
                });
            } else {
                var allInput = document.querySelectorAll('input');
                allInput.forEach(element => {
                    element.style.border = "2px solid rgba(255,0,0,0.5)";
                });
            }
        } else {
            alert("please fill this two input");
        }
    })
})();