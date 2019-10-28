/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //son âge, sexe et ville.
    function questions() {
        var age = prompt('Entrez votre âge : ');
        var sexe = prompt('Entrez votre sexe :');
        var city = prompt('Entrez votre ville :');
        var message = 'Vous avez ' + age + ' ans\n' + 'Vous êtes de sexe' + sexe + '\nEt vous venez de ' + city;
        var r = confirm(message);
        if (r == true) {
            alert("merci d'avoir confirmer !")
        } else {
            alert("vous devez confirmer vos données ! Recommençons !");
            questions();
        }
    }
    questions();
})();