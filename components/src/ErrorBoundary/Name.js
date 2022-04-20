import React from "react";

function Name({name}) {

    if(Number.isInteger(name) === true) {
        throw new Error('Not a Name')
    }

    return (
        <di>
            {name}
        </di>
    )
}

export default Name