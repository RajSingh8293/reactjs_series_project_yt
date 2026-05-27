import { useState } from "react"


const AdvanceForm = () => {
    const [formData, setFormData] = useState({
        gender: "",
        agree: false,
        country: "India",
    })


    const onChangeHandler = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value

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
                <h4>Advance Form Handling</h4>
                <label>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={onChangeHandler} />
                    Male
                </label>
                <br />
                <br />
                <label>
                    <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={onChangeHandler} />
                    Female
                </label>
                <br />
                <br />
                <select name="country" value={formData.country} onChange={onChangeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </select>
                <br />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={onChangeHandler} />
                    Agree terms and conditions
                </label>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AdvanceForm