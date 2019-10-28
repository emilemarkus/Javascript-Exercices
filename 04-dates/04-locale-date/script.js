/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var theMessage = "";
    var monthFr = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
    var dayFr = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche");
    var toDay = new Date();
    var frenchDate = dayFr[toDay.getDay()];
    var frenchMonth = monthFr[toDay.getUTCMonth() - 1];
    theMessage = frenchDate + " " + toDay.getDate() + " " + frenchMonth + " " + toDay.getUTCFullYear() + ", " + toDay.getHours() + "h" + toDay.getMinutes();
    document.getElementById("target").innerHTML = theMessage;
})();