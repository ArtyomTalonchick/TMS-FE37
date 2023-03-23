import { useState, useEffect } from "react";

const useThrottleValue = (value: string, delay: number) => {
    const [throttle, setThrottle] = useState(value);
    const [active, setActive] = useState(false);
    // const [intervalId, setintervalId] = useState<NodeJS.Timeout>(null);

    // const updateThrottleValue = () => {

    // }

    useEffect(() => {
        setActive(true);

        const timeoutId = setTimeout(() => setActive(false), delay);
        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (active) {
            intervalId = setInterval(() => {
                console.log(value);
                setThrottle(value);
            }, delay);
        }
        return () => clearInterval(intervalId);
    }, [active]);

    return throttle;
};

export default useThrottleValue;
