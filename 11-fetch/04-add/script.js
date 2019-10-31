/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        // création des datas a stingifyé ;)
        let nom = document.getElementById('hero-name').value;
        let alter = document.getElementById('hero-alter-ego').value;
        let abilities = (document.getElementById('hero-powers').value).split(',');
        let data = {
                nom,
                alter,
                abilities
            }
            // initialisation de la méthode fetch
        let myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Origin': '*'
            },
            body: JSON.stringify(data)
        };
        // on vérifie si les champs sont vide ou pas
        let flagEmpty = "true";
        let emptyInput = Array.from(document.querySelectorAll("input"));
        for (flag of emptyInput) {
            if (flag.value == "") { flagEmpty = false; }
        }
        //si on a bien renseigner tout les champs
        if (flagEmpty) {
            // on fetch
            fetch("http://localhost:3000/heroes", myInit)
                // et on envoie les données
                .then(function(reponse) {
                    return reponse.json();
                })
                // si ok on affiche le resultat dans la console
                .then(function(data) {
                    console.log(data)
                })
        } else {
            alert("Veuillez renseigner tout les champs");
        }


    })
})();