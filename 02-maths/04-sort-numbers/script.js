/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    function compared(arrayNumber, n) {
        for (var i = n; i < arrayNumber.length; i++) {
            var numOne = parseInt(arrayNumber[i]);
            var numTwo = parseInt(arrayNumber[i + 1]);
            if (numOne > numTwo) {
                arrayNumber.splice(i, 2, numTwo, numOne);
                compared(arrayNumber, i);


            }
        }
        document.getElementById('answers').innerText = "voici le tout trié : " + arrayNumber;
    }




    document.getElementById("run").addEventListener("click", () => {
        var table = document.getElementById("numbers").value.split(",");
        compared(table, 0);
        // sinon il y avait "sort()" aussi :)
    });
})();