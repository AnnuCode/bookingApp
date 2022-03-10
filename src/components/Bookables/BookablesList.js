


import {Fragment, useReducer, useEffect} from "react"
import {days,sessions} from "../../static.json";

import {FaArrowRight} from "react-icons/fa"
import reducer from "./reducer";
import getData from "../../utils/api";
import Spinner from "../UI/Spinner"

const initialState = {
  group:"Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables: [],
  isLoading: true,
  error: false
} 
export default function BookablesList () {

 

  const [state, dispatch] = useReducer(reducer, initialState)

  const {group, bookableIndex, hasDetails, bookables} = state
  const {isLoading, error} = state

  

  const bookablesInGroup = bookables.filter(b => b.group === group);

  
  

  const bookable = bookablesInGroup[bookableIndex]

  

  const groups = [...new Set(bookables.map((b)=>b.group))]

  useEffect(()=>{
    dispatch({type: "FETCH_BOOKABLES_REQUEST"})
    getData("http://localhost:3001/bookables")
    .then(bookables=> 
      dispatch({
        type:"FETCH_BOOKABLES_SUCCESS",
        payload: bookables}))

        .catch(err => dispatch({
        type:"FETCH_BOOKABLES_FAIL",
        payload: err}))
  
  }, [])

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
  }
  function toggleDetails(){
    dispatch({
      type: "TOGGLE_HAS_DETAILS"
      
    })
  }

  if (isLoading){
    return <p> <Spinner /> Loading bookables... </p>
  }

  if (error){
    return <p> {error.message} </p>
  }
  return (
<> 
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
    <button className="btn" onClick={nextBookable} autoFocus>
        <FaArrowRight/>
        <span>Next</span>
    </button>
    </p>
    </div>

      {
        bookable && (<div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input type="checkbox" checked={hasDetails} 
                onChange={toggleDetails}/>
                  Show details
                </label> 
              </span>
              
            </div>
            <p>{bookable.notes}</p>
            
            {hasDetails && (
                <div className="item-details">
                  <h3>Availability</h3>
                  <div className="bookable-availability">
                    <ul>
                      {bookable.days.sort()
                      .map((d)=>(<li>{days[d]}</li>))}
                    </ul>
                    <ul>
                      {bookable.sessions.sort().map((s)=>(<li>{sessions[s]}</li>))}
                    </ul>
                  </div>
                </div>
            )}
          </div>
        </div>
        )}  
</>
  );
}