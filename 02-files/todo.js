const fs = require("fs")
const filePath = "./tasks.json"

const command = process.argv[2]
const argument = process.argv[3]

const addTask = (task) => {
    const tasks = loadTask()
    tasks.push(task)
    saveTask(tasks)
}

if(command == "add"){
    addTask(argument)
}else if(command == "remove"){
    removeTask(parseInt(argument))
}else if(command == list){
    listTasks()
}else{
    console.log("command not found");
}