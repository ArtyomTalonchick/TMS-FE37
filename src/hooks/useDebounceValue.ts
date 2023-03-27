import { useState, useEffect } from "react";

const useDebounceValue = <T>(initialState: T, delay: number): [T, T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(initialState);
    const [debounce, setDebounce] = useState<T>(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return [value, debounce, setValue];
};

export default useDebounceValue;
