import {useRef} from "react";

export function useThrottle(callback, delay) {
    const lastRun = useRef(Date.now());

    return () => {
        const timeElapsed = Date.now() - lastRun.current;
        if(timeElapsed >= delay) {
            // Run Callback Function
            callback();
            lastRun.current = Date.now();
        }
    }
}