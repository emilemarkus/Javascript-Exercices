/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("target").innerHTML = "";
    let myText = "Je suis un texte qui va apparaître dans un effet \"machine à écrire\"\, un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !";


    //console.log(myText);
    let numbLetter = myText.length;
    var currentPos = 0;
    var cursor = document.createElement("SPAN");
    cursor.innerHTML = "&#x2588";
    cursor.style.color = "black";
    var cursorAnimFadeIn = setInterval(() => {
        cursor.style.opacity = 1;
    }, 600);
    var cursorAnimFadeOut = setInterval(() => {
        cursor.style.opacity = 0;
    }, 500);

    //console.log(cursor);
    var increm = setInterval(function() {
        // cursor
        var curseur = setInterval(function() {
            var myCursor = "ok";
        }, 200);
        if (currentPos == numbLetter - 1) {
            clearInterval(increm);
        }
        affichage(currentPos);
        currentPos++;
    }, 500)



    function affichage(posi) {
        let textIt = document.getElementById("target").textContent;
        let textToAff = textIt.split(cursor.innerHTML);

        let finaltext = textToAff[0] + myText[posi];
        //console.log(textToAff);
        document.getElementById("target").innerHTML = finaltext;
        document.getElementById("target").appendChild(cursor);
    };

})();