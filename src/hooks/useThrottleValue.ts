import { useState, useEffect, useRef } from "react";

const useThrottleValue = <T>(initialValue: T, delay: number): [T, T, React.Dispatch<T>] => {
    const [value, setValue] = useState<T>(initialValue);
    const valueRef = useRef(initialValue);
    const [throttleValue, setThrottleValue] = useState<T>(initialValue);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
        valueRef.current = value;

        const timeoutId = setTimeout(() => {
            setThrottleValue(value);
            setActive(false);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (active) {
            intervalId = setInterval(() => {
                // здесь замыкается переменная value, которая со временени становится неактуальной
                // для этого используется ссылка valueRef, значение которой не замыкается и всегда является актуальным
                // console.log(value, valueRef.current, Date.now());
                setThrottleValue(valueRef.current);
            }, delay);
        }
        return () => clearInterval(intervalId);
    }, [active]);

    return [value, throttleValue, setValue];
};

export default useThrottleValue;
