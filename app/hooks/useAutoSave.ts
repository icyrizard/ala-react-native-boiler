import { useRef } from "react";

export function useAutoSave(doSave) {
    const timeout = useRef<NodeJS.Timeout | null>(null);

    function autoSave(data) {
        // const newData = {...currentData.current, ...data};
        // console.log({newData})
        // setData(newData)

        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            doSave(data);
        }, 1000);
    }

    return {
        autoSave,
    }
}

