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
        let toAdd = [];
        let flagEmpty = "true";
        let emptyInput = Array.from(document.querySelectorAll("input"));
        for (flag of emptyInput) {
            if (flag.value == "") { flagEmpty = false; }
        }
        //si on a bien renseigner tout les champs
        if (flagEmpty) {
            // on fetch
            fetch("http://localhost:3000/heroes")
                .then(function(reponse) {
                    reponse.json().then(function(data) {
                        // console.log(data.length);
                        data.push({
                            "id": (data.length) + 1,
                            "name": document.getElementById('hero-name').value,
                            "alterEgo": document.getElementById('hero-alter-ego').value,
                            "abilities": (document.getElementById('hero-powers').value).split(',')
                        })
                        let parsedData = JSON.stringify(toAdd);
                        //console.log(parsedData);
                        console.log(data);
                    })

                })

        } else {
            alert("Veuillez renseigner tout les champs");
        }


    })
})();