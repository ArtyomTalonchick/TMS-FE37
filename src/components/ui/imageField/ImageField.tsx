import { useEffect, useState } from "react";
import C from "../../../styledComponents";
import S from "./ImageField.styled";

interface PropsType {
    setValue: (v: string) => void;
}

const getBase64 = async (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise<string>((resolve, reject) => {
        reader.onload = function () {
            resolve(reader.result as string);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
};

const ImageField: React.FC<PropsType> = ({
    setValue,
}) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    
    useEffect(() => {
        const updateBase64 = async () => {
            const base64 = selectedImage ? await getBase64(selectedImage) : "";
            setValue(base64);
        };
        updateBase64();
    }, [selectedImage]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        const newImage = event.target.files?.[0] || null;
        setSelectedImage(newImage);
    };

    const handleClear = () => {
        setInputValue("");
        setSelectedImage(null);
    };

    return (
        <S.container>
            <S.label>
                <input
                    value={inputValue}
                    type="file"
                    accept="image/png"
                    hidden
                    onChange={onChange}
                />
                {!selectedImage ? "Add image" : "Update image"}
            </S.label>
            {selectedImage && (
                <>
                    <S.img
                        alt="not found"
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <C.button type="button" onClick={handleClear}>
                        Clear
                    </C.button>
                </>
            )}
        </S.container>
    );
};

export default ImageField;
