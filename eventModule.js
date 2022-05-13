const events = require('events');
const eventEmitter = new events.EventEmitter(); // event를 발생시키기 위한 객체

// Create an event handler
const myEventHandler = function() {
    console.log('I hear a scream!! ');
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

console.log('Ready....')

// File the 'scream' event
eventEmitter.emit('scream');    // 이벤트 발생에는 emit() 메서드를 사용한다. 
console.log('end event... ');
