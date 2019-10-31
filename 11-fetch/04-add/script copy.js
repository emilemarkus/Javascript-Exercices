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
        let nom = document.getElementById('hero-name').value;
        let alter = document.getElementById('hero-alter-ego').value;
        let abilities = (document.getElementById('hero-powers').value).split(',');
        let myInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default'
        };
        let toAdd = [];
        let flagEmpty = "true";
        let emptyInput = Array.from(document.querySelectorAll("input"));
        for (flag of emptyInput) {
            if (flag.value == "") { flagEmpty = false; }
        }
        //si on a bien renseigner tout les champs
        if (flagEmpty) {
            // on fetch
            fetch("http://localhost:3000/heroes", myInit)
                .then(function(reponse) {
                    reponse.json().then(function(data) {
                        // console.log(data.length);
                        body: JSON.stringify({
                            id: data.length,
                            name: nom,
                            alterEgo: alter,
                            abilities: abilities
                        })


                    })

                })

        } else {
            alert("Veuillez renseigner tout les champs");
        }


    })
})();