
import Spinner from "../UI/Spinner"
import {useState, useEffect} from "react"
import getData from "../../utils/api"

export default function UsersList(){
    const[users, setUsers] = useState(null)
    const [userId, setUserId] = useState(1)
    const[hasDetails, setHasDetails] = useState(false)
    const currentUser = users?.[userId]
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
   
   useEffect (() =>{
       getData("http://localhost:3001/users/")
       .then(
           resp=>{setUsers(resp)
           setIsLoading(false)
           })
       .catch (err => {
           setError(err)
           setIsLoading(false)
       }         
        
        )
   }, [])

   if (error){
       return (
           <p>{error.message}</p>
       )
   }
   if(isLoading){
       return (
         <p> <Spinner /> Loading Users... </p>  
       )
   }
   
    return(
        <>
        <div>
        <ul className=" users items-list-nav">
            {users.map((u,i)=>(
                <li  key={u.id} className={i === userId? "selected" : null}>
                    <button className="btn"
                    onClick={()=> setUserId(i)}>
                        {u.name}
                    </button>
                </li>
            ))}
        </ul>
        </div>
       {
           currentUser && (<div className="item user">
               <div className="item-header">
                   <h2>{currentUser.name}</h2>
                   <span className="controls">
                       <label>
                           <input type="checkbox" onChange={()=>setHasDetails(has => !has)}/>
                           Show Details
                       </label>
                 </span>
               </div>
                {hasDetails && <div className="user-details">
                    <h3>{currentUser.title}</h3>
                    <p>{currentUser.notes}</p>
                    </div>}

           </div>
           )
       }
       </> 
    )
}