import React, { useEffect, useState } from "react";

function TitleCounter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Title ${count} times`
    })

    const changeTitle = () => {
        setCount(
            count + 1
        )
    }

    return (
        <div>
            <button onClick={changeTitle} >Count {count} title</button>
        </div>
    )
}

export default TitleCounter
