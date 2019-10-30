/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let valeToDel = document.getElementById("hero-id").value;
        let arrayData = [];
        fetch("http://localhost:3000/heroes")
            .then(function(reponse) {
                reponse.json().then(function(data) {
                    if ((valeToDel > 0) && (valeToDel <= data.length)) {
                        for (record of data) {
                            console.log(record.id);
                            if (record.id == valeToDel) data.splice(valeToDel - 1, 1);
                            // data.splice(0, 1);
                            arrayData.push(data);

                        }
                        console.log(data);
                    }

                }, 2000)

            })


        //console.log(arrayData);
    })
})()