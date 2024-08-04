import React, {useEffect, useState} from 'react';
import {useInput} from "./useInput";
import {useFetch} from "./useFetch";

function displayMessage(message) {
    alert(message);
}

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
    /* custom Hooks (useInput)
        const [inputValue, setInputValue] = useState('');

        const handleChange = (e) => {
            setInputValue(e.target.value);
        }

        const handleSubmit = () => {
            alert(inputValue);
            setInputValue('');
        }
    */
    const [inputValue, handleChange, handleSubmit] = useInput("Hi", displayMessage);

    /* custom Hooks (useFetch)
        const [data, setData] = useState(null);

        const fetchUrl = (type) => {
            // dummy Json Data (posts, users, todos...)
            fetch(baseUrl + '/' + type)
                .then((res) => res.json())
                .then((res) => setData(res));
        }

        useEffect(() => {
            fetchUrl("users");
        }, []);
    */

    const {data: userData} = useFetch(baseUrl, "users");
    const {data: postData} = useFetch(baseUrl, "posts");

    return (
        <div>
            <h1>useInput</h1>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={handleSubmit}>확인</button>
            <hr/>
            <h1>useFetch - USER</h1>
            {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
            <h1>useFetch - POST</h1>
            {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
        </div>
    );
}

export default App;
