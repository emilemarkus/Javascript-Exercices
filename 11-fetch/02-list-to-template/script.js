/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function appendIdCard(name, alter, power) {

        document.getElementById("target").innerHTML = templaetToPending;
    }

    document.getElementById("run").addEventListener("click", () => {
        let objectHeroes = [];
        let addToPage = "";
        fetch("http://localhost:3000/heroes")
            .then(function(reponse) {
                reponse.json().then(function(data) {
                    console.log(data);
                    for (namer of data) {
                        addToPage += `<li class="hero">
                                <h4 class="title">
                                    <strong class="name">${namer.name}</strong>
                                    <em class="alter-ego">${namer.alterEgo}</em>
                                </h4>
                                <p class="powers">${namer.abilities}</p>
                            </li>`;
                    }
                    document.getElementById("target").innerHTML = addToPage;
                })

            })




    })
})();