/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var functionQuery;

    function getValues() {
        var valOne = parseInt(document.getElementById("op-one").value);
        var valTwo = parseInt(document.getElementById("op-two").value);
        switch (functionQuery) {
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
    }
    document.getElementById("addition").addEventListener("click", () => {
        functionQuery = "addition";
        getValues();
    });

    document.getElementById("substraction").addEventListener("click", () => {
        functionQuery = "substraction";
        getValues();
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        functionQuery = "multiplication";
        getValues();
    });

    document.getElementById("division").addEventListener("click", () => {
        functionQuery = "division";
        getValues();
    });



})();