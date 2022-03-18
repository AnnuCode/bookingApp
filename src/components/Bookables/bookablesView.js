import { useState, Fragment } from "react"
import BookablesList from "./BookablesList"
import BookablesDetails from "./bookablesDetails"


export default function BookablesView (){
    
    const [bookable, setBookable] = useState()
    
    



    return (
        <>
        <BookablesList bookable={bookable} setBookable={setBookable}/>
        <BookablesDetails bookable={bookable} />
        </>
    )

}
