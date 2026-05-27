import useCounter from '../hooks/useCounter';

const buttonStyle = {
    padding: "10px 20px",
    margin: "8px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
};


const ChildOne = () => {
    const { count, increase, decrease, reset } = useCounter(0)

    return (
        <div>
            <div>
                <h1>Count : {count}</h1>

                <button
                    onClick={increase}
                    style={{ ...buttonStyle, backgroundColor: "green" }}
                >Increase</button>

                <button
                    onClick={decrease}
                    style={{ ...buttonStyle, backgroundColor: "red" }}
                >Decrease</button>

                <button
                    onClick={reset}
                    style={{ ...buttonStyle, backgroundColor: "blue" }}
                >Reset</button>
            </div>
        </div>
    )
}

export default ChildOne