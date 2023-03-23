import { useState, useEffect } from "react";

const useDebounceValue = (value: string, delay: number) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return debounce;
};

export default useDebounceValue;
