import {useState} from "react";

export function useInput(initialValue, submitAction) {
    // Custom Hooks 의 경우, prefix 'use' 를 붙여 실행해야 react log 감지된다.
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        setInputValue('');
        submitAction(inputValue);
    }

    return [inputValue, handleChange, handleSubmit];
}