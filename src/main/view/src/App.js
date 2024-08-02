import React, {useState, useEffect, useCallback} from 'react';
import './App.css'

import Box from "./Box";

function App() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);
    // Rendering 시, 해당 함수가 다시 선언되며 다른 메모리 주소값을 갖기 때문에 useEffect 에서 의존성을 갖지 못한다.
    // const someFunction = () => {
    //     console.log(`someFunc number :  ${number}`);
    //     return;
    // };

    const someFunction = useCallback (() => {
        console.log(`someFunc number :  ${number}`);
        return;
    }, [number]);

    // The 'someFunction' function makes the dependencies of useEffect Hook (at line 15) change on every render. To fix this, wrap the definition of 'someFunction' in its own useCallback() Hook  react-hooks/exhaustive-deps
    useEffect(() => {
        console.log(`Changed someFunc !!`);
    }, [someFunction]);

    const [size, setSize] = useState(100);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <div>
            <input type="number" value={number}
                onChange={(e) => setNumber(e.target.value) }/>
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br/>
            <button onClick={someFunction}>Call someFunc</button>

            <div>
                <input type="number" value={size}
                    onChange={(e) => setSize(e.target.value)}/>
                <Box createBoxStyle={createBoxStyle}/>
            </div>
        </div>
    );
}

export default App;
