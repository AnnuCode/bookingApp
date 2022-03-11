import {useState, useEffect} from "react"
import Spinner from "../UI/Spinner"
export default function UserPicker () {


  const [users, setUsers] = useState(null)

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/AnnuCode/JSON/users")
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  if (users === null){
    return <Spinner />
  }
  
  return (
    <select className="item-list-nav">
      {users.map((u,i)=>(
        <option key={u.id} >
        {u.name}
      </option>
      ))}
      
    </select>
  );
}
