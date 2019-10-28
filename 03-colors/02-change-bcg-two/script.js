/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function changeColor() {
        // we get the value of the user color;
        var colorUser = document.getElementById('color').value;
        // we create a new value for testing the color
        var colorTest = new Option().style;
        // we assign the test value
        colorTest.color = colorUser;
        // we check if the colorUser is a valid color word
        if (colorTest.color == colorUser) {
            document.body.style.backgroundColor = colorUser;
        } else {
            //if not we convert the value in numeric to test it
            var numericColorUser = Number(colorUser);
            // we convert all in a color number valild
            var numericColor = "#" + numericColorUser;
            // if the value is a pure numeric 
            if (numericColorUser) {
                // and if the number is correct with 6 digit
                if (numericColorUser.toString().length == 6) {
                    document.body.style.backgroundColor = numericColor;
                } else {
                    alert("entrez une couleur  numerique valable");
                }
            } else {
                // if not pure numeric maybe is a hexa and we changed in a valid hexa color value;
                var hexaColor = "#" + colorUser;
                // we assign the color in the test variable;
                colorTest.color = hexaColor;
                // if the color exist
                if (colorTest.color) {
                    document.body.style.backgroundColor = hexaColor;
                } else {
                    alert("Entrez une valeur hexadecial correcte");
                }
            }
        }
    }
    document.getElementById("run").addEventListener("click", () => changeColor(), true);

})();