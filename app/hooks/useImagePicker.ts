import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerOptions } from 'expo-image-picker';

export function useImagePicker({doUpload}) {
    const [imageUri, setImageUri] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const addImageToRecipe = async (imagePickerResult) => {
        setIsLoading(true);

        const localUri = imagePickerResult.uri;
        const filename = localUri.split('/').pop();

        // Infer the type of the image
        const match = /\.(\w+)$/.exec(filename);
        const mime = match ? `image/${match[1]}` : `image`;

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
        }
    };

    return {
        pickImage,
        isLoading,
        imageUri,
    };
}