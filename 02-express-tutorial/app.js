const http = require('http')

console.log(require('http').STATUS_CODES)
const server = http.createServer((req, res)=>{
    console.log(`user hit the server.`);
    res.writeHead(200, {'content-type': 'text/html'})
    res.end(`Hey! This is the Home Page`)
})
server.listen(5000)