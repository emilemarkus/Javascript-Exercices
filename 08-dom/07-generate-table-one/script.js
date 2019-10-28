/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let newTable = document.createElement("TABLE");
    for (let i = 0; i <= 9; i++) {
        let newTr = document.createElement("TR");
        let newTd = document.createElement("TD");
        newTd.innerHTML = i + 1;
        let odds = i % 2;

        if (odds == 0) {
            newTd.style.backgroundColor = "#f2f2f2";
        }
        newTr.append(newTd);
        newTable.append(newTr);
    }
    console.log(newTable);
    document.getElementById("target").appendChild(newTable);
})();