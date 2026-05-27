import { useRef } from 'react'

const UncontrolledCom = () => {
    const nameRef = useRef()
    const emailRef = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("nameRef : ", nameRef.current.value);
        console.log("emailRef : ", emailRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}
            >
                <h4>Uncontrolled Component Form Handling</h4>
                <input type="text" ref={nameRef} placeholder="Enter Name" />
                <br />
                <br />
                <input type="email" ref={emailRef} placeholder="Enter Email" />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledCom