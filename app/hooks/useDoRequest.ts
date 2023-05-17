import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiError from "../api/ApiError";

export function useDoRequest<T>({ mutateFn, cacheKey, setData }) {
    const [errorMessage, setErrorMessage] = useState(null);

    const queryClient = useQueryClient()

    const { isLoading, isError, mutate } = useMutation(mutateFn, {
        onMutate: async (newData) => {
            await queryClient.cancelQueries({ queryKey: cacheKey })

            // Uncomment this to do optimistic updates
            // queryClient.setQueryData(cacheKey, () => {
            //     //@ts-ignore
            //     old => [...old, ...newData]
            // })

            // Return context with the optimistic recipe
            return newData;
        },
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({queryKey: cacheKey})
            setData(data)
        },
        onError: (e) => {
            if (e instanceof ApiError && e.messages) {
                setErrorMessage(e.messages[0]);
            }
        }
    })

    return {
        mutate,
        errorMessage,
        setErrorMessage,
        isLoading,
        isError,
    }
}
