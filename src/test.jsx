import { useState } from "react"
import { useEffect } from "react";

export default function MyAnim() {
    const [line, setLine] = useState(">");
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        console.log('another commit');
    })

    if (isRunning) {
        periodicChange();
    }

    function handleClick() {
        setIsRunning(!isRunning);
    }

    function periodicChange() {
        if (line.length < 10) {
            setTimeout(() => {
                setLine(line + ">");
            }, 200)
        } else {
            setLine(">")
        }
    }

    return (
        <>
            <div>
                {line}
            </div>
            <button onClick={handleClick}>
                myButton
            </button>
        </>
    )
}