const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const PORT = process.env.PORT || 5000;

// usually u use database but not today
const users = [
    { name: 'bobby', age: 40 },
    { name: 'johnny', age: 40 },
    { name: 'mary', age: 40 }
];

const server = http.createServer((req, res) => {
    // console.log(req.url); //tells you what url route is getting called

    // if (req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'client', 'index.html'), 
    //         (err,content) => {
    //             if(err) throw err //console.log('getting HTML err: ' + err)

    //             res.writeHead(200, {'Content-Type' : 'text/html'})
    //             res.end(content);
    //     })
    //     // res.end('<h1>HomePage</h1>')
    // }

    // if (req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'client', 'about.html'), 
    //         (err,content) => {
    //             if(err) throw err //console.log('getting HTML err: ' + err)

    //             res.writeHead(200, {'Content-Type' : 'text/html'})
    //             res.end(content);
    //     })
    // }

    // if (req.url === '/api/users') {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // build file path
    let filePath = path.join(
        __dirname, 
        'client', 
        `${req.url === '/' ? 'index.html' : req.url}`)
    
    console.log('requested url:', filePath)
    console.log('url end:', req.url)

    // console.log(filePath);

    //Extension of file
    let extName = path.extname(filePath);

    //intial content Type
    let contentType = 'text/html';

    //check ext type
    switch(extName){
        case '.js':
            contentType = 'text/javscript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        default:
            contentType = 'text/html'
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        console.log('requested url:', filePath)
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not Found
                fs.readFile(path.join(__dirname,'client','404.html'),
                (err, content) => {
                    console.log('put me in coach')
                    res.writeHead(404, {'Content-Type' : 'text/html'})
                    res.end(content, 'utf8');
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // successful response 
            res.writeHead(200, {'Content-Type' : contentType})
            res.end(content, 'utf8');
        }
    })
})

server.listen(PORT, () => `Server running on ${PORT}`);
