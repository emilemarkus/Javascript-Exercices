/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let myFunction = async() => {
            let objectId = []
            const result = await lib.getPosts();
            if (result) {
                for (article of result) {
                    objectId.push(article.id);
                    for (id of objectId) {
                        const resultComm = await lib.getComments(id);
                        article.comments = resultComm;
                    }
                    console.log(article);
                }
            }
        }
        myFunction();
    })
})();