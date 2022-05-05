import React, { useEffect, useState } from "react";

function StopWatch() {

    const initial = 0;

    const [count, setCount] = useState(initial);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const intervel = setInterval(tick, 1000)
        return () => {
            clearInterval(intervel)
        }
    }, [])

    return (
        <div>
            <h1>Timer =  {count}</h1>
        </div>
    )
}

export default StopWatch