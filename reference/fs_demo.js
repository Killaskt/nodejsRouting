const fs = require('fs');
const path = require('path');

//create folder
// console.log(fs.existsSync('test'))
if (!fs.existsSync(path.join(__dirname, '/test'))) {
    fs.mkdir(path.join(__dirname, 'test'), {}, (e) => {
        if(e) throw err;
        console.log('folder created...');
    })
}

// create and write to file
fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'hello world!', 
    (e) => {
        if(e) throw err;
        console.log('File created and written to...');

        // File Append
        fs.appendFile(
            path.join(__dirname, '/test', 'hello.txt'), 
            ' NodeJS baby!', 
            (e) => {
                if(e) throw err;
                console.log('File appended...');
        })

        
        fs.readFile(
            path.join(__dirname, '/test', 'hello.txt'), 
            'utf8', //encoding to translate txt file to english
            (e, data) => {
                if(e) throw err;
                console.log('data: ' + data);

                fs.rename(
                    path.join(__dirname, '/test', 'hello.txt'),
                    path.join(__dirname, '/test', 'helloNode.txt'), 
                    (e) => {
                        if(e) throw err;
                        console.log('File Renamed...');
                })
        })

        
})


// since write file is async putting this here fires too quickly
// fs.readFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'utf8', //encoding to translate txt file to english
//     (e, data) => {
//         if(e) throw err;
//         console.log('data: ' + data);
// })