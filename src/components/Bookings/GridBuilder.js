//use nested forEach to make grid objects
//take in selected bookable
//convert sessions to sessionnames
//use shortiso util function
//assign an object for each session  grid[session][date]
//{session: morning, date: 2020-08-13, bookableId: {bookable.id}, title:""}

import {sessions as sessionNames} from "../../static.json"
import {shortISO, addDays} from "../../utils/data-wrangler"



export function getGrid(bookable, startDate){
    const dates = bookable.days.sort().map( 
        d=> shortISO( addDays(startDate, d) ) // to get the dates of the week for which we can book the selected bookable. Startdate represents the week we are interested in.
        )
    const sessions = bookable.sessions.sort().map(s=> sessionNames[s])
    const grid={}
    sessions.forEach(session => {
        grid[session]={}
        dates.forEach(date=>{
            grid[session][date] = {
                session,
                date,
                bookableId:bookable.id,
                title: "" 
            }

        })
    })
    return {
        grid, 
        dates,
        sessions
    }
    
}
export function transformer(bookingsArray){
    //use .reduce to transform array values of bookings and allot them to their corresponding lookup oobject slot
    //the reduce function should check if !bookings[session] & create one if not
    //pluck date and sessions from 'booking'(current booking)
    //bookings[session][date]=booking

     return bookingsArray.reduce((bookings, booking)=>{
        const {session, date } = booking
        if (!bookings[session]){
            bookings[session] = {}
        }
        bookings[session][date] = booking
        return bookings 
    }, {})
}
