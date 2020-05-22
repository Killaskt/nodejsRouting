const path = require('path'); //core mod

// basename -> gets base filename
console.log(__filename);
console.log(path.basename(__filename))

// Dir name
console.log(__dirname)
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// create path obj
console.log(path.parse(__filename));
console.log(path.parse(__filename).root);

// Concat paths
console.log(path.join(__dirname, 'test', 'hello.html'))
// helps work with delimiters, especially windows

