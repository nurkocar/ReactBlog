import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                })
        }, 1000);
    }, [url])
    return { data, isPending }
}

export default useFetch;