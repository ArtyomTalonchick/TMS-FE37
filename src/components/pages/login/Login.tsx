import React, { useState } from "react";
import { authActions } from "../../../store/auth/authSlice";
import { useAppDispatch } from "../../../store/store";
import C from "../../../styledComponents";
import TextField from "../../ui/textField/TextField";
import S from "./Login.styled";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(authActions.createTokens({ email, password }));
	};

	return (
		<S.container onSubmit={onSubmit}>
			<S.header>
				Login
			</S.header>
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
				Submit
			</C.button>
        </S.container>
	);
};

export default Login;
