import { useState } from 'react'

const MultipleValueForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    })


    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value

        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("formData : ", formData);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}
            >
                <h4>Form Handling Multiple Values</h4>
                <input type="text" name="name" value={formData.name} onChange={onChangeHandler} placeholder="Enter Name" />
                <br />
                <br />
                <input type="email" name="email" value={formData.email} onChange={onChangeHandler} placeholder="Enter Email" />
                <br />
                <br />
                <input type="number" name="age" value={formData.age} onChange={onChangeHandler} placeholder="Enter Age" />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MultipleValueForm