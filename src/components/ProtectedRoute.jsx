import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    // const [user, setUser] = useState(true)
    const user = false

    if (!user) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute