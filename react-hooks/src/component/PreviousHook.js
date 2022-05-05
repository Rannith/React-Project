import React, { useState }  from "react";

function PreviousHook() {

    const initialruns = 0;
    const [runs, setruns] = useState(initialruns);
    const [wicket, setWicket] = useState(initialruns);

    const reset = () => {
        setruns(initialruns);
        setWicket(initialruns);
    }

    const out = () => {
        wicket < 10 &&
        setWicket(
            wicket + 1
        )
    }

    const run = () => {
        setruns(
            runs + 1
        )
    }

    const fourRun = () => {
        for(let i = 0;i < 4;i++) {
            setruns(prevruns => prevruns + 1)
        }
    }

    const sixRun = () => {
        for(let i =0;i < 6;i++) {
            setruns(prevruns => prevruns + 1)
        }
    }

    return (
        <div>
            <h1>CSK {runs}/{wicket}</h1>
            <button onClick={run}>Run 1</button>
            <button onClick={fourRun}>Run 4</button>
            <button onClick={sixRun}>Run 6</button>
            <button onClick={out}>Wicket</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}

export default PreviousHook