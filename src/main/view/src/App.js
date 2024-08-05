import React, {useState} from 'react';
import "./App.css";
import {useThrottle} from "./useThrottle";

function hackLottoNumbers() {
    console.log("Create Lotto Numbers");
    const lottoNumbers = [];
    for(let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.push(number);
    }
    return lottoNumbers;
}

function App() {
    const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

    // const lastRun = useRef(Date.now());

    // const handleClick = () => {
    //     // create lotto numbers
    //     const timeElapsed = Date.now() - lastRun.current;
    //     if(timeElapsed >= 1000) {
    //         const result = hackLottoNumbers();
    //         setLottoNumbers(result);
    //         lastRun.current = Date.now();
    //     }
    // }

    // useThrottle Custom Hooks
    const handleClick = useThrottle(() => {
        const result = hackLottoNumbers();
        setLottoNumbers(result);
    }, 1000)

    return (
        <div className="container">
            <h1 className="title">Happy Lotto</h1>
            <button className="button" onClick={handleClick}>Roll</button>
            <div className="numbers">
                {lottoNumbers.map((number, idx) => (
                    <span key={idx} className="number">{number}</span>
                ))}
            </div>
        </div>
    );
}

export default App;