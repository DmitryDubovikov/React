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

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
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
    </div>
  );
}
