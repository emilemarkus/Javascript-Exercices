/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        affichage() {
            return (this.name + "-" + this.age);
        }

    }
    document.getElementById("run").addEventListener("click", () => {
        const chat1 = new Cat("Skitty", "9 ans");
        const chat2 = new Cat("Pixel", "6 ans");



        console.log(chat1.affichage());
        console.log(chat2.affichage());


    })
})();