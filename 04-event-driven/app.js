/* const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('hello', () => {
    console.log("Listener 1");  
})
emitter.on('hello', () => {
    console.log("Listener 2");  
})

emitter.emit("hello") */

const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('userRegistered', (username) => {
    console.log(`send welcome email ${username}`);
})
emitter.on('userRegistered', (username)=>{
    console.log(`create log for ${username}`);
})
emitter.emit('userRegistered', "dagim")