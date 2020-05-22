const Person = require('./person');
const Logger = require('./logger');

// need to implement babel to run ES6 code such as import ... from ...

// console.log(person.name)
// const person1 = new Person('jonny', 30);
// person1.greeting()

const logger = new Logger();

logger.on('message', (data) => {
    console.log(`called Listener`, data);
})

logger.log('Hello World!');
logger.log('Hi!');
logger.log('Hello!');