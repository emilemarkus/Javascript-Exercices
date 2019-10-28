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
        let userYear = document.getElementById("dob-year").value;
        userYear++;
        let userMonth = document.getElementById("dob-month").value;
        let userDay = document.getElementById("dob-day").value;
        let userDate = new Date(userYear, userMonth, userDay);
        let currentDate = new Date();
        let numberOfYear = currentDate.getFullYear() - userYear;
        let numberOfMonth = 0;
        if (currentDate.getMonth() < userMonth) {
            numberOfMonth = currentDate.getMonth() + 1;
        } else {
            numberOfMonth = currentDate.getMonth() - userMonth;
        }
        let maxDayOfBirthMonth = new Date(userYear, userMonth, 0);
        let valToAddInDay = maxDayOfBirthMonth.getDate() - userDay;

        let numberOfDay = currentDate.getDate() + valToAddInDay;

        console.log("J'ai " + numberOfYear + " ans , " + numberOfMonth + " mois et " + numberOfDay + " jours");










        /* let userYear = document.getElementById("dob-year").value;
         let userMonth = parseInt(document.getElementById("dob-month").value - 1);
         let userDay = parseInt(document.getElementById("dob-day").value);
         let userDate = new Date(userYear, userMonth, userDay);
         let currentDate = new Date();
         let yearOfUser = Math.floor(Math.floor((currentDate - userDate) / 86400000) / 365);
         let monthOfUser = currentDate.getMonth() - userMonth;
         let dayUser = 0;
         if (monthOfUser < 0) {
             monthOfUser = currentDate.getMonth() + 1;
         }
         if (userDay > currentDate.getDate()) {
             let numberOfDate = new Date(currentDate.getFullYear(), userMonth, 0);
             console.log(numberOfDate.getDate() + "-" + userDay + "-" + currentDate.getDate());

             dayUser = currentDate.getDate() + (numberOfDate.getDate() - userDay);
         } else {
             dayUser = currentDate.getDate();
         }
         let dateForDay = new Date(currentDate.getFullYear, userMonth, userDate);
         console.log("J'ai " + yearOfUser + "," + monthOfUser + " mois et" + dayUser + " jours");*/
    })
})();