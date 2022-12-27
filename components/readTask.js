import { createTask } from "./addTask.js";

export const readTasks = () =>{
    const list = document.querySelector("[data-list]");
    console.log(list);

    const tasksList = JSON.parse(localStorage.getItem("task")) || [];

    tasksList.forEach((task) => {
        list.appendChild(createTask(task));
    })
}