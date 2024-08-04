import React, {useEffect, useId, useRef} from 'react';

function App() {
    // useId 를 통한 Componenet 의 고유 ID 값을 생성할 수 있음
    return (
        <div>
            <MyInput />
            <hr/>
            <MyInput />
        </div>
    );
}

function MyInput() {
    // 문자열 형태, ID 값 반환
    const id = useId(); // :r0:
    // 1 개의 Componenet 에서, 각 Input 의 고유값을 지정할 경우, `id + tag` 형태로 지정한다.
    // JavaScript 에서의 Math.random Or UUID

    const ref = useRef();

    useEffect(() => {
        // useId 시스템을 안정적으로 사용 가능하다.
        // ServerSide Rendering 개발 시, 서버에서 Rendering 된 결과물과 Client 의 결과물이 일치해야하기 때문에, useId를 통해 안정성을 높일 수 있음
        // const element = document.querySelector(id); // id 의 " : " querySelector 동작 X
        const element = ref.current;
        // React 에서는 DOM 요소 접근시, useRef 사용으로 가능 (React 에서의 querySelector 사용 지양한다.)
        console.log(element);
    }, []);
    return (
        <div>
            <button id="btn">버튼</button><br/>
            <label htmlFor={`${id}-name`}>{`${id}-name`} 이름</label>
            <input id={`${id}-name`} ref={ref}/> <br/>
            <label htmlFor={`${id}-age`}>{`${id}-age`} 나이</label>
            <input id={`${id}-age`}/>
        </div>
    );
}

export default App;
