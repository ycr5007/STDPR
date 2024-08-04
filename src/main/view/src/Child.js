import React, {memo} from "react";

const Child = ({name, tellMe}) => {
    console.log('Child Component Rendering !');
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>😊자녀</h3>
            <p>성 : {name.lastName}</p>
            <p>이름 : {name.firstName}</p>
            <button onClick={tellMe}>CallBackFunc</button>
        </div>
    )
}

// Componenet 가 받고있는 Props 의 변화를 감지하며, 변화가 있을 때, Child Component 를 Rendering 한다.
export default memo(Child);
