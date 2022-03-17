


import { useEffect, useRef} from "react"


import {FaArrowRight} from "react-icons/fa"

import getData from "../../utils/api";
import Spinner from "../UI/Spinner"


export default function BookablesList ({state, dispatch}) {

 
  const nextButtonRef = useRef()
 

  const {group, bookableIndex,  bookables} = state
  const {isLoading, error} = state

  

  const bookablesInGroup = bookables.filter(b => b.group === group);

  
  

  

  

  const groups = [...new Set(bookables.map((b)=>b.group))]

  

  

  useEffect(()=>{
    dispatch({type: "FETCH_BOOKABLES_REQUEST"})
    getData("https://my-json-server.typicode.com/AnnuCode/JSON/bookables")
    .then(bookables=> 
      dispatch({
        type:"FETCH_BOOKABLES_SUCCESS",
        payload: bookables}))

        .catch(err => dispatch({
        type:"FETCH_BOOKABLES_FAIL",
        payload: err}))
  
  }, [dispatch])

  function nextBookable(){
    dispatch({
      type: "NEXT_BOOKABLE",
      
    })
  }
  function changeGroup (e){
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value
    })
  }
  function changeBookable (selectedIndex){
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex
    })
    nextButtonRef.current.focus()
  }
  

  if (isLoading){
    return <p> <Spinner /> Loading bookables... </p>
  }

  if (error){
    return <p> {error.message} </p>
  }
  return (

 <div>
    
    <select value={group} onChange={(e)=>(changeGroup(e))} >
       
      {groups.map((g)=> <option key={g} value={g}>{g}</option>)}
    </select>

    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={()=>changeBookable(i)}
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