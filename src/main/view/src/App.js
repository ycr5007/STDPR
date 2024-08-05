import React, {useEffect, useState} from 'react';
import "./App.css";
import {useDebounce} from "./Debounce";

function fetchDataFromServer(value) {
    if(!value) {
        return [];
    }

    console.log("From Server Data...");

    const users = [
        {name: "김철수", age: "22"},
        {name: "이영희", age: "23"},
        {name: "김민수", age: "27"},
        {name: "홍길동", age: "32"},
        {name: "홍민영", age: "21"},
        {name: "김종민", age: "52"},
    ];

    return users.filter(user => user.name.startsWith(value));
}

function App() {
    const [input, setInput] = useState("");
    // const [debouncedInput, setDebouncedInput] = useState(input);
    const debouncedInput = useDebounce(input, 300); // Custom Hooks ( useDebounce )
    const [result, setResult] = useState([]);

    // useEffect(() => {
    //     const timerID= setTimeout(() => {
    //         setDebouncedInput(input);
    //     }, 1000);
    //
    //     // useEffect CleanUp 함수를 활용해, 반복해서 일어나는 timer 는 CLear 하고, 마지막으로 실행된 timer 만 정상적으로 처리될 수 있게 한다.
    //     return () => {
    //         clearTimeout(timerID);
    //     }
    // }, [input]);

    // onChange 이벤트로 인해, input 값이 변경될 떄마다 호출한다. ( 서버 자원 낭비 )
    // useEffect(() => {
    //     const users = fetchDataFromServer(input);
    //     setResult(users);
    // }, [input]);

    useEffect(() => {
        const users = fetchDataFromServer(debouncedInput);
        setResult(users);
    }, [debouncedInput]);

    return (
        <div className="container">
            <div className="search-container">
                <input type="text" placeholder="Search" value={input}
                    onChange={(event) => setInput(event.target.value)}/>
                <ul>
                    {result.map((user) => (
                        <li key={user.name}>
                            <span>{user.name}</span>
                            <span>{user.age}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;