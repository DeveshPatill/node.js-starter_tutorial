const http = require('http');

const server = http.createServer((req,res) => {
    let log = `Date: ${new Date().toISOString()} | Method: ${request.method} | URL: ${req.url}`;
    fs.appendFile('hello.txt',log + '\n', (err) => {
        if(err){
            console.error('Error writing to log file:', err);
        }
    });
    if (req.url === '/') {
        res.end("by default page");
    }else if (req.url === '/home'){
        res.end('welcome to the homepage');
    }else {
        res.end('404-page not found');
    }
});

const fss = require("fs");
fss.writeFileSync('hello_2.txt',"i am learning nodejsjsjsjsj with js");

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
});