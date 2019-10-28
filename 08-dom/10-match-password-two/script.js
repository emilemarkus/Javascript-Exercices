/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
                    element.classList.remove('error');
                });
            } else {
                var allInput = document.querySelectorAll('input');
                allInput.forEach(element => {
                    element.classList.add('error');
                });
            }
        } else {
            alert("please fill this two input");
        }
    })
})();