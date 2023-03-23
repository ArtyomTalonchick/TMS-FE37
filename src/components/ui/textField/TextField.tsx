import React from "react";
import S from "./TextField.styled";

interface PropsType extends Omit<React.HTMLProps<HTMLInputElement>, "ref" | "as"> {
	label: string;
	value: string;
	setValue?: (value: string) => void;
	inputRef?: React.RefObject<HTMLInputElement>;
}

const TextField: React.FC<PropsType> = ({
	label,
	value,
	setValue,
	inputRef,
	...props
}) => {

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue?.(newValue);
	};

	return (
		<S.container>
        	<S.legend>
				{label}
			</S.legend>
			<S.input
				ref={inputRef}
				type="text"
				value={value}
				onChange={onChange}
				{...props}
			/>
        </S.container>
	);
}

export default TextField;
