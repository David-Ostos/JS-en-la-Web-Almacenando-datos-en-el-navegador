import { uniqueDates,orderDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";

// con esta arrow function logramos agregar la seccion de categorias por fecha 
export const displayTasks = () =>{
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("task")) || [];
    const dates = uniqueDates(tasksList)
    orderDates(dates);

    //y de esta manera logramos separarlas en su lugar respectivo
    dates.forEach((date) => {
        const dateMoment = moment(date, "DD-MM-YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD-MM-YYYY");
            const diff =  dateMoment.diff(taskDate);
            if (diff === 0){
                list.appendChild(createTask(task));
            }
        })
    })

}