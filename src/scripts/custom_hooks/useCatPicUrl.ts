import { useState, useEffect } from 'react';

const useCatPicUrl = () => {
    const [catImageUrl, setCatImageUrl] = useState('');
    useEffect(() => {
        const getCatPicUrl = async () => {
            return await fetch('https://aws.random.cat/meow')
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    setCatImageUrl(json.file);
                });
        };
        getCatPicUrl();
    }, []);

    return catImageUrl;
};

export default useCatPicUrl;
