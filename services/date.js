// con uniqueDate agregamos la fecha para que no se repita
export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach(task => {
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
    })

    return unique;
}

//con orderDates logramos ordenar la fecha por orden de menor a mayor
export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const fristDate = moment(a,"DD/MM/YYYY");
        const secondDate = moment(b,"DD/MM/YYYY");
        return fristDate - secondDate;
    })
} 