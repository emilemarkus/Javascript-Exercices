/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focuconsoles on the existing code structure for now.
// You will have time to focus on it la


(() => { // your code here
    let err = "error";
    document.getElementById('run').addEventListener('click', () => {
        lib.getPosts((err, article) => {
            console.log(article);
        });
    });
})();