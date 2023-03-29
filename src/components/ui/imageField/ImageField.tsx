import React, { useEffect, useState } from "react";
import C from "../../../styledComponents";
import S from "./ImageField.styled";

type PropsType = {
    setValue: (value: string) => void;
};

const MAX_FILE_SIZE = 1e5;

const getBase64 = async (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<string>((resolve, reject) => {
        reader.onload = function() {
            const result = reader.result as string;
            resolve(result);
        };
    
        reader.onerror = function(error) {
            reject(error)
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

    const onClear = () => {
        setSelectedImage(null);
        setInputValue("");
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        if (!file) {
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            alert("Слишком большой файл");
            onClear(); // HOTFIX
        } else {
            setInputValue(event.target.value);
            setSelectedImage(file);
        }

    };

    return (
        <S.container>
            <S.label>
                <input
                    value={inputValue}
                    type="file"
                    accept="image/*"
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
                    <C.button type="button" onClick={onClear}>
                        Clear
                    </C.button>
                </>
            )}
          
        </S.container>
    )
};

export default ImageField;
