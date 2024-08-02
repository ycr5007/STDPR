import React, {useEffect, useState} from "react";

function Box({createBoxStyle}) {
    const [style, setStyle] = useState({})

    useEffect(() => {
        console.log("BOX SIZE UP !!");
        setStyle(createBoxStyle());
    }, [createBoxStyle]);
    return <div style={style}></div>
}
export default Box;