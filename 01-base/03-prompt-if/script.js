/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function question() {
        var reponse = prompt("veux-tu du gâteaux ? oui ou non ?");
        switch (reponse) {
            case "oui":
                alert("Bravo, vous avez raison, il est si bon...");
                break;
            case "non":
                alert("Comment ça non, il est pas bon on gâteau ?");
                break;
            default:
                alert("c'est oui ou non, mais je ceux une réponse clair ;)");
                question();
                break;

        }
    }
    question();
})();