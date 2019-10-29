/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let objectComments = [];
        lib.getPosts((_, articles) => {
            for (const article of articles) {
                objectComments.push(article.id);
                for (const id of objectComments) {
                    lib.getComments(id, (_, commentaires) => {
                        article.comments = commentaires;
                    })
                }
                console.log(article);
            }

        })


        // console.log(objectComments);
    })
})();