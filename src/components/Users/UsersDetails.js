import { useState } from "react";

export default function UsersDetails ({user}){
    const [hasDetails, setHasDetails] = useState(false)

    function toggleDetails(){
        setHasDetails(has => !has)
    }

    return (
        
            user ? (<div className="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                    <span className="controls">
                        <label>
                            <input type="checkbox" onChange={toggleDetails}/>
                            Show Details
                        </label>
                  </span>
                </div>
                 {hasDetails && <div className="user-details">
                     <h3>{user.title}</h3>
                     <p>{user.notes}</p>
                     </div>}
 
            </div>
            ): null
        
    )
}
