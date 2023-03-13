import React, { useState } from "react";
import { authActions } from "../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import C from "../../styledComponents";
import TextField from "../ui/textField/TextField";
import S from "./LoginForm.styled";

const LoginForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();
	const accessToken = useAppSelector((state) => state.auth.access);
	const refreshToken = useAppSelector((state) => state.auth.refresh);
	const errorText = useAppSelector((state) => state.auth.error);

	const onSumbit = (event: React.FormEvent) => {
		event.preventDefault();

		console.log(email, password);
		dispatch(authActions.createToken({email, password}));
	}

	return (
		<S.container onSubmit={onSumbit}>
			Login
			{accessToken}
			{refreshToken}
			<TextField
				label="Email"
				value={email}
				setValue={setEmail}
			/>
			<TextField
				label="Password"
				value={password}
				setValue={setPassword}
			/>
			<C.button type="submit">
				Login
			</C.button>
			<S.error>
				{errorText}
			</S.error>
		</S.container>
	);
}

export default LoginForm;
