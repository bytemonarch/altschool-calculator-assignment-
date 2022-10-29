import { useState } from 'react';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const opSigns = ['+', '-', '*', '/', '.', '='];

  const updateCalc = value => {
    if (
      (opSigns.includes(value) && calc === '') || (opSigns.includes(value) && opSigns.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!opSigns.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString()); 
  }

  const clearLast = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          { result ? <span>({result})</span> : '' }&nbsp;
          { calc || "0" }
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("/")}>/</button>

          <button onClick={clearLast}>C</button>
        </div>
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
