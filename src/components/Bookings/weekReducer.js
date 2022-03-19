import { getWeek } from "../../utils/data-wrangler"
export default function reducer(state, action){
    switch (action.type){
        case "NEXT_WEEK":
            return getWeek(state.date, 7) // to get the next week in respect to the present value of date
        case "PREV_WEEK":
            return getWeek(state.date, -7) // to get the previous week in respect to the present value of date
        case "TODAY":
            return getWeek(new Date())
        case "SET_DATE":
            return getWeek(new Date(action.payload)) // to get the week object of a particular date.         
            default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}


