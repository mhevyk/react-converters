import { useEffect, useRef } from 'react';

type Timeout = ReturnType<typeof setTimeout>;

export default function useConditionalTimeout(callback: Function, delay: number, condition: boolean) {
    const timeoutRef = useRef<Timeout>();
    const savedCallback = useRef<Function>(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (condition && delay) {
            const timeout = () => savedCallback.current();
            timeoutRef.current = setTimeout(timeout, delay);
            return () => clearTimeout(timeoutRef.current);
        }
    }, [delay, condition]);

    return timeoutRef;
};