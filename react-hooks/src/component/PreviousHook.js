import React, { useState }  from "react";

function PreviousHook() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [wicket, setWicket] = useState(initialCount);

    const reset = () => {
        setCount(initialCount);
        setWicket(initialCount);
    }

    const out = () => {
        setWicket(
            wicket + 1
        )
    }

    const run = () => {
        setCount(
            count + 1
        )
    }

    const fourRun = () => {
        for(let i = 0;i < 4;i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const sixRun = () => {
        for(let i =0;i < 6;i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h1>CSK {count}/{wicket}</h1>
            <button onClick={run}>Run 1</button>
            <button onClick={fourRun}>Run 4</button>
            <button onClick={sixRun}>Run 6</button>
            <button onClick={out}>Wicket</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}

export default PreviousHook