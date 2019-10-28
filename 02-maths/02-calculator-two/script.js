/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var valOne = parseInt(document.getElementById("op-one").value);
    var valTwo = parseInt(document.getElementById("op-two").value);
    const performOperation = operation => {
        switch (operation) {
            case "addition":
                alert(valOne + valTwo);
                break;
            case "substraction":
                alert(valOne - valTwo);
                break;
            case "multiplication":
                alert(valOne * valTwo);
                break;
            case "division":
                alert(valOne / valTwo);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();