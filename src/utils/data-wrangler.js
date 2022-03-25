export function addDays(date, daystoAdd){
    const clone = new Date(date.getTime())
    clone.setDate(clone.getDate() + daystoAdd) // the terms in the bracket correspond to numeric values
    return clone // the .setDate() makes clone a date object corresponding to the number in the bracket above
}
export function getWeek(forDate, daysOffset = 0){
    const date = addDays(forDate, daysOffset) 
    const day = date.getDay()
    return {
        date,
        start: addDays(date, -day),
        end: addDays(date, 6 - day)
    }
}

export function shortISO(date){
    return date.toISOString().split("T")[0]
}

