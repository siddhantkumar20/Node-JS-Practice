const path = require('path');

const filename = path.basename('/path/to/file.txt');
const dirname = path.dirname('/path/to/file.txt');
const extname = path.extname('/path/to/file.txt');

console.log(`Filename: ${filename}`);
console.log(`Directory: ${dirname}`);
console.log(`Extension: ${extname}`);