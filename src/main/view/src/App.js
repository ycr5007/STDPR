import React, {useState, useMemo, useCallback} from 'react';
import Child from "./Child";

function App() {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    }

    console.log('Parent Component Rendering !');

    // Object 의 경우, Parent Component 가 Rendering 될 때, 다른 해시값을 가지며,
    // React.Memo 를 통해 전달하는 Props 의 변화로 인지하여 Child Component 가 Rendering 된다. (useMemo 사용을 통해 해결)
    const name = useMemo(() => {
        return {
            lastName: '홍',
            firstName: '길동',
        }
    }, []);

    // Function 의 경우도 위와 마찬가지로 다른 해시값을 가지며,
    // React.memo 를 통해 전달하는 Props 의 변화로 인지하여 Child Component 가 Rendering 된다. (useCallback 사용을 통해 해결)
    const tellMe = useCallback(() => {
        console.log("Run Callback Function")
    }, []);

    return (
        <div style={{border: '2px solid navy', padding: '10px'}}>
            <h1>👪부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            <Child name={name} tellMe={tellMe}/>
        </div>
    );
}

export default App;
