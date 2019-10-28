/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var divTarget = document.getElementById("answers");
    var text2Add = "";
    for (var i = 1; i <= 100; i++) {
        if (!(i % 3) || (!(i % 5))) {
            if (!(i % 3) && !(i % 5)) {
                text2Add += "fizzbuzz\n"
            } else if (!(i % 3)) {
                text2Add += "fizz\n";
            } else {
                text2Add += "buzz\n"
            }
        } else {
            text2Add += i + "\n";
        }
    }
    console.log(text2Add);
})();