import { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function useOnFocus(onFocus: Function) {
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            console.log('In inFocused Block', onFocus);
            // loadData();
            onFocus();
        }
    }, [isFocused]);
}
