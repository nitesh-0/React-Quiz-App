import { useEffect, useState } from "react";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStopwatch,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    console.log('Data:', data);
    console.log('Question Number:', questionNumber);
    if (data && data[questionNumber - 1]) {
      setQuestion(data[questionNumber - 1]);
    } else {
      setQuestion(null);
    }
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(3000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);  // Changed setQuestion to setQuestionNumber
        if(questionNumber === 15){
          setStopwatch(true); 
        }
        
      } else {
        setStopwatch(true); 
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers?.map((a) => (
          <div
            key={a.text} // Added key to ensure each element is unique
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
