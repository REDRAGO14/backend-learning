const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((req, res) =>{
    const filePath = path.join(__dirname, req.url === "/"|| req.url === "/home" ? "index.html": req.url)
    
    const exName = String(path.extname(filePath).toLowerCase())
    const mimeType = {
        ".html": 'text/html',
        ".css": 'text/css',
        ".js": 'text/javascript',
        ".png": 'text/png'
    }
    const contentType = mimeType[exName] || "application/octet-stream"

    fs.readFile(filePath, (err, content) =>{
        if(err){
            if(err.code === "ENOENT"){ res.writeHead(404, {"Content-Type": "text/html"})
                 res.end("404 page not found")
            }
            }else{
                res.writeHead(200, {"Content-Type": contentType})
                res.end(content, "utf-8")
            }
    })
})

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})