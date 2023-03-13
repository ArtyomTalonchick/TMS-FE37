import React from "react";
import S from "./TextField.styled";

export interface TextFieldPropsType {
    label: string;
    value: string;
    setValue: (value: string) => void;
};


const TextField: React.FC<TextFieldPropsType> = ({
    label,
    value,
    setValue,
}) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
    };

	return (
        <S.container>
            <S.legend>
                {label}
            </S.legend>
            <S.input type="text" onChange={onChange} value={value} />
        </S.container>
	);
}

export default TextField;
