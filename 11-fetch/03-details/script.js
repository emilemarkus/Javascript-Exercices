/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let userId = document.getElementById("hero-id").value;
        //console.log(userId);
        fetch("http://localhost:3000/heroes")
            .then(function(reponse) {
                reponse.json().then(function(data) {
                    if (!data[userId]) {
                        throw `Pas de heros avec cette id`
                    } else {
                        document.getElementById("target").innerHTML = `
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name">${data[userId].name}</strong>
                                <em class="alter-ego">${data[userId].alterEgo}</em>
                            </h4>
                            <p class="powers">${data[userId].abilities}</p>
                        </li>`
                    }
                })
            })

    })

})();