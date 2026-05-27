
const FormHandling = () => {
    return (
        <div>
            <h1>Form Handling In Reactjs</h1>

            <h4>Conlrolled Component</h4>
            <ul>
                <li>
                    const [name, setName] = useState();
                </li>
                <li>
                    const [email, setEmail] = useState();
                </li>
                <li>
                    {`<input type='text' value={name}/>`}
                </li>
                <li>
                    {`<input type='email' value={email} />`}
                </li>
                <li>
                    Re-render component
                </li>
                <li>
                    useState has own memory
                </li>
                <li>
                    useState remember old value
                </li>
            </ul>


            <h4>Unconlrolled Component</h4>
            <ul>
                <li>
                    const nameRef = useRef();
                </li>
                <li>
                    const emailRef = useRef();
                </li>
                <li>
                    {`<input type='text' ref={nameRef}/>`}
                </li>
                <li>
                    {`<input type='email' ref={emailRef} />`}
                </li>
                <li>
                    {`console.log(nameRef.current.value)`}
                </li>
                <li>
                    {`console.log(emailRef.current.value)`}
                </li>
                <li>
                    Not re-render component
                </li>
                <li>
                    useRef has not own memory
                </li>
                <li>
                    useRef not remember old value
                </li>
            </ul>

            <br />
            <br />


        </div >
    )
}

export default FormHandling