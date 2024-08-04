import React, {useState, useReducer} from 'react';
import Student from "./Student";

const ACTION = {
    UP: "up",
    DOWN: "down",
}

const reducer = (state, action) => {
    // state : 매개변수 호출 시 지정되어있는 state 값을 갖는다.
    // action : state 변경에 대한 요구 내용
    switch (action.type) {
        case ACTION.UP :
            return state + action.modiNum;
        case ACTION.DOWN :
            return state - action.modiNum;
        default :
            return state;
    }
}

const reducerStudent = (state, action) => {
    switch(action.type) {
        case "add" :
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            }
            return {
                count: state.count + 1,
                studentList: [...state.studentList, newStudent],
            };
        case "delete" :
            return {
                count: state.count - 1,
                studentList: state.studentList.filter(student => student.id !== action.payload.id),
            };
        case "update" :
            return {
                count : state.count,
                studentList: state.studentList.map((student) => {
                    if(student.id === action.payload.id) {
                        return {...student, isHere: !student.isHere}
                    }
                    return student;
                }),
            }
        default :
            return state;
    }
}

const initialState = {
    count: 0,
    studentList: [],
}
function App() {
    const [number, setNumber] = useState(0);
    const [chanNum, dispatch] = useReducer(reducer, 0);

    const [name, setName] = useState("");
    const [studentsInfo, nameDispatch] = useReducer(reducerStudent, initialState);
    return (
        <div>
            <h2>useReducer setNumberTest</h2>
            <p>num : {chanNum}</p>
            <input type="number" value={number} step="1000"
                onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => {
                dispatch({type: ACTION.UP, modiNum: number});
            }}>Up</button>
            <button onClick={() => {
                dispatch({type: ACTION.DOWN, modiNum: number});
            }}>Down</button>

            <hr/>

            <h1>출석부</h1>
            <p>총 학생 : {studentsInfo.count}</p>
            <input type="text" placeholder="이름을 입력해주세요." value={name}
                onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => {
                nameDispatch({type: "add", payload: {name}})
            }}>추가</button>
            {studentsInfo.studentList.map(student => {
                return (<Student key={student.id} name={student.name} dispatch={nameDispatch} id={student.id} isHere={student.isHere}/>)
            })}
        </div>
    );
}

export default App;
