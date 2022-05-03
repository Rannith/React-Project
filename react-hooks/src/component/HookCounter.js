import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(
            count + 1
        )
    }

    return (
        <div>
            <button onClick={increament}> Click {count}</button>
        </div>
    )
}

export default HookCounter