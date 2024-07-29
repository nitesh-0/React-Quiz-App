import { useEffect, useState } from "react"

export default function Timer({setStopwatch, questionNumber}){
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if(timer === 0) return setStopwatch(true)
        const interval = setInterval(() => {
         setTimer((prev) => prev-1)
     }, 1000)

     return () => clearInterval(interval)
    }, [ timer])

    useEffect(() => {
      setTimer(30)
    }, [questionNumber])
    
return timer
}