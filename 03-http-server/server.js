const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((res, req) =>{
})

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})