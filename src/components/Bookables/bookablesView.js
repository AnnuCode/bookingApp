import { useReducer, Fragment } from "react"
import BookablesList from "./BookablesList"
import BookablesDetails from "./bookablesDetails"
import reducer from "./reducer"

export default function BookablesView (){
    const initialState = {
    group:"Rooms",
    bookableIndex: 0,
    bookables: [],
    isLoading: true,
    error: false
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const bookablesInGroup = state.bookables.filter(b => b.group === state.group)
    const bookable = bookablesInGroup[state.bookableIndex]



    return (
        <>
        <BookablesList state={state} dispatch={dispatch}/>
        <BookablesDetails bookable={bookable} />
        </>
    )

}
