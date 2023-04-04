import React from "react";
import S from "./TextField.styled";

interface PropsType extends Omit<React.HTMLProps<HTMLInputElement>, "ref" | "as"> {
	label: string;
	error?: string;
	value: string;
	setValue?: (value: string) => void;
	inputRef?: React.RefObject<HTMLInputElement>;
}

const TextField: React.FC<PropsType> = ({
	label,
	value,
	setValue,
	error,
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
			<label>
				<S.hiddenLabel>{label}</S.hiddenLabel>
				<S.input
					ref={inputRef}
					type="text"
					value={value}
					onChange={onChange}
					{...props}
				/>
			</label>
			{error && (
				<S.error>
					{error}
				</S.error>
			)}
        </S.container>
	);
}

export default TextField;
