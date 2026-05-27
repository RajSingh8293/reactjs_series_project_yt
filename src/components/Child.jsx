import React from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Child Rendered");

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={() => onClick("Raj")}>Child Button</button>
        </div>
    );
});

export default Child;