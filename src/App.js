import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  function handleStepminus() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleStepplus() {
    setStep((step) => step + 1);
  }
  function handleCounterminus() {
    setCounter((counter) => counter - step);
  }
  function handleCounterPlus() {
    setCounter((counter) => counter + step);
  }
  const date = new Date();
  date.setDate(date.getDate() + counter);

  return (
    <div className="container">
      <p>
        <button onClick={handleStepminus}>&minus;</button>
        <span>Steps:{step}</span>

        <button onClick={handleStepplus}>&#43;</button>
      </p>
      <p>
        <button onClick={handleCounterminus}>&minus;</button>
        <span>Counter:{counter}</span>
        <button onClick={handleCounterPlus}>&#43;</button>
      </p>
      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is`
            : `${counter} days ago was`}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}

// Today is {date.toDateString()}
