/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let arrayTexte = Array.from("Pour l’ homme, humble, et pour lui seulement, le soleil est, vraiment un soleil");
    let posInArraySize = 0;
    let newDiv = document.createElement("DIV");
    newDiv.id = "myDiv";
    newDiv.style.height = "50vh";


    let arraySize = ["0.5em", "0.8em", "1.1em", "1.4em", "1.5em", "1.4em", "1.1em", "0.8em", "0.5em"];
    let sizeStart = 0;
    arrayTexte.forEach(element => {
        let newSpan = document.createElement("SPAN");
        newSpan.innerHTML = arrayTexte[arrayTexte.indexOf(element)];
        newSpan.style.transform = "all";
        newSpan.style.transition = "0.5s ease-in-out";
        newSpan.style.textOrientation = "reverse";
        if (sizeStart === arraySize.length) { sizeStart = 0; }
        newSpan.style.fontSize = arraySize[sizeStart];
        sizeStart++;
        newDiv.appendChild(newSpan);
    });
    document.getElementById("target").innerHTML = " ";
    document.getElementById("target").appendChild(newDiv);
    let arraySpan = Array.from(document.getElementById("myDiv").children); // on crer une table contenant les span

    function waveIt() {
        let maxSize = arraySize.length;
        //console.log(maxSize);
        //console.log(posInArraySize);
        arraySpan.forEach(element => {
            if (posInArraySize == 9) {
                posInArraySize = 0;
            }
            //console.log(posInArraySize);
            posInArraySize++;
            let newSizeToAdd = arraySize[posInArraySize];
            element.style.fontSize = newSizeToAdd;

        });
    }
    var animateIt = setInterval(waveIt, 500);

})();