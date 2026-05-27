import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const GrandChild = () => {
    const user = useContext(UserContext)
    return (
        <div>Grand Child Component

            <h2>     {user.name}</h2>
            <h2>     {user.email}</h2>
        </div>
    )
}

export default GrandChild