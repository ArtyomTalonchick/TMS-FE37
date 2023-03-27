import { useState, useEffect } from "react";

const useDebounceValue = <T>(initialValue: T, delay: number): [T, T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(initialValue);
    const [debounceValue, setDebounceValue] = useState<T>(initialValue);

    useEffect(() => {
        const timeoutId = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return [value, debounceValue, setValue];
};

export default useDebounceValue;
