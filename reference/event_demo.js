// node is built around event emitters 
// certain object (emitters) emit named events that cause listener obj to be called
const eventEmitter = require('events')

// create emitter class
class MyEmitter extends eventEmitter { }

// init obj
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'))
// now any time we emit 'event' the above code will run

// init Event
myEmitter.emit('event');
myEmitter.emit('event');