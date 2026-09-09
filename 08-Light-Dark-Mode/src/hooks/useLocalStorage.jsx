import React, { useEffect, useState } from 'react'

const useLocalStorage = () => {

    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            let valueInLocalStorage = JSON.parse(localStorage.getItem('theme'));

            currentValue = valueInLocalStorage ? valueInLocalStorage : String('dark');

        } catch (error) {
            console.log(error);
            currentValue = String('dark');
        }
        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(value));
        console.log(value);
    }, [value])



    return [value, setValue]
}

export default useLocalStorage