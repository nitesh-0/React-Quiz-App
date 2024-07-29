import { useState, useEffect } from "react"
import "./App.css"
import Trivia from "./components/Trivia"
import data from "./components/Data"
import Timer from "./components/Timer"
import Start from "./components/Start"

function App() {
  const [username, setUsername] = useState("")
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stopwatch, setStopwatch] = useState(false)   //stopwatch false indicates the time is not stopped and the game is running
  const [earning, setEarning] = useState("$ 0")


  const moneyPyrammid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1,000" },
    { id: 6, amount: "$ 2,000" },
    { id: 7, amount: "$ 4,000" },
    { id: 8, amount: "$ 8,000" },
    { id: 9, amount: "$ 16,000" },
    { id: 10, amount: "$ 32,000" },
    { id: 11, amount: "$ 64,000" },
    { id: 12, amount: "$ 125,000" },
    { id: 13, amount: "$ 250,000" },
    { id: 14, amount: "$ 500,000" },
    { id: 15, amount: "$ 1,000,000" },
  ].reverse()

  useEffect(() => {
    questionNumber > 1 &&
      setEarning(moneyPyrammid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyrammid]);

  function handleRestart(){
    setQuestionNumber(1);
    setStopwatch(false);
    setEarning("$ 0"); // Reset earning if needed
  }

  return (
    <div className="app">
      {username ? <>
      <div className="main">
        {stopwatch ? <div className="endText"><h1 className="endgame">Congratulations! You Won {earning}</h1> <button className="restart" onClick={handleRestart}>Play Again</button></div> :<>
    <div className="top">
     <div className="timer"><Timer setStopwatch = {setStopwatch} questionNumber = {questionNumber}></Timer></div>
   </div>
   <div className="bottom"><Trivia 
   data = {data} 
   setStopwatch = {setStopwatch}
   questionNumber = {questionNumber}
   setQuestionNumber = {setQuestionNumber}></Trivia></div>
   </> }
        </div>
       
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyrammid.map((m) => {
            return (
              <li className= {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}  key={m.id}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
      </> : <Start setUsername = {setUsername}></Start>}
      
    </div>
  );
}



export default App;

