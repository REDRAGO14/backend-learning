const fs = require("fs")
const filePath = "./tasks.json"

const command = process.argv[2]
const argument = process.argv[3]

if(command == "add"){
    addTask(argument)
}else if(command == "remove"){
    removeTask(parseInt(argument))
}else if(command == list){
    listTasks()
}else{
    console.log("command not found");
}