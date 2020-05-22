//module wrapper function, when you export a module it inherently wraps the module like this
// (function (exports, require, module, __filename, __dirname) {
// 
// })

// object
// const person = {
//     name: 'jonny doe',
//     age: 30
// }

// console.log(__dirname, __filename);

// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`mi name es ${this.name} and im ${this.age}`);
    }
}

// export default Person; //es6 syntax
module.exports = Person; // legacy syntax