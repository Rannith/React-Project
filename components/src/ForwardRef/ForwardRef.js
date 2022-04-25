import React from "react";

const ForwardRef = React.forwardRef((probs, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}) 

export default ForwardRef