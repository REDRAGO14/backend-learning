const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

let emitter = new EventEmitter()

class Logger extends EventEmitter{
    log(message){
        this.emit("message", {message})
    }
}

let logger = new Logger()
let logFile = './eventlog.txt'

const saveToLog = (event) =>{
    let logMessage = `${new Date().toISOString()} - ${event.message} \n`
    fs.appendFileSync(logFile, logMessage)
}

logger.on('message', saveToLog)

setInterval(() => {
    let memoryUsage = os.freemem() / os.totalmem() * 100
    logger.log(`current memory usage ${memoryUsage.toFixed(2)}`)
}, 3000);