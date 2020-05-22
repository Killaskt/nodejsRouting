const http = require('http');

// create server obj
http.createServer((req,res) => {
    // write a response after getting a request
    res.write('hello world!');
    res.end();
}).listen(5000, () => console.log(`server running at 5000`));