const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class FileProcessor extends EventEmitter {
    readFile(filePath) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                this.emit('error', err);
                return;
            }
            this.emit('fileRead', data);
        });
    }

    processContent(content) {
        const processedContent = content.toUpperCase();
        this.emit('contentProcessed', processedContent);
    }
}

module.exports = FileProcessor;
