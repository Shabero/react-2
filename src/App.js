import React, { useState } from 'react';
import './index.css';

// Calculator.js


const App = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAdd = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const handleSubtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const handleMultiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivide = () => {
        setResult(parseFloat(num1) / parseFloat(num2));
    };
    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubtract}>-</button>
                <button onClick={handleMultiply}>*</button>
                <button onClick={handleDivide}>/</button>
            </div>
            <div className="result">Result: {result}</div>
        </div>
    );
}

export default App;

