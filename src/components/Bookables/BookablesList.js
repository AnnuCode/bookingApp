


import { useEffect, useRef, useState} from "react"


import {FaArrowRight} from "react-icons/fa"

import getData from "../../utils/api";
import Spinner from "../UI/Spinner"


export default function BookablesList ({bookable, setBookable}) {

  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [bookables, setBookables] = useState([])
  
  const nextButtonRef = useRef()
 
  const bookablesInGroup = bookables.filter(b => b.group === bookable.group);
  const groups = [...new Set(bookables.map((b)=>b.group))]
  const group = bookable?.group

 useEffect(()=>{
   
    getData("https://my-json-server.typicode.com/AnnuCode/JSON/bookables")
    .then(bookables => {
      setBookable(bookables[0])
      setIsLoading(false)
      setBookables(bookables)
      
      
    })
      
    .catch(error => {
          setErr(error)
          setIsLoading(false)
        }
          )
  
  }, [setBookable])

  function nextBookable(){
   const i = bookablesInGroup.indexOf(bookable)
   const nextIndex = (i+1) % bookablesInGroup.length
   const nextBookable = bookablesInGroup[nextIndex]
   setBookable(nextBookable)
  }
  function changeGroup (e){
    const bookablesInSelectedGroup = bookables.filter(b => b.group === e.target.value)
    setBookable(bookablesInSelectedGroup[0])
  }
  function changeBookable (selectedBookable){
    setBookable(selectedBookable)
    nextButtonRef.current.focus()
  }
  

  if (isLoading){
    return <p> <Spinner /> Loading bookables... </p>
  }

  if (err){
    return <p> {err.message} </p>
  }
  return (

 <div>
    
    <select value={group} onChange={(e)=>(changeGroup(e))} >
       
      {groups.map((g)=> <option key={g} value={g}>{g}</option>)}
    </select>

    <ul className="bookables items-list-nav">
      {bookablesInGroup.map( b => (
        <li
          key={b.id}
          className={b.id === bookable.id ? "selected" : null}
        >
          <button
            className="btn"
            onClick={()=>changeBookable(b)}
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
    <p>
    <button className="btn" onClick={nextBookable} ref={nextButtonRef} autoFocus>
        <FaArrowRight/>
        <span>Next</span>
    </button>
    </p>
    </div>

      

  );
}