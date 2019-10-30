/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        // on charge les valeur necessaire
        let userYear = document.getElementById("dob-year").value;
        let userMonth = document.getElementById("dob-month").value;
        let nbDayInMonthOfBirth = new Date(userYear, userMonth, 0);
        let userDay = document.getElementById("dob-day").value;
        let userDate = new Date(userYear, userMonth, userDay);
        let nbDayOfUserMonth = new Date(userYear - 1, userMonth + 1, 0);
        let yearStart = parseInt(userYear) + 1;
        let currentDate = new Date();
        // initialilsation d valeur
        let nbOfYear = 0;
        let nbOfMonth = 0;
        let nbOfDay = 0;

        // on calcul le temps entre l'anniversaire et la fin de l'année d'anniversaire.
        for (let m = userMonth; m <= 11; m++) {
            nbOfMonth++;
        }
        nbOfDay = (nbDayInMonthOfBirth.getDate() - userDay);

        // on calcul le nombre d'année entre l'année qui suit la naissance et l'année en cours avec les année bis
        for (let y = yearStart; y <= currentDate.getFullYear(); y++) {
            let numOfDayInYear = 0;
            for (let m = 0; m <= 11; m++) {
                let tempoDate = new Date(y, m, 0);
                numOfDayInYear += tempoDate.getDate();
            }
            // a chaque année bissextile on increment de un jour la valeur day;
            if (numOfDayInYear == 366) nbOfDay++;
            // on vieillie d'un an et des fois un jour
            nbOfYear++;
        }
        //console.log(nbOfDay);
        // on ajoute les mois et jours de cette année aux compteurs
        nbOfMonth += currentDate.getMonth();
        nbOfDay += currentDate.getDate();
        // si l'anniversaire n'est pas encore passée on retire un an 
        let userMonthStart = parseInt(userMonth - 1);
        //console.log(userMonthStart + "-" + currentDate.getMonth());
        if (userMonthStart > currentDate.getMonth()) {
            nbOfYear--;
        } else {
            nbOfMonth = nbOfMonth - 12;
        }
        console.log(`Vous avez ${nbOfYear} ans, ${nbOfMonth+1} mois et ${nbOfDay} jours exactement`);
        console.log(`Bref c'est vrai qu'on fait jamais son age....`)


    });




















})();