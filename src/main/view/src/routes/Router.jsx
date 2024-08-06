import React, {useState, useEffect} from "react";
import axios from "axios";

function Router () {

    const [hello, setHello] = useState('')
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <h2 className="sample">This Is Sample Data List</h2>
            <ul className="sample-data-list">
                <li className="test-data1">response : {hello}</li>
                <li className="test-data2"></li>
                <li className="test-data3"></li>
                <li className="test-data4"></li>
                <li className="test-data5"></li>
            </ul>
        </div>
    )
}

export default Router;