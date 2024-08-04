import React, {useEffect, useState} from "react";

export function useFetch(baseUrl, initialType) {
    const [data, setData] = useState(null);

    const fetchUrl = (type) => {
        // dummy Json Data (posts, users, todos...)
        fetch(baseUrl + '/' + type)
            .then((res) => res.json())
            .then((res) => setData(res));
    }

    useEffect(() => {
        fetchUrl(initialType);
    }, []);

    return {
        data,
        fetchUrl
    }
}