
import Spinner from "../UI/Spinner"
import {useState, useEffect} from "react"
import getData from "../../utils/api"

export default function UsersList({user, setUser}){
    const[users, setUsers] = useState(null)
    
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
   
   useEffect (() =>{
       getData("https://my-json-server.typicode.com/AnnuCode/JSON/users")
       .then(
           resp=>{
           setUsers(resp)
           setIsLoading(false)
           setUser(resp[0]) // using resp instead of setUser(users[0]) because error tells cannot read properties of null[0], why?
           })
       .catch (err => {
           setError(err)
           setIsLoading(false)
       }         
        
        )
   }, [setUser])

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
        
        <div>
        <ul className=" users items-list-nav">
            {users.map((u,i)=>(
                <li  key={u.id} className={u.id=== user?.id? "selected" : null}>
                    <button className="btn"
                    onClick={()=> setUser(u)}>
                        {u.name}
                    </button>
                </li>
            ))}
        </ul>
        </div>
      
       
    )
}