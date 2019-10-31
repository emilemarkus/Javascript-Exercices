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
    document.getElementById("run").addEventListener("click", async() => {
        let valeToDel = document.getElementById("hero-id").value;
        let adress = "http://localhost:3000/heroes/" + valeToDel;
        // initialisation du fetch
        // initialisation de la méthode fetch
        let myInit = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Origin': '*'
            }
        }

        try {
            let deleteApi = await fetch(adress, myInit)
                .then(function(erreur) {
                    if ((erreur.status) == 404) {
                        alert("cet Id n'existe pas");
                    }
                })
        } catch (e) {
            console.error(`error${e}`)
        }




        //console.log(arrayData);
    })
})()