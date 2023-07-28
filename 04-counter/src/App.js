import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [cnt, setCnt] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + cnt);

  function handleReset() {
    setCnt(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Step: {step}</span>
      </div>

      <div>
        <input
          type="text"
          value={cnt}
          onChange={(e) => setCnt(Number(e.target.value))}
        />
        <button onClick={() => setCnt((c) => c - step)}>-</button>
        <span>Count: {cnt}</span>
        <button onClick={() => setCnt((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {cnt === 0
            ? "Today is "
            : cnt > 0
            ? `${cnt} days from today is `
            : `${Math.abs(cnt)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {cnt !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
