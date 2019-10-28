/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        set name(userValue) {
            var userName = userValue.split(" ");
            this.firstname = userName[0];
            this.lastname = userName[1];
        }

        get name() {
            console.log(this.firstname + ' ' + this.lastname);
        }

    }

    document.getElementById("run").addEventListener("click", () => {
        patrickPerson = new Person("Patrick", "Charlier");
        patrickPerson.name;
        lauraPerson = new Person();
        lauraPerson.name = "Laura Dupont";
        lauraPerson.name;
    })
})();