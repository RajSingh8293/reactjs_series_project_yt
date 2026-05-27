import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("name : ", name);
        console.log("email : ", email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}
            >
                <h4>Form Handling</h4>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                <br />
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form