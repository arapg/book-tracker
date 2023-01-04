import { useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            });
    }, [url]);

    return {data, isLoading};
}

export default useFetch;