import { useState } from 'react';
import useCache from './usecache';

// Define your fake API function
const fakeAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API_called")
            resolve([
                "amit", "sumit", "juy", "iuyuh", "zrt", "dfrew"
            ]);
        }, 1000);
    });
};


// Define your custom hoo
const useFakeAPI = () => {
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(false);
    const [cachedValue, updateCache] = useCache({});

    function getUniqueChars(inputString) {
        const uniqueChars = [];
        for (let char of inputString) {
            if (!uniqueChars.includes(char)) {
                uniqueChars.push(char);
            }
        }
        return uniqueChars;
    }
    const refine = (res, word) => {
        let words = getUniqueChars(word)
        console.log(words)
        let news_res = [];
        for (let val of res) {
            for (let char1 of words) {
                if (val.includes(char1)) {
                    if (!news_res.includes(val)) {
                        news_res.push(val)
                    }
                }
            }
        }
        return news_res;
    }
    const fetchData = (word) => {
        if (cachedValue(word)) {
            console.log(cachedValue(word))
            let m = [...cachedValue(word)];
            setData(m)
        }
        else {
            setLoading(true);
            fakeAPI()
                .then(response => {

                    let nres = refine(response, word);
                    setData([...nres]);
                    updateCache(word, nres)

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };
    return {
        data,
        loading,
        fetchData
    };
};
export default useFakeAPI;