const fs = require("fs");
const filePath = "./tasks.json";

const command = process.argv[2];
const argument = process.argv[3];

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveTask = (tasks) => {
  try {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
  } catch (err) {}
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push(task);
  saveTask(tasks);
  console.log("Task Added Successfully");
};

const removeTask = (index) => {
  const tasks = loadTask();
  tasks.splice(index - 1, 1);
  saveTask(tasks);
  console.log("task removed Successfully");
};

const listTasks = () => {
  const tasks = loadTask();
  tasks.forEach((task, index) => {
    console.log(`[${index + 1}] ${task}`);
  });
};

if (command == "add") {
  addTask(argument);
} else if (command == "remove") {
  removeTask(parseInt(argument));
} else if (command == "list") {
  listTasks();
} else {
  console.log("command not found");
}
