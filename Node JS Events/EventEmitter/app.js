const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
  const filePath = path.join(__dirname, 'example.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

myEmitter.emit('event');
