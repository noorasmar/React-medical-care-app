import { useState } from 'react';

const useImageToBinary = () => {
const [imgBinary, setBinaryString] = useState('');

const convertToBinaryString = (file) => {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
        resolve(reader.result);
    };

    reader.onerror = (error) => {
        reject(error);
    };

    reader.readAsBinaryString(file);
    });
};

const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
    const binaryData = await convertToBinaryString(file);
    setBinaryString(binaryData);
    }
};

    return { imgBinary, handleImageUpload };
};

export default useImageToBinary;