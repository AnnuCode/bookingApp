import { useReducer, useRef } from "react";
import reducer from "./reducer";
import { getWeek } from "../../utils/data-wrangler";


import { FaChevronLeft, FaCalendarDay, FaChevronRight, FaCalendarCheck } from "react-icons/fa";

export default function WeekPicker ({date}) {

    const [week, dispatch] = useReducer(reducer, date, getWeek)
    const textBoxRef = useRef()
    function handleGo(){
        dispatch({
            type: "SET_DATE",
            payload: textBoxRef.current.value
        })
    }
    return (
        <div>
            <p className="date-picker">
                <button className="btn" onClick={() => dispatch({type: "PREV_WEEK"})}>
                    <FaChevronLeft />
                   <span> Prev </span> 
                </button>
                <button className="btn" onClick={() => dispatch({type:"TODAY"})}>
                    <FaCalendarDay />
                    <span> Today </span>
                    </button>
                    <span>
                        <input type="text" ref={textBoxRef} placeholder="e.g. 2020-09-02"  />

                        
                        <button className="go btn" onClick={handleGo}>
                            <FaCalendarCheck />
                            <span>go</span>
                            </button>
                        
                    </span>
                
                <button className="btn" onClick={() => dispatch({type:"NEXT_WEEK"})}>
                   <span> Next </span> 
                    <FaChevronRight />
                </button>

            </p>
            <p>
                {week.start.toDateString()} - {week.end.toDateString()} 
            </p>
        </div>
    )
}



