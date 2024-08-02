import React, {useState, useMemo, useEffect} from 'react';
import './App.css'

/*
    JavaScript Type
*   원시(Primitive) 타입 : 변수 내 값(value) 저장
        String, Number, Boolean, Null, Undefined, BigInt, Symbol
*   객체(Object) 타입 : value 에 메모리 주소를 지정하며, 메모리 내에 value 값을 저장
        Object, Array, ...
*/

const hardCalculate = (number) => {
    // console.log("Hard CalCulate");
    for(let i = 0; i < 99999999; i++) {}
    return number + 10000;
}

const easyCalculate = (number) => {
    // console.log("Easy CalCulate");
    return number + 1;
}

// 함수형 Component - State 변경 시, Rendering
// Rendering 시, 함수가 호출되며 변수가 초기화 되기 때문에 [hard, easy] 2개 모두 수행된다.
function App() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // Rendering 마다 실행됨
    // const hardSum = hardCalculate(hardNumber);

    // useMemo(callback, depndency arr)
    const hardSum = useMemo(() => {
        // memoize 값 reutrn
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const easySum = easyCalculate(easyNumber);

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // Object 타입의 경우, Rendering 을 통해 호출될 때마다 다른 주소값을 갖기 때문에, 의존성 주입이 불가능
    // const location = { country: isKorea ? '한국' : '외국',};

    // 이와 같이 Object 타입을 useMemo 를 통해 객체를 Memoize 하여 객체의 의존성 주입을 가능하게 할 수 있음
    const location = useMemo(() => {
        return { country: isKorea ? '한국' : '외국'}
    }, [isKorea]);

    useEffect(() => {
        console.log("useEffect 호출");
    }, [location]);

    return (
        <div>
            <h3>Hard Calculator</h3>
            <input type="number" value={hardNumber}
                   onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
            <span> + 10000 = {hardSum}</span> <br/>
            <input type="number" value={easyNumber}
                   onChange={(e) => setEasyNumber(parseInt(e.target.value))}/>
            <span> + 1 = {easySum}</span>
            <hr/>
            <div>
                <h3>하루에 몇끼 먹어요?</h3> <br/>
                <input type="number" value={number}
                    onChange={(e) => setNumber(e.target.value)}/>
                <hr/>
                <h3>어느 나라에 있어요?</h3> <br/>
                <p>나라 : {location.country}</p>
                <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
            </div>
        </div>
    );
}

export default App;
