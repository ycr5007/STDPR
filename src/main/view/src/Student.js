import React from "react";

const Student = ({name, dispatch, id, isHere}) => {
    return (
        <div>
            <span style={{
                textDecoration: isHere ? 'line-through' : 'none',
                color: isHere ? 'lightgray' : 'black',
            }} onClick={() => {
                dispatch({type: "update", payload: {id}})
            }}>{name}</span>
            <button onClick={() => {
                dispatch({type: "delete", payload: {id}})
            }}>삭제</button>
        </div>
    )
}


export default Student;