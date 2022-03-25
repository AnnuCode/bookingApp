import { useState, useReducer } from "react"
import weekReducer from "./weekReducer"
import WeekPicker from "./WeekPicker"
import BookingsGrid from "./BookingsGrid"
import BookingsDetails from "./BookingsDetails"
import { getWeek } from "../../utils/data-wrangler"


export default function Bookings({bookable}){
    const[week, dispatch] = useReducer( weekReducer, new Date(), getWeek )
    
    const [booking, setBooking] = useState(null)


    return(
        <div className="bookings">
        <div>

        <WeekPicker dispatch={dispatch} />
        <BookingsGrid week={week} booking={booking} setBooking={setBooking} bookable={bookable} /> {/* sharing week prop is important here */}
        
        </div>
        {/* <BookingsDetails booking={booking} bookable={bookable}  /> */}
        </div>
    )

}

