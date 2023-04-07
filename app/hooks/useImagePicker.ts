import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerOptions } from 'expo-image-picker';
import { AxiosContext } from "../context/Contexts";

const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    return response.blob();
    // return await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //
    //     // on load
    //     xhr.onload = function () {
    //         resolve(xhr.response);
    //     };
    //     // on error
    //     xhr.onerror = function (e) {
    //         console.log(e);
    //         reject(new TypeError("Network request failed"));
    //     };
    //     // on complete
    //     xhr.responseType = "blob";
    //     xhr.open("GET", uri, true);
    //     xhr.send(null)
    // });
};

export function useImagePicker({doUpload}) {
    const [imageUri, setImageUri] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const addImageToRecipe = async (imagePickerResult) => {
        // if (!recipeIdRef || !imagePickerResult) {
        //     return;
        // }
        //
        // const blob = await fetchImageFromUri(imageUri);
        setIsLoading(true);

        // const formData = new FormData();
        //
        // https://stackoverflow.com/questions/42521679/how-can-i-upload-a-photo-with-expoblob
        // formData.append('image', 'file://' + imageUri);
        const localUri = imagePickerResult.uri;
        const filename = localUri.split('/').pop();

        // Infer the type of the image
        const match = /\.(\w+)$/.exec(filename);
        const mime = match ? `image/${match[1]}` : `image`;

        //if (imagePickerResult.base64) {
        //    richTextRef.current?.insertImage(`data:${mime};base64,${imagePickerResult.base64}`);
        //}

        // Upload the image using the fetch and FormData APIs
        const formData = new FormData();

        // Assume "image" is the name of the form field the server expects
        /// @ts-ignore
        formData.append('image', { uri: localUri, name: filename, type: mime });

        await doUpload(formData);

        setIsLoading(false);
    }

    const pickImage = async () => {
        const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        } as ImagePickerOptions);

        // console.log(imagePickerResult)
        if (!imagePickerResult.cancelled) {
            // @ts-ignore
            setImageUri(imagePickerResult.uri);
            // @ts-ignore
            addImageToRecipe(imagePickerResult);
        }
    };

    return {
        pickImage,
        isLoading,
        imageUri,
    };
}