import { useState } from 'react'

const FormValidation = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email) {
            setError("All fileds are required")
        } else {
            setError("")
            alert("Submitted form")
        }
        console.log("name : ", name);
        console.log("email : ", email);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}
            >
                <h4>Form Validation Handling</h4>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                <br />
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                <br />
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Submit</button>
            </form>


        </div>
    )
}

export default FormValidation