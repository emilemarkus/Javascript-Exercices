    /* becode/javascript
     *
     * /06-objects/01-generate-object/script.js - 6.1: générer un object
     *
     * coded by leny@BeCode
     * started at 08/05/2019
     */

    // NOTE: don't focus on the existing code structure for now.
    // You will have time to focus on it later.

    (() => {
        var people = [{
                firstname: "Emile",
                lastname: "Markus",
                age: "46",
                city: "Luttre",
                country: "Belgium"
            }, {
                firstname: "Jean",
                lastname: "Dupont",
                age: "18",
                city: "Charleroi",
                country: "Belgium"
            }, {
                firstname: "Gaspard",
                lastname: "Durieux",
                age: "78",
                city: "Bruxelles",
                country: "Belgium"
            },
            {
                firstname: "Patrick",
                lastname: "Mertens",
                age: "36",
                city: "Brainel'alleud",
                country: "Belgium"
            },
        ]
        document.getElementById("run").addEventListener("click", () => {
            people.forEach(element => {
                console.log(element);
            });
        })
    })();