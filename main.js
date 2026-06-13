const http = require('http');
const myurl = require('url');
const fs = require('fs');

fs.writeFileSync('hello_2.txt', 'I am learning Node.js with JavaScript');

const server = http.createServer((req, res) => {

    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }

    let log = `Date: ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url}`;

    fs.appendFile('hello.txt', log + '\n', (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    if (req.url === '/') {
        res.end('Default Page');

    
    } else if (req.url === '/home') {
        res.end('Welcome to the Homepage');
    
    } else if (req.url === '/about' || req.url.startsWith('/about?')) {
        const parsedurl = myurl.parse(req.url, true);
        res.end(`${parsedurl.query.name}.Welcome to the aboutpage`);
    }
    else {
        res.statusCode = 404;
        res.end('404 - Page Not Found');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
