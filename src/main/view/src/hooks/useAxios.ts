import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig, AxiosRequestConfig} from "axios";
import {useEffect, useState} from "react";

axios.defaults.baseURL = '';

export function useAxios (axiosParams: RawAxiosRequestConfig, deps = []) {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig) => {
        await axios.request(params)
            .then(response => {
                setResponse(response);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchData(axiosParams);
    }, deps);

    return { response, error, loading }
}