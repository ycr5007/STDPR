import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

function getNumbers() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

function App() {
    const [count, setCount] = useState(0);

    // Component 가 화면에 그려진 이후 실행 ( 비동기적 실행 )
    // useEffect(() => {
    //     console.log("useEffect : ", count);
    // }, [count]);

    // Component 가 화면에 그려지기 이전에 실행 ( 동기적 실행, 무거운 작업 | 사용량이 많을 경우 App 이 무거워질 수 있음 )
    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect : ", count);
    // }, [count]);

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const [numbers, setNumbers] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const nums = getNumbers();
        setNumbers(nums);
    }, []);

    // 사용자에게 보여지는 UI 를 조금 더 정교하게 동작해야하는 경우, useLayoutEffect 를 사용한다
    useLayoutEffect(() => {
        if(numbers.length === null) {
            return;
        }

        // 지연 발생
        for(let i = 0; i < 30000000; i++) {}

        ref.current.scrollTop = ref.current.scrollHeight;
    }, [numbers]);
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={handleCountUpdate}>Update</button>
            <hr/>
            <button onClick={() => setNumbers([])}>Reset</button>
            <div ref={ref} style={{
                height: "300px",
                border: "1px solid blue",
                overflow: "scroll",
            }}>
                {numbers.map((number, idx) => <p key={idx}>{number}</p>)}
            </div>
        </div>
    );
}


export default App;
