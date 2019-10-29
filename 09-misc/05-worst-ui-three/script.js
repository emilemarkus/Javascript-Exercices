/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // initialisation des variable
    let allField = document.querySelectorAll('.field');
    let i = 0;
    let theArray = new Array();
    allField.forEach(element => {
        //input-button-roller-rollerStatus
        theInput = element.childNodes[1];
        theButton = element.childNodes[3];
        theArray.push({
            inputTarget: theInput.getAttribute("id"),
            buttonTarget: theButton.getAttribute("id"),
            rollername: "roller" + i,
            rollerstatus: false,
            maxval: theInput.getAttribute("data-max"),
            minVal: theInput.getAttribute("data-min"),
            thevalue: theInput.value
        });
        rollIt(i, theInput, theInput.getAttribute("data-max"), theInput.getAttribute("data-min"), "roller" + i);
        i++;
    });

    function updateText(textTarget, targetValue) {
        let newContent = "+";

        for (elem of theArray) {
            newContent += elem.thevalue;
        }
        document.getElementById("target").textContent = newContent;


        //console.log(contentAll.slice(1, targetToSplice));
    }

    // on lance les rollers
    function rollIt(j, target, theMax, theMin, rollername) {
        theButton.addEventListener("click", () => {
            if (theArray[j].rollerstatus == false) {
                clearInterval(theArray[j].rollername);
                theArray[j].rollerstatus = true;
                theArray[j].thevalue = document.getElementById(theArray[j].inputTarget).value;
                //console.log(theArray[j].rollerstatus);
                updateText(j, theArray[j].inputTarget);
            } else {
                theArray[j].rollerstatus = false;
                rollIt(j, target, theMax, theMin, rollername);
            }

        })

        let current = target.value;
        let intervalle = 200 + (50 * i);
        theArray[j].rollername = setInterval(() => {
            current++;
            if (current < 10) current = "0" + current;
            target.value = current;
            if (current > theMax) current = theMin;
        }, intervalle);
    }



})();